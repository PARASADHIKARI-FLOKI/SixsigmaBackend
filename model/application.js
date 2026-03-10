import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Application = sequelize.define(
  "Application",
  {
    fullName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    mobile: { type: DataTypes.STRING, allowNull: true },
    whatsapp: { type: DataTypes.STRING, allowNull: true },
    dob: { type: DataTypes.DATEONLY, allowNull: true },
    currentAddress: { type: DataTypes.STRING, allowNull: true },
    permanentAddress: { type: DataTypes.STRING, allowNull: true },
    gender: { type: DataTypes.STRING, allowNull: true },
    desiredCourse: { type: DataTypes.STRING, allowNull: true },
    desiredCollege: { type: DataTypes.STRING, allowNull: true },
    alternativeCollege: { type: DataTypes.STRING, allowNull: true },
    budget: { type: DataTypes.STRING, allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
    academicStatus: { type: DataTypes.STRING, allowNull: true },
    documents: { type: DataTypes.JSON, allowNull: true }, // store uploaded files info
  },
  {
    tableName: "applications",
    timestamps: true,
  }
);

export default Application;