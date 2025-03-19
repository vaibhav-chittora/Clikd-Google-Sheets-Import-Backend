import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/dbConfig.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import importRoutes from "./routes/importRoutes.js";
import { PORT } from "./config/serverConfig.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", importRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  // Database Connection
  connectDB();
});
