import styled from "styled-components";
import { styles } from "./styles";

export const AppContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Title = styled.h1`
  font-size: 54px;
  font-family: ${styles.font.family.form};
  font-weight: 300;
  color: ${styles.color.green};
`;
