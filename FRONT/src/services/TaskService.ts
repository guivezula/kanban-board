import { Task } from "../domain/task";
import { request } from "./Request";

const get = async (): Promise<Task[]> => {
  return await request<Task[]>("GET", "cards");
};

const create = async (task: Task): Promise<Task> => {
  return await request<Task>("POST", "cards", task);
};

const update = async (
  id: string,
  task: Partial<Task>
): Promise<Partial<Task>> => {
  return await request<Partial<Task>>("PUT", `cards/${id}`, task);
};

const remove = async (id: string): Promise<void> => {
  return await request<void>("DELETE", `cards/${id}`);
};

export const taskService = {
  get,
  create,
  update,
  remove,
};
