import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../domain/task";
import { taskService } from "../services/TaskService";

export const getTasks = createAsyncThunk<Task[]>("task/get", taskService.get);

export const createTask = createAsyncThunk<Task, Task>(
  "task/create",
  taskService.create
);

export const updateTask = createAsyncThunk<
  Partial<Task>,
  { id: string; task: Partial<Task> }
>("task/update", ({ id, task }) => taskService.update(id, task));

export const resetError = createAction("task/resetError");

export const resetSuccess = createAction("task/resetSuccess");

export const removeTask = createAsyncThunk<Task[], string>(
  "task/remove",
  (id) => taskService.remove(id)
);
