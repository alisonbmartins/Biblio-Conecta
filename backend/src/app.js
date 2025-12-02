import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import copyRoutes from "./routes/copyRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API BibliotecaConecta rodando!"));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/copies", copyRoutes);
app.use("/loans", loanRoutes);
app.use("/reservations", reservationRoutes);

export default app;
