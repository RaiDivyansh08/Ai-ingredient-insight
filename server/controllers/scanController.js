const { extractText } = require("../services/ocrService");
const { parseIngredients } = require("../services/ingredientParser");
const { calculateScore } = require("../services/scoringService");
const { analyzeIngredients } = require("../services/ingredientAnalyzer");
const { generateSummary } = require("../services/geminiService");

const uploadImage = async (req, res) => {
  try {
    const text = await extractText(req.file.path);

    const ingredients = parseIngredients(text);

    const analysis = analyzeIngredients(ingredients);

    const scoreData = calculateScore(analysis);

  const aiSummary = await generateSummary(
  analysis,
  scoreData.score
);

let parsedSummary;

try {
  parsedSummary = JSON.parse(aiSummary);
} catch (error) {
  parsedSummary = {
    positives: [],
    negatives: [],
    recommendation: aiSummary,
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};