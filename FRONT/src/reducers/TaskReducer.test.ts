import { Task, TaskList } from "../domain/task";
import {
  createTask,
  getTasks,
  removeTask,
  resetError,
  resetSuccess,
  updateTask,
} from "./TaskActions";
import { taskReducer } from "./TaskReducer";

const TASKS: Task[] = [
  {
    id: "1",
    conteudo: "Task Description 1",
    titulo: "Task 1",
    lista: TaskList.ToDo,
  },
  {
    id: "2",
    conteudo: "Task Description 2",
    titulo: "Task 2",
    lista: TaskList.ToDo,
  },
];

const NEW_TASK = {
  id: "3",
  conteudo: "Task Description 3",
  titulo: "Task 3",
  lista: TaskList.ToDo,
};

describe("Task Reducer", () => {
  it("should return the initial state", () => {
    expect(taskReducer(undefined, { type: undefined })).toEqual({
      tasks: [],
      error: null,
      success: null,
    });
  });

  it("should not change the task list on action pending", () => {
    const action = { type: getTasks.pending };
    const state = taskReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        tasks: [],
      })
    );
  });

  it("should not change the task list on action rejected", () => {
    const action = { type: getTasks.rejected };
    const state = taskReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        tasks: [],
        error: "Erro ao buscar tarefas",
      })
    );
  });

  it("should change the task list on action fulfilled", () => {
    const action = {
      type: getTasks.fulfilled,
      payload: TASKS,
    };
    const state = taskReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
      })
    );
  });

  it("should not change the task list on create task pending", () => {
    const action = { type: createTask.pending };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
      })
    );
  });

  it("should not change the task list on create task rejected", () => {
    const action = { type: createTask.rejected };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
        error: "Erro ao criar tarefa",
      })
    );
  });

  it("should change the task list on create task fulfilled", () => {
    const action = {
      type: createTask.fulfilled,
      payload: NEW_TASK,
    };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: [...TASKS, NEW_TASK],
        success: "Tarefa criada com sucesso",
      })
    );
  });

  it("should not change the task list on update task pending", () => {
    const action = { type: updateTask.pending };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
      })
    );
  });

  it("should not change the task list on update task rejected", () => {
    const action = { type: updateTask.rejected };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
        error: "Erro ao atualizar tarefa",
      })
    );
  });

  it("should change the task list on update task fulfilled", () => {
    const action = {
      type: updateTask.fulfilled,
      payload: {
        id: "2",
        conteudo: "Task Description 2",
        titulo: "Task 2 Updated",
        lista: TaskList.ToDo,
      },
    };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: [TASKS[0], { ...TASKS[1], titulo: "Task 2 Updated" }],
        success: "Tarefa atualizada com sucesso",
      })
    );
  });

  it("should not change the task list on remove task pending", () => {
    const action = { type: removeTask.pending };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
      })
    );
  });

  it("should not change the task list on remove task rejected", () => {
    const action = { type: removeTask.rejected };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
        error: "Erro ao remover tarefa",
      })
    );
  });

  it("should change the task list on remove task fulfilled", () => {
    const action = {
      type: removeTask.fulfilled,
      payload: "1",
    };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: [TASKS[1]],
        success: "Tarefa removida com sucesso",
      })
    );
  });

  it("should reset the error", () => {
    const action = { type: resetError };
    const state = taskReducer(
      { tasks: TASKS, error: "Error", success: null },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
        error: null,
      })
    );
  });

  it("should reset the success", () => {
    const action = { type: resetSuccess };
    const state = taskReducer(
      { tasks: TASKS, error: null, success: "Success" },
      action
    );
    expect(state).toEqual(
      expect.objectContaining({
        tasks: TASKS,
        success: null,
        error: null,
      })
    );
  });
});
