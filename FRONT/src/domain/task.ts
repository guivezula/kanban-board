export interface Task {
  id: string;
  titulo: string;
  lista: TaskList;
  conteudo: string;
}

export enum TaskList {
  ToDo = "ToDo",
  Doing = "Doing",
  Done = "Done",
}
