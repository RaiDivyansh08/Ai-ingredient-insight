import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          IngredientInsight
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/scan">Scan</Link>
          <Link to="/history">History</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;