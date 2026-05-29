const { extractText } = require("../services/ocrService");
const { parseIngredients } = require("../services/ingredientParser");

const uploadImage = async (req, res) => {
  try {
    const text = await extractText(req.file.path);

    const ingredients = parseIngredients(text);

    res.json({
      success: true,
      ingredients,
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