import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const receta = sequelize.define(
  "receta",
  {
    code_rcta: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlpha: {msg:"Por favor Ingresar Solo Letras "},
          notEmpty:{args:true,msg:"El Campo esta Vacio"}  
        }
    },
    code_med: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,
      },
  },
  {
    timestamps: false,
  }
);

