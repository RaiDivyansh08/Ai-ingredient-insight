function RecommendationCard({ score }) {
  let title = "";
  let message = "";
  let color = "";

  if (score >= 70) {
    title = "✅ Safe for Regular Consumption";
    message =
      "This product contains mostly low-risk ingredients and is generally safe for regular consumption.";
    color = "text-green-600";
  } else if (score >= 50) {
    title = "⚠️ Consume Occasionally";
    message =
      "This product contains some moderate-risk ingredients. Moderate consumption is recommended.";
    color = "text-yellow-600";
  } else {
    title = "🚫 Limit Consumption";
    message =
      "This product contains high-risk ingredients. Frequent consumption is not recommended.";
    color = "text-red-600";
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        Recommendation
      </h2>

      <h3 className={`font-semibold text-lg mb-3 ${color}`}>
        {title}
      </h3>

      <p className="text-gray-600">
        {message}
      </p>
    </div>
  );
}

export default RecommendationCard;
