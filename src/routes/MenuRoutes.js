import { Router } from "express";
import { Login } from "../controller/MenuController.js";

const router = Router();

// Rutas Para Usuario 
router.post("/",Login);


export default router;