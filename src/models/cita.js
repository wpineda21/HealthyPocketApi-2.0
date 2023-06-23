import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const cita = sequelize.define(
  "cita",
  {
    code_cita: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    tiempo_hos: {
        type: DataTypes.INTEGER,
    },
    precio: {
        type: DataTypes.STRING,
    },
    code_user: {
        type: DataTypes.UUID,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

