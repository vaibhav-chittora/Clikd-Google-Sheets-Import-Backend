import Task from "../models/taskModel.js";

export const getAllTasks = async (userId) => await Task.find({ user: userId });
export const getTaskById = async (taskId, userId) =>
  await Task.findOne({ _id: taskId, user: userId });
export const createTask = async (taskData) => await Task.create(taskData);
export const updateTask = async (taskId, userId, updateData) =>
  await Task.findOneAndUpdate({ _id: taskId, user: userId }, updateData, {
    new: true,
  });
export const deleteTask = async (taskId, userId) =>
  await Task.findOneAndDelete({ _id: taskId, user: userId });
