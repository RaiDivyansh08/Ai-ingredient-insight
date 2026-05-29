const uploadImage = async (req, res) => {
  try {
    res.json({
      success: true,
      filename: req.file.filename,
      path: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};