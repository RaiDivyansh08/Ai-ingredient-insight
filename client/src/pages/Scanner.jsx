import Navbar from "../components/common/Navbar";
import UploadBox from "../components/scanner/UploadBox";

function Scanner() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-10">

        <h1 className="text-4xl font-bold mb-4">
          Upload Ingredient Label
        </h1>

        <p className="text-gray-600">
          Upload a food ingredient label image for analysis.
        </p>

        <UploadBox />

      </div>
    </>
  );
}

export default Scanner;