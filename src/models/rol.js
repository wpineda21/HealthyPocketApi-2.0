import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

//await sequelize.sync({ force: true }); Funcion que permite Crear la Base de Datos en Dveaber Solo utilizar la primera vez de ejecucion
//Crea las Tablas sin necesidad de un Script DDL

export const rol = sequelize.define(
  "roles",
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
