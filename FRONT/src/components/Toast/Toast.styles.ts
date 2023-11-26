import styled, { css } from "styled-components";
import { styles } from "../../styles";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ToastProps, ToastType } from "./Toast.types";

export const Toast = styled.div<ToastProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  max-width: 400px;
  padding: 16px;
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  z-index: 9999;
  font-size: ${styles.font.size.title};
  font-weight: bold;
  visibility: hidden;
  transform: translateY(-100%);
  border-radius: 4px;

  transition-property: visibility, transform;
  transition-timing-function: cubic-bezier(0.55, 0.09, 0.68, 0.53);
  transition-duration: 0.3s;

  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      transform: translateY(0);
    `}

  ${({ type }) =>
    type === ToastType.SUCCESS &&
    css`
      background-color: #a1f7c5;
      color: #00401b;

      ${Button} {
        color: #00401b;
      }
    `}

    ${({ type }) =>
    type === ToastType.ERROR &&
    css`
      background-color: #ffd9d9;
      color: #400000;

      ${Button} {
        color: #400000;
      }
    `}
`;

export const Button = styled(ButtonIcon)`
  &:hover {
    background-color: ${styles.color.white};
  }
`;

export const Label = styled.span`
  text-align: left;
  text-wrap: wrap;
`;
