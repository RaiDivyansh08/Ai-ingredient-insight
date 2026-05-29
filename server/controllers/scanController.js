const uploadImage = async (req, res) => {
  res.json({
    success: true,
    message: "Upload route working"
  });
};

module.exports = {
  uploadImage
};