import { useState } from "react";
import API from "../../services/api";

function UploadBox() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

      console.log(response.data);

      alert("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="mt-10">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {image && (
        <div className="mt-5">
          <img
            src={image}
            alt="Preview"
            className="w-80 rounded-lg shadow"
          />

          <button
            onClick={handleUpload}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadBox;