function RiskBadge({ risk }) {
  const styles = {
    High: "bg-red-100 text-red-600",
    Moderate: "bg-orange-100 text-orange-600",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[risk] || "bg-gray-100 text-gray-600"
      }`}
    >
      {risk}
    </span>
  );
}

export default RiskBadge;