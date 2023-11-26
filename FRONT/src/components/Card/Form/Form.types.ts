import { Task } from "../../../domain/task";

export interface FormProps {
  onSubmit?: (task: Partial<Task>) => void;
}
