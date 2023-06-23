import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define(
  "usuario",
  {
    code_user: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
      },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    contraseña: {
        type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.INTEGER,
  },
  },
  {
    timestamps: false,
  }
);



/*usuario.hasOne(rol,{
    foreinkey: "code",
});

rol.belongsTo(usuario,{foreinkey:"code",targetId:"code"})*/

