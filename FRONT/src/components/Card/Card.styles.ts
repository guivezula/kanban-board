import styled from "styled-components";
import { styles } from "../../styles";

export const Container = styled.div`
  box-shadow: 2px 2px 1px 2px rgba(40, 44, 51, 0.2);
  background-color: rgb(40, 44, 51);
  border-radius: 8px;

  width: 200px;
  height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  margin: 0px 16px;
  border-bottom: 1px solid ${styles.color.white};

  & > span {
    font-size: ${styles.font.size.form};
    font-family: ${styles.font.family.form};
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 8px 0px;
  margin: 0px 16px;
  overflow-y: auto;
  height: 140px;
  font-family: ${styles.font.family.form};
  font-size: ${styles.font.size.form};
  text-align: left;
`;

export const CardInfo = styled.div`
  display: block;
`;
