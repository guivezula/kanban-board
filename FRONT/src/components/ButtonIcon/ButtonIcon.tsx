import React from "react";
import * as Icon from "react-icons/ai";
import { ButtonIconProps } from "./ButtonIcon.types";

import * as styles from "./ButtonIcon.styles";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, onClick, ...props }, ref) => {
    const getIcon = () => {
      return React.createElement(Icon[icon as keyof typeof Icon]);
    };

    return (
      <styles.Button onClick={onClick} ref={ref} {...props}>
        {getIcon()}
      </styles.Button>
    );
  }
);
