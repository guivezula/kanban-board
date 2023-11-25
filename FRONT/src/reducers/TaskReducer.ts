import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../domain/task";
import {
  createTask,
  getTasks,
  removeTask,
  resetError,
  updateTask,
} from "./TaskActions";

interface TaskState {
  tasks: Task[];
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  error: null,
};

export const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTasks.pending, (state) => ({ ...state, tasks: [] }));

  builder.addCase(getTasks.rejected, (state) => ({
    ...state,
    tasks: [],
    error: "Erro ao buscar tarefas",
  }));

  builder.addCase(getTasks.fulfilled, (state, action) => ({
    ...state,
    tasks: action.payload,
  }));

  builder.addCase(createTask.pending, (state) => ({ ...state }));

  builder.addCase(createTask.rejected, (state) => ({
    ...state,
    error: "Erro ao criar tarefa",
  }));

  builder.addCase(createTask.fulfilled, (state, action) => {
    state.tasks.push(action.payload);
  });

  builder.addCase(updateTask.pending, (state) => ({ ...state }));

  builder.addCase(updateTask.rejected, (state) => ({
    ...state,
    error: "Erro ao atualizar tarefa",
  }));

  builder.addCase(updateTask.fulfilled, (state, action) => {
    const index = state.tasks.findIndex(
      (task) => task.id === action.payload.id
    );
    state.tasks[index] = { ...state.tasks[index], ...action.payload };
  });

  builder.addCase(removeTask.pending, (state) => ({ ...state }));

  builder.addCase(removeTask.rejected, (state) => ({
    ...state,
    error: "Erro ao remover tarefa",
  }));

  builder.addCase(removeTask.fulfilled, (state, action) => {
    state.tasks = state.tasks.filter((task) => task.id !== action.payload);
  });

  builder.addCase(resetError, (state) => ({ ...state, error: null }));
});
