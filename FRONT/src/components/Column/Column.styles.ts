import styled from "styled-components";
import { styles } from "../../styles";

export const Container = styled.div`
  width: 250px;
  min-height: 500px;
  border-radius: 8px;
  box-shadow: 4px 2px 4px 4px rgba(166, 247, 80, 0.2);

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
