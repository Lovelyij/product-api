const express = require("express");
const multer = require("multer");
const upload = require("../middleware/upload");

const router = express.Router();

// Single avatar
router.post("/avatar", upload.single("avatar"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.status(201).json({
    message: "Avatar uploaded",
    file: `/uploads/${req.file.filename}`,
  });
});

// Up to 5 images per post
router.post("/post-images", upload.array("images", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }
  res.status(201).json({
    message: "Images uploaded",
    files: req.files.map((f) => `/uploads/${f.filename}`),
  });
});

// Error handling
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large. Max size is 3MB" });
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Too many files. Max is 5 images" });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) return res.status(400).json({ error: err.message });
  next();
});

module.exports = router;