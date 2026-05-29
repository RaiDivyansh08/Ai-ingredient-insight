import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[90vh] flex items-center justify-center">

        <div className="text-center px-6">

          <h1 className="text-6xl font-bold mb-6">
            IngredientInsight
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Scan food labels, analyze ingredients, identify harmful additives,
            and get AI-powered health insights instantly.
          </p>

          <Link
            to="/scan"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg"
          >
            Scan Product
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;