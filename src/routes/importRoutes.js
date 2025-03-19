import express from "express";
import { importTasksFromSheet } from "../controllers/importController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/import", authMiddleware, importTasksFromSheet);

export default router;
