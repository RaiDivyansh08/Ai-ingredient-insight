const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const { uploadImage } = require("../controllers/scanController");

router.post(
  "/upload",
  upload.single("image"),
  uploadImage
);

module.exports = router;