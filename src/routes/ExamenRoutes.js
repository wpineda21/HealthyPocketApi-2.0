import { Router } from "express";
import { getExam,ExamenCreate,UpdateExamen,deleteExamenes } from "../controller/examcontroller.js"; 
import { examen } from "../models/examen.js";
const router = Router();

// Rutas Para Cita
router.get("/",getExam);
router.post("/",ExamenCreate);
router.put('/:code_exam',UpdateExamen)
router.delete('/:code_exam',deleteExamenes)



export default router;