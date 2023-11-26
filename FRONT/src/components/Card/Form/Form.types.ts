import { Task } from "../../../domain/task";

export interface FormProps {
  task?: Partial<Task>;
  onSubmit?: (task: Partial<Task>) => void;
}
