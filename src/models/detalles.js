import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const detalles = sequelize.define(
  "detalles",
  {
    code_det: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    gasto: {
        type: DataTypes.DOUBLE,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    hora: {
      type: DataTypes.TIME,
    },
    resultado: {
      type: DataTypes.STRING,
    },
    code_exam: {
        type: DataTypes.UUID,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

