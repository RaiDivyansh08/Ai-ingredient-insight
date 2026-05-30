import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import HealthSummary from "../components/results/HealthSummary";
import ScoreCard from "../components/results/ScoreCard";
import RecommendationCard from "../components/results/RecommendationCard";
import IngredientTable from "../components/results/IngredientTable";
import RiskChart from "../components/results/RiskChart";
import AISummaryCard from "../components/results/AISummaryCard";
import { generatePDF } from "../utils/pdfGenerator";
function Result() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="p-10">
        No analysis data found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-8">

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <ScoreCard
            score={data.score}
            status={data.status}
          />

          <RecommendationCard
            score={data.score}
          />

        </div>



        <HealthSummary
          analysis={data.analysis}
          score={data.score}
        />
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold">
              🤖 AI Health Insights
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Generated using Gemini AI based on ingredient analysis and safety score.
            </p>
          </div>
          <AISummaryCard
            summary={data.aiSummary}
          />
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
  Powered by Gemini AI
</span>
        </div>
        <div className="mb-8">
          <RiskChart
            analysis={data.analysis}
          />
        </div>

        <IngredientTable
          analysis={data.analysis}
        />

      </div>
      <div className="flex justify-center mb-6">
  <button
    onClick={() => generatePDF(data)}
    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-5
      py-3
      rounded-lg
      font-medium
    "
  >
    📄 Download Report
  </button>
</div>

    </>
  );
}

export default Result;