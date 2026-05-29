const calculateScore = (analysis) => {
  let score = 50;

  analysis.forEach((item) => {
    score += item.riskScore;
  });

  if (score > 100) score = 100;
  if (score < 0) score = 0;

  let status = "Moderate";

  if (score >= 70) status = "Healthy";
  else if (score <= 30) status = "Unsafe";

  return {
    score,
    status,
  };
};

module.exports = {
  calculateScore,
};