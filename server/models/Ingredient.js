const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  ingredient: {
    type: String,
    unique: true,
    required: true,
  },

  category: String,

  risk: String,

  riskScore: Number,

  description: String,

  diabeticFriendly: Boolean,

  heartFriendly: Boolean,
});

module.exports = mongoose.model(
  "Ingredient",
  ingredientSchema
);