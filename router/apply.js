import express from "express";
import upload from "../config/multer.js";
import Application from "../model/application.js";

const router = express.Router();

// POST route for application submission
router.post("/", upload.any(), async (req, res) => {
  try {
    const formData = req.body;

    // Map uploaded files to JSON
    const documents = {};
    req.files.forEach(file => {
      documents[file.fieldname] = {
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
      };
    });

    // Save to database
    const application = await Application.create({
      ...formData,
      documents,
    });

    res.status(200).json({
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;