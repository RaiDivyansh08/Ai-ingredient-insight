const parseIngredients = (text) => {
  return text
    .replace(/Ingredients:/gi, "")
    .split(",")
    .map(item => item.trim())
    .filter(item => item.length > 0);
};

module.exports = {
  parseIngredients,
};