import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { ButtonIcon } from "./components/ButtonIcon/ButtonIcon";
import { Form } from "./components/Card/Form/Form";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <ButtonIcon icon="AiOutlineCloseCircle" />
      </p>
      {/* <Toast
        message={"Cadastrado com sucesso shauhsa"}
        type={ToastType.ERROR}
        open={true}
      /> */}
      <Form />
    </>
  );
}

export default App;
