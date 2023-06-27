import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const cita = sequelize.define(
  "cita",
  {
    code_cita: {
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
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
          isDate:{args:true,msg:"Por Favor Igrese una fecha valida"}  
        }
    },
    tiempo_hos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{args:true,msg:"Por Favor Ingrese Un Numero"}  
        }
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{args:true,msg:"El Campo esta Vacio"}  
        }
    },
    code_user: {
        type: DataTypes.UUID,
        allowNull: false,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

