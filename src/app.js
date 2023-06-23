import express from "express";
import morgan from "morgan";
const app = express();
import UserRoutes from "./routes/UserRoutes.js";
import CitaRoutes from "./routes/CitaRoutes.js";
import MedicoRoutes from "./routes/MedicoRoutes.js";
import ExamenRoutes from "./routes/ExamenRoutes.js";
import DetallesRoutes from "./routes/ExamenDetalleRoutes.js"
import RecetaRoutes from "./routes/RecetaRoutes.js"
import MedicamentosRoutes from './routes/MedicamentoRoutes.js'
// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users",UserRoutes);
app.use("/api/cita",CitaRoutes);
app.use("/api/medico",MedicoRoutes);
app.use("/api/examen",ExamenRoutes);
app.use("/api/examen/detalle",DetallesRoutes);
app.use("/api/receta",RecetaRoutes);
app.use("/api/medicamento",MedicamentosRoutes);




export default app;
