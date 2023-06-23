import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const receta = sequelize.define(
  "receta",
  {
    code_rcta: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
    },
    code_med: {
        type: DataTypes.UUID,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

