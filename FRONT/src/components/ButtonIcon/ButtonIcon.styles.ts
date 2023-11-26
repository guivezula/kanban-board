import styled from "styled-components";
import { styles } from "../../styles";

export const Button = styled.button`
  all: unset;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${styles.color.white};
  cursor: pointer;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${styles.color.green};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
