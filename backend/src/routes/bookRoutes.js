import express from "express";
import bookController from "../controllers/bookController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", bookController.list);
router.post("/", auth, bookController.create);
router.put("/:id", auth, bookController.update);
router.delete("/:id", auth, bookController.delete);

export default router;
