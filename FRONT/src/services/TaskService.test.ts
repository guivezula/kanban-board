import { TaskList } from "../domain/task";
import { taskService } from "./TaskService";

describe("Task Service", () => {
  it("should create a task", async () => {
    jest.spyOn(taskService, "create").mockResolvedValue({
      id: "1",
      conteudo: "Task Description",
      titulo: "Task",
      lista: TaskList.ToDo,
    });

    const response = await taskService.create({
      conteudo: "Task Description",
      titulo: "Task",
      lista: TaskList.ToDo,
    });

    expect(response).toEqual({
      id: "1",
      conteudo: "Task Description",
      titulo: "Task",
      lista: TaskList.ToDo,
    });
  });

  it("should get tasks", async () => {
    jest.spyOn(taskService, "get").mockResolvedValue([
      {
        id: "1",
        conteudo: "Task Description",
        titulo: "Task",
        lista: TaskList.ToDo,
      },
    ]);

    const response = await taskService.get();

    expect(response).toEqual([
      {
        id: "1",
        conteudo: "Task Description",
        titulo: "Task",
        lista: TaskList.ToDo,
      },
    ]);
  });

  it("should update a task", async () => {
    jest.spyOn(taskService, "update").mockResolvedValue({
      id: "1",
      titulo: "Updated Task",
    });

    const task = { id: "1", titulo: "Updated Task" };
    const response = await taskService.update("1", task);

    expect(response).toEqual({ id: "1", titulo: "Updated Task" });
  });

  it("should delete a task", async () => {
    jest.spyOn(taskService, "get").mockResolvedValue([
      {
        id: "1",
        conteudo: "Task Description",
        titulo: "Task",
        lista: TaskList.ToDo,
      },
    ]);
    let response = await taskService.get();
    expect(response).toEqual([
      {
        id: "1",
        conteudo: "Task Description",
        titulo: "Task",
        lista: TaskList.ToDo,
      },
    ]);
    jest.spyOn(taskService, "remove").mockResolvedValue([]);

    await taskService.remove("1");

    expect(taskService.remove).toHaveBeenCalled();

    jest.spyOn(taskService, "get").mockResolvedValue([]);

    response = await taskService.get();
    expect(response).toEqual([]);
  });
});
