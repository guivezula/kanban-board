import styled from "styled-components";
import { styles } from "../../../styles";

export const Title = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 1px;
  border: 1px solid ${styles.color.white};
  padding: 0 8px;
  background-color: transparent;
  color: ${styles.color.white};
  box-sizing: border-box;
  text-align: center;
  font-family: ${styles.font.family.form};

  &:focus {
    outline: none;
    border-color: ${styles.color.green};
  }
`;

export const Description = styled.textarea`
  width: 100%;
  height: 128px;
  border-radius: 1px;
  border: 1px solid ${styles.color.white};
  padding: 8px;
  background-color: transparent;
  color: ${styles.color.white};
  box-sizing: border-box;
  font-family: ${styles.font.family.form};

  &:focus {
    outline: none;
    border-color: ${styles.color.green};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 2px;
`;
