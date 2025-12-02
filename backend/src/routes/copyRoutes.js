import express from "express";
import copyController from "../controllers/copyController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", copyController.list);
router.post("/", auth, copyController.create);

export default router;
