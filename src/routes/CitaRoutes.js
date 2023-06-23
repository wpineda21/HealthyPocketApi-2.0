import { Router } from "express";
import { getcitas,CreateCita,ModificarCita,deleteCita } from "../controller/citacontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",getcitas);
router.post("/",CreateCita);
router.put("/:code_cita",ModificarCita);
router.delete("/:code_cita",deleteCita);

export default router;