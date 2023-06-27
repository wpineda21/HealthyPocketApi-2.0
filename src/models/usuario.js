import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define(
  "usuario",
  {
    code_user: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate:{
        isUUID: 4,
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: {args : [5,15], msg:" el username debe tener entre 5 y 15 caracteres, intentelo nuevamente"},
      }
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmail: {msg:"el correo deber tener el formato Correcto  @gmail.com / @outlook.com  etc"},
        }
      },
    nombre: {
        type: DataTypes.STRING,
        validate:{
          isAlpha: {msg:"Por favor Ingresar Solo Letras "},
          notEmpty:{args:true,msg:"El Campo esta Vacio"}  
        }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlpha: {msg:"Por favor Ingresar Solo Letras "},
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          function(password) {
            if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(password))) {
                throw new Error('La contraseña debe tener un minimo de 8 caracteres, incluyendo:  1 Mayuscula, 1 Minuscula, 1 numero especial y 1 Caracter');
            }
        }
        }
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

