import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const medicamento = sequelize.define(
  "medicamento",
  {
    code_medca: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{args:true,msg:"El Campo esta Vacio"}  
        }
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{args:true,msg:"Por Favor Ingrese Un Numero"}  
        }
    },
    code_rcta: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,

      },
  },
  {
    timestamps: false,
  }
);

