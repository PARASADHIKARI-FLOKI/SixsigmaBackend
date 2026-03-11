import express from "express";
import upload from "../config/multer.js";
import Application from "../model/Application.js";

const router = express.Router();

router.post("/", upload.any(), async (req, res) => {
  try {
    const formData = req.body;

    // Convert date strings to proper format if needed
    if (formData.dob) formData.dob = new Date(formData.dob);

    // Map uploaded files
    const documents = {};
    if (req.files) {
      req.files.forEach(file => {
        documents[file.fieldname] = {
          filename: file.filename,
          path: file.path,
          mimetype: file.mimetype,
        };
      });
    }

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