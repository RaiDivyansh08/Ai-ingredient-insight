const Ingredient = require("../models/Ingredient");
const { generateIngredientData } = require("./geminiService");

const analyzeIngredients = async (ingredients) => {
  const results = [];

  for (const ingredient of ingredients) {

    let data = await Ingredient.findOne({
      ingredient: ingredient.trim(),
    });

    console.log(
      "DB CHECK =>",
      ingredient,
      data ? "FOUND" : "NOT FOUND"
    );

    // Ignore bad fallback records
    if (
      data &&
      data.description ===
        "Analysis temporarily unavailable."
    ) {
      data = null;
    }

    // Found in MongoDB
    if (data) {
      results.push({
        ingredient,
        category: data.category,
        risk: data.risk,
        riskScore: data.riskScore,
        description: data.description,
        diabeticFriendly: data.diabeticFriendly,
        heartFriendly: data.heartFriendly,
      });

      continue;
    }

    console.log(
      `Unknown ingredient detected: ${ingredient}`
    );

    try {

      const aiData =
        await generateIngredientData(
          ingredient
        );

      await Ingredient.create({
        ingredient: ingredient.trim(),
        ...aiData,
      });

      console.log(
        "SAVED TO MONGODB =>",
        ingredient
      );

      results.push({
        ingredient,
        ...aiData,
      });

    } catch (error) {

      console.error(
        "INGREDIENT GEMINI ERROR =>",
        ingredient,
        error.message
      );

      results.push({
        ingredient,
        category: "Unknown",
        risk: "Moderate",
        riskScore: 0,
        description:
          "Analysis temporarily unavailable.",
        diabeticFriendly: null,
        heartFriendly: null,
      });
    }
  }

  return results;
};

module.exports = {
  analyzeIngredients,
};