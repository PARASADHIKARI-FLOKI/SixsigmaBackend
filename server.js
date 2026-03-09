import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import applyRoutes from "./router/apply.js";
import db from "./db/applydb.js"; // import the database connection

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/apply", applyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});