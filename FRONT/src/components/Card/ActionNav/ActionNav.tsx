import { ButtonIcon } from "../../ButtonIcon/ButtonIcon";
import * as styles from "./ActionNav.styles";
import { ActionNavIconByType, ActionNavProps } from "./ActionNav.types";

export const ActionNav: React.FC<ActionNavProps> = ({ mode, ...actions }) => {
  const handleClick = (action: () => void) => () => {
    if (action) {
      action();
    }
  };

  return (
    <styles.Nav mode={mode}>
      {ActionNavIconByType[mode].map((icon) => (
        <ButtonIcon
          key={icon.name}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          icon={icon.name as any}
          onClick={() =>
            handleClick(
              actions[icon.action as keyof typeof actions] as () => void
            )
          }
        />
      ))}
    </styles.Nav>
  );
};
