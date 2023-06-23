import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const medico = sequelize.define(
  "medico",
  {
    code_med: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
    },
    especialidad: {
        type: DataTypes.STRING,
    },
    jvpm: {
        type: DataTypes.INTEGER,
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

