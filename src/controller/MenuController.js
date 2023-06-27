import {getOneUser} from '../controller/maincontroller.js';
import { usuario } from '../models/usuario.js';


// Login Provisional que Podria ser el Oficial si no da problema en lo que es el cliente
export async function Login(req, res) {
    let {username,contraseña} = req.body;
    console.log(username,contraseña);
    try {
       usuario.findOne({
        where:{username:username,contraseña:contraseña}
        ,}).then( user => {
            if(!user){
                res.status(500).json({message:"Ingrese Un Usuario Valido, Intentelo Nuevamente"});
            }else{
                res.status(200).json({message:"Usuario Encontrado,Bienvenido"});
            }
        }).catch (err => {
            res.status(500).json({message:"no papu esta onda no funciona"});
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}