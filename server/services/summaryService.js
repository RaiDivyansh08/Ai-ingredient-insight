const generateSummary = (analysis, score, status) => {
  const highRisk = analysis.filter(
    item => item.risk === "High"
  ).length;

  const moderateRisk = analysis.filter(
    item => item.risk === "Moderate"
  ).length;

  return `
This product contains ${highRisk} high-risk ingredients
and ${moderateRisk} moderate-risk ingredients.

Overall Safety Score: ${score}/100

Product Status: ${status}
`;
};

module.exports = {
  generateSummary,
};