import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { Task, TaskList } from "../domain/task";
import {
  createTask,
  getTasks,
  removeTask,
  updateTask,
} from "../reducers/TaskActions";
import {
  selectError,
  selectSuccess,
  selectTask,
} from "../reducers/TaskSelectors";

export const useManager = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);
  const success = useSelector(selectSuccess);
  const tasks = useSelector(selectTask);

  const managerCallback = (callback: () => void) => {
    try {
      callback();
    } catch (e) {
      console.error(error);
    }
  };

  const fetch = () =>
    managerCallback(() => {
      dispatch(getTasks());
    });

  const create = (task: Task) =>
    managerCallback(() => {
      dispatch(createTask(task));
    });

  const update = (id: string, task: Partial<Task>) =>
    managerCallback(() => {
      if (!task) return;

      dispatch(updateTask({ id, task }));
    });

  const remove = (id: string) =>
    managerCallback(() => {
      dispatch(removeTask(id));
    });

  const moveTo = (task: Task, direction: "next" | "prev") =>
    managerCallback(() => {
      if (!task) return;

      let list;

      if (direction === "next") {
        if (task.lista === TaskList.ToDo) list = TaskList.Doing;
        if (task.lista === TaskList.Doing) list = TaskList.Done;
      }

      if (direction === "prev") {
        if (task.lista === TaskList.Done) list = TaskList.Doing;
        if (task.lista === TaskList.Doing) list = TaskList.ToDo;
      }

      update(task.id as string, { lista: list });
    });

  return {
    create,
    update,
    remove,
    fetch,
    getAll: tasks,
    moveTo,
    getErrorMessage: error,
    getSuccessMessage: success,
  };
};
