import express from "express";
import * as TaskController from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Define "/paginated" route before "/:id"
router.get("/paginated", authMiddleware, TaskController.getPaginatedTasks);
router.get("/", authMiddleware, TaskController.getAllTasks);
router.get("/:id", authMiddleware, TaskController.getTask);
router.post("/", authMiddleware, TaskController.createTask);
router.put("/:id", authMiddleware, TaskController.updateTask);
router.delete("/:id", authMiddleware, TaskController.deleteTask);

export default router;
