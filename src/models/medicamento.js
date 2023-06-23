import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const medicamento = sequelize.define(
  "medicamento",
  {
    code_medca: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    hora: {
        type: DataTypes.TIME,
    },
    cantidad: {
        type: DataTypes.INTEGER,
    },
    code_rcta: {
        type: DataTypes.UUID,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

