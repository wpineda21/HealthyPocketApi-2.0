import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const examen = sequelize.define(
  "examens",
  {
    code_exam: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
    },
    code_cita: {
        type: DataTypes.UUID,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

