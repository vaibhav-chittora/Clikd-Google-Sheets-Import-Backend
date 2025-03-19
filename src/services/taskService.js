import * as TaskRepo from "../repositories/taskRepository.js";

export const getTasks = async (userId) => await TaskRepo.getAllTasks(userId);
export const getTask = async (taskId, userId) =>
  await TaskRepo.getTaskById(taskId, userId);
export const addTask = async (taskData) => await TaskRepo.createTask(taskData);
export const editTask = async (taskId, userId, updateData) =>
  await TaskRepo.updateTask(taskId, userId, updateData);
export const removeTask = async (taskId, userId) =>
  await TaskRepo.deleteTask(taskId, userId);
