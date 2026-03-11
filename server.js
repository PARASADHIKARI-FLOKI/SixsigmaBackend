import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import applyRoutes from "./router/apply.js";
import sequelize from "./db/sequelize.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/apply", applyRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("Database sync failed:", err));