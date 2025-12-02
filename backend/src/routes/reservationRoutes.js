import express from "express";
import reservationController from "../controllers/reservationController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", auth, reservationController.list);
router.post("/", auth, reservationController.reserve);

export default router;
