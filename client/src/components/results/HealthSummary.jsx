function HealthSummary({ analysis, score }) {
  const highRisk = analysis.filter(
    (item) => item.risk === "High"
  ).length;

  const moderateRisk = analysis.filter(
    (item) => item.risk === "Moderate"
  ).length;

  const lowRisk = analysis.filter(
    (item) => item.risk === "Low"
  ).length;

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">
        Health Summary
      </h2>

      <div className="space-y-2 text-gray-700">

        <p>
          🔴 High Risk Ingredients: {highRisk}
        </p>

        <p>
          🟠 Moderate Risk Ingredients: {moderateRisk}
        </p>

        <p>
          🟢 Low Risk Ingredients: {lowRisk}
        </p>

        <hr className="my-3" />

        <p>
          Overall Safety Score: <strong>{score}/100</strong>
        </p>

      </div>

    </div>
  );
}

export default HealthSummary;