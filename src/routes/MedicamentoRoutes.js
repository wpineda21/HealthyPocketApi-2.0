import { Router } from "express";
import { getMedicamentos,CrearMedicamentos,EliminarMedicamento,ActualizarMedicamento  } from "../controller/medicamentocontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",getMedicamentos);
router.post("/",CrearMedicamentos);
router.put('/:code_medca',ActualizarMedicamento)
router.delete('/:code_medca',EliminarMedicamento)


export default router;