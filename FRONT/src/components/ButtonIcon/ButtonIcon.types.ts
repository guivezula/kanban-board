import * as Icon from "react-icons/ai";

export interface ButtonIconProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof Icon;
}
