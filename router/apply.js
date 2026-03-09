import express from "express";
import upload from "../config/multer.js";

const router = express.Router();

// POST route for dynamic file uploads
router.post("/", upload.any(), (req, res) => {
  try {
    const formData = req.body; // any text fields
    const files = req.files;   // all uploaded files

    console.log("Form Data:", formData);
    console.log("Uploaded Files:", files);

    res.status(200).json({
      message: "Application submitted successfully",
      data: { formData, files },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;