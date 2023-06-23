import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const rol = sequelize.define(
  "roles",
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
