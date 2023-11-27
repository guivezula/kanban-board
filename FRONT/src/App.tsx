import { useEffect } from "react";
import * as styles from "./App.styles";
import { Column } from "./components/Column/Column";
import { ToastWrapper } from "./components/Toast/ToastWrapper";
import { TaskList } from "./domain/task";
import { useManager } from "./hooks/useManager";

function App() {
  const { fetch } = useManager();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <styles.Title>Kanban Board</styles.Title>
      <styles.AppContainer>
        <Column type="Backlog" title="Novo" />
        <Column type={TaskList.ToDo} title="To Do" />
        <Column type={TaskList.Doing} title="Doing" />
        <Column type={TaskList.Done} title="Done" />
      </styles.AppContainer>
      <ToastWrapper />
    </>
  );
}

export default App;
