const parseIngredients = (text) => {
  return text
    .replace(/Ingredients:/gi, "")
    .split(",")
    .map(item =>
      item
        .replace(/[\[\]\(\)\{\}:;]/g, "") // remove special chars
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(item => item.length > 1);
};

module.exports = {
  parseIngredients,
};