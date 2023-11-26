import { Task } from "../../domain/task";

export enum CardMode {
  CREATE = "create",
  EDIT = "edit",
  VIEW = "view",
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: CardMode;
  task?: Task;
}
