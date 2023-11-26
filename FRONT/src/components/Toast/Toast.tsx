import React from "react";
import * as Icon from "react-icons/ai";
import { ToastIconName, ToastProps } from "./Toast.types";

import * as styles from "./Toast.styles";

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  open,
  onClose,
}) => {
  const getIcon = () => {
    const icon = Icon[ToastIconName[type as keyof typeof ToastIconName]];
    return React.createElement(icon);
  };

  const handleClose = () => {
    if (!onClose) return;
    onClose();
  };

  return (
    <styles.Toast type={type} open={open}>
      {getIcon()}
      <styles.Label>{message}</styles.Label>
      <styles.Button icon="AiOutlineClose" onClick={handleClose} />
    </styles.Toast>
  );
};
