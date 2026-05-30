function AISummaryCard({ summary }) {
  return (
    <div className="space-y-6">

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          🟢 Positive Points
        </h2>

        {summary.positives?.map((item, index) => (
          <p key={index} className="mb-2">
            ✓ {item}
          </p>
        ))}
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          🔴 Health Concerns
        </h2>

        {summary.negatives?.map((item, index) => (
          <p key={index} className="mb-2">
            ✗ {item}
          </p>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-yellow-700 mb-4">
          🟡 Recommendation
        </h2>

        <p>
          {summary.recommendation}
        </p>
      </div>

    </div>
  );
}

export default AISummaryCard;