import styled, { css } from "styled-components";
import { CardMode } from "../Card.types";
import { ActionNavProps } from "./ActionNav.types";

export const Nav = styled.div<ActionNavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;

  ${({ mode }) =>
    mode === CardMode.CREATE &&
    css`
      justify-content: center;
    `}
`;
