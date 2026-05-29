import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import HealthSummary from "../components/results/HealthSummary";
import ScoreCard from "../components/results/ScoreCard";
import RecommendationCard from "../components/results/RecommendationCard";
import IngredientTable from "../components/results/IngredientTable";
import RiskChart from "../components/results/RiskChart";
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
  <RiskChart
    analysis={data.analysis}
  />
</div>

      <IngredientTable
        analysis={data.analysis}
      />

    </div>

  </>
);
}

export default Result;