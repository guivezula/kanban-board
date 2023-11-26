import styled from "styled-components";
import { styles } from "../../styles";

export const Container = styled.div`
  height: inherit;
  width: 25vw;
  border: 0.6px solid ${styles.color.green};

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${styles.font.size.title};
  font-weight: bold;
  font-family: ${styles.font.family.title};
  color: ${styles.color.green};
  width: -webkit-fill-available;
  height: fit-content;
  text-align: center;
  border-bottom: 0.6px solid ${styles.color.green};
  margin: 0 8px 0px 8px;
  padding: 16px 0;
`;

export const DropArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px 0;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
