const { extractText } = require("../services/ocrService");
const { parseIngredients } = require("../services/ingredientParser");
const { calculateScore } = require("../services/scoringService");
const { analyzeIngredients } = require("../services/ingredientAnalyzer");
const { generateSummary } = require("../services/geminiService");

const uploadImage = async (req, res) => {
  try {
    const text = await extractText(req.file.path);

    const ingredients = parseIngredients(text);

    const analysis = await analyzeIngredients(ingredients);
    const scoreData = calculateScore(analysis);

 let parsedSummary;

try {

  const aiSummary =
    await generateSummary(
      analysis,
      scoreData.score
    );

  parsedSummary = JSON.parse(
    aiSummary
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()
  );

} catch (error) {

  console.log(
    "Summary unavailable, using fallback"
  );

  parsedSummary = {
    positives: [],
    negatives: [],
    recommendation:
      "AI summary temporarily unavailable.",
  };
}

res.json({
  success: true,
  analysis,
  score: scoreData.score,
  status: scoreData.status,
  aiSummary: parsedSummary,
});

  } catch (error) {

  console.error(
    "UPLOAD ERROR =>",
    error
  );

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

module.exports = {
  uploadImage,
};