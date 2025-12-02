import express from "express";
import loanController from "../controllers/loanController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", auth, loanController.list);
router.post("/", auth, loanController.loan);
router.put("/return/:id", auth, loanController.return);

export default router;
