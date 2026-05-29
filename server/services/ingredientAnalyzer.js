const ingredientDB = require("../data/ingredients.json");

const analyzeIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const data = ingredientDB[ingredient];

    if (data) {
      return {
        ingredient,
        ...data,
      };
    }

    return {
      ingredient,
      category: "Unknown",
      risk: "Unknown",
      riskScore: 0,
      description: "No data available."
    };
  });
};

module.exports = {
  analyzeIngredients,
};