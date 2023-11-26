import { TaskList } from "../../domain/task";

export interface ColumnProps {
  type?: TaskList | "Backlog";
  title?: string;
}
