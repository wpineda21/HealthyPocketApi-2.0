import bcrypt from "bcrypt";
import { getOneUser } from "../controller/maincontroller.js";
import { usuario } from "../models/usuario.js";

// Login Provisional que Podria ser el Oficial si no da problema en lo que es el cliente
export async function Login(req, res) {
    let { username, contraseña } = req.body;
    console.log(username, contraseña);

    try {
        usuario.findOne({
            where: { username: username },
        }).then((user) => {
            if (!user) {
                res.status(500).json({ message: "Ingrese Un Usuario Valido, Intentelo Nuevamente" });
            } else {
                bcrypt.compare(contraseña, user.contraseña, (err, result) => {
                    if (result) {
                        res.status(200).json(JSON.stringify(user));
                        //res.status(200).json({ message: "Usuario Encontrado, Bienvenido" });
                        //console.log(user);
                    } else {
                        res.status(500).json({ message: "Contraseña incorrecta" });
                    }
                });
            }
        }).catch(err => {
            res.status(500).json({ message: "No papu, esta onda no funciona" });
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

//registrar Usuarios Verificando que el usuario no exista en la Base de Datos
export async function Signup(req, res) {
    const { username, correo, nombre, apellido, contraseña, code } = req.body;
    try {
        usuario
            .findOne({
                where: { username: username },
            })
            .then(async (user) => {
                if (!user) {
                    bcrypt.hash(contraseña, 10, async (err, hash) => {
                        if (err) {
                            res
                                .status(500)
                                .json({ message: "Error al cifrar la contraseña" });
                        } else {
                            let newUsuario = await usuario.create(
                                {
                                    username,
                                    correo,
                                    nombre,
                                    apellido,
                                    contraseña: hash,
                                    code,
                                },
                                {
                                    fields: [
                                        "username",
                                        "correo",
                                        "nombre",
                                        "apellido",
                                        "contraseña",
                                        "code",
                                    ],
                                }
                            );
                            console.log("Usuario Registrado con Exito");
                            return res.json(newUsuario);
                        }
                    });
                } else {
                    res.status(200).json({
                        message:
                            "El Nombre de Usuario Ya está Registrado, Intente con otro",
                    });
                }
            })
            .catch((err) => {
                res.status(500).json(err.message);
            });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}