const { extractText } = require("../services/ocrService");
const { parseIngredients } = require("../services/ingredientParser");
const { calculateScore } = require("../services/scoringService");
const { analyzeIngredients } = require("../services/ingredientAnalyzer");
const uploadImage = async (req, res) => {
  try {
    const text = await extractText(req.file.path);
    const ingredients = parseIngredients(text);
    const analysis = analyzeIngredients(ingredients);
    const scoreData = calculateScore(analysis);

    res.json({
  success: true,
  analysis,
  score: scoreData.score,
  status: scoreData.status,
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