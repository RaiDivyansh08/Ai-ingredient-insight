function ScoreCard({ score, status }) {

  let scoreColor = "text-green-600";
  let badgeStyle = "bg-green-100 text-green-700";

  if (score < 50) {
    scoreColor = "text-red-600";
    badgeStyle = "bg-red-100 text-red-700";
  } else if (score < 70) {
    scoreColor = "text-yellow-500";
    badgeStyle = "bg-yellow-100 text-yellow-700";
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-3">
        Safety Score
      </h2>

      <h1 className={`text-6xl font-bold ${scoreColor}`}>
        {score}/100
      </h1>

      <div className="mt-4">
        <span
          className={`px-4 py-2 rounded-full font-medium ${badgeStyle}`}
        >
          {status}
        </span>
      </div>

    </div>
  );
}

export default ScoreCard;