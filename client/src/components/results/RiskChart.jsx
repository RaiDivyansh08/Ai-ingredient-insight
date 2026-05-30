import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function RiskChart({ analysis }) {

  const highRisk = analysis.filter(
    (item) => item.risk === "High"
  ).length;

  const moderateRisk = analysis.filter(
    (item) => item.risk === "Moderate"
  ).length;

  const lowRisk = analysis.filter(
    (item) => item.risk === "Low"
  ).length;

  const data = {
    labels: [
      "High Risk",
      "Moderate Risk",
      "Low Risk",
    ],

    datasets: [
      {
        data: [
          highRisk,
          moderateRisk,
          lowRisk,
        ],

        backgroundColor: [
          "#ef4444",
          "#f59e0b",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Risk Distribution
      </h2>

      <div className="w-64 h-64 mx-auto">
        <Pie
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>

    </div>
  );
}

export default RiskChart;