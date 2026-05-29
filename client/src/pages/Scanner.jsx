import Navbar from "../components/common/Navbar";
import UploadBox from "../components/scanner/UploadBox";

function Scanner() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12">

        <div className="max-w-4xl mx-auto px-4">

          <h1 className="text-4xl font-bold text-center mb-4">
            Scan Food Ingredients
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Upload a food label image and get instant health insights.
          </p>

          <UploadBox />

        </div>

      </div>
    </>
  );
}

export default Scanner;