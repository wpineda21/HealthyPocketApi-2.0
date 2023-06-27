import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const medico = sequelize.define(
  "medico",
  {
    code_med: {
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
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{args:true,msg:"El Campo esta Vacio"}  
        }
    },
    jvpm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{args:true,msg:"Por Favor Ingrese Un Numero"}  
        }
    },
    code_cita: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,
      },
  },
  {
    timestamps: false,
  }
);

