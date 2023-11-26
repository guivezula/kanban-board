import * as styles from "./App.styles";
import { Column } from "./components/Column/Column";
import { TaskList } from "./domain/task";

function App() {
  return (
    <styles.AppContainer>
      <Column type="Backlog" title="Novo" />
      <Column type={TaskList.ToDo} title="To Do" />
      <Column type={TaskList.Doing} title="Doing" />
      <Column type={TaskList.Done} title="Done" />
    </styles.AppContainer>
  );
}

export default App;
