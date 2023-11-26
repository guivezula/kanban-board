import { RootState } from "../app/store";

export const selectTask = (state: RootState) => state.task.tasks;
export const selectError = (state: RootState) => state.task.error;
export const selectSuccess = (state: RootState) => state.task.success;
