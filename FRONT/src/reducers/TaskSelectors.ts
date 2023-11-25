import { RootState } from "../app/store";

export const selectTask = (state: RootState) => state.task.tasks;
export const selectError = (state: RootState) => state.task.error;
