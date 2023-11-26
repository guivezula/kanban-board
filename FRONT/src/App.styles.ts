import styled from "styled-components";
import { styles } from "./styles";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
  box-sizing: border-box;
  overflow: auto;
  background-color: ${styles.color.grey};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
