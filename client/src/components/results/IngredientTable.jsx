import RiskBadge from "./RiskBadge";

function IngredientTable({ analysis }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Ingredient Analysis
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Ingredient</th>
            <th className="text-left py-3">Category</th>
            <th className="text-left py-3">Description</th>
            <th className="text-left py-3">Risk</th>
          </tr>
        </thead>

        <tbody>
          {analysis.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4">
                {item.ingredient}
              </td>

              <td>
                {item.category}
              </td>
              <td className="max-w-md">
  {item.description}
</td>
              <td>
                <RiskBadge risk={item.risk} />
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default IngredientTable;