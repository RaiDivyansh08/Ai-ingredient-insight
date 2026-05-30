import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-green-600">
          IngredientInsight
        </h1>

        <div className="flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/scan"
            className="hover:text-green-600"
          >
            Scan
          </Link>

          <Link
            to="/history"
            className="hover:text-green-600"
          >
            History
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;