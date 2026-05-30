import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
function UploadBox() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setImage(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await API.post("/upload", formData);

      // Save Scan History
      const history =
        JSON.parse(localStorage.getItem("scanHistory")) || [];

      history.unshift({
        ...response.data,
        date: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "scanHistory",
        JSON.stringify(history)
      );
      console.log(response.data);
      navigate("/result", {
        state: response.data,
      });
      alert("Analysis Completed");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">

      <label
        className="
          border-2 border-dashed
          border-green-500
          rounded-xl
          p-10
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          hover:bg-green-50
          transition
        "
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <h2 className="text-xl font-semibold">
          Upload Ingredient Label
        </h2>

        <p className="text-gray-500 mt-2">
          JPG, JPEG, PNG Supported
        </p>
      </label>

      {image && (
        <div className="mt-8 text-center">

          <img
            src={image}
            alt="Preview"
            className="
              mx-auto
              w-80
              rounded-xl
              shadow-lg
              border
            "
          />

          <button
            onClick={handleUpload}
            className="
              mt-6
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-3
              rounded-lg
              font-medium
            "
          >
            Analyze Ingredients
          </button>

        </div>
      )}
    </div>
  );
}

export default UploadBox;