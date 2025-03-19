import * as TaskService from "../services/taskService.js";
import Task from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getTasks(req.user.id);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await TaskService.getTask(req.params.id, req.user.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = await TaskService.addTask({
      user: req.user.id,
      title,
      description,
      dueDate,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await TaskService.editTask(
      req.params.id,
      req.user.id,
      req.body
    );
    if (!updatedTask)
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await TaskService.removeTask(
      req.params.id,
      req.user.id
    );
    if (!deletedTask)
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// paginated api

export const getPaginatedTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10 } = req.query;

    const tasks = await Task.find({ user: userId }) // ✅ Use Task Model
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalTasks = await Task.countDocuments({ user: userId });

    res.json({
      tasks,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
