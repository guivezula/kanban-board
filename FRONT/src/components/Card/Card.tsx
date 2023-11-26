import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ActionNav } from "./ActionNav/ActionNav";
import { CardMode, CardProps } from "./Card.types";
import { Form } from "./Form/Form";

import { Task, TaskList } from "../../domain/task";
import { useManager } from "../../hooks/useManager";
import * as styles from "./Card.styles";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ mode = CardMode.CREATE, task, ...props }, ref) => {
    const [modeState, setModeState] = React.useState<CardMode>(mode);
    const [taskState, setTaskState] = React.useState<Partial<Task>>({
      ...task,
    });
    const { create, update, moveTo, remove } = useManager();
    const renderViewMode = () => {
      if (modeState !== CardMode.VIEW) return;
      return (
        <styles.CardInfo>
          <styles.CardTitle>
            <span>{task?.titulo}</span>
            <ButtonIcon
              icon="AiFillEdit"
              onClick={() => setModeState(CardMode.EDIT)}
            />
          </styles.CardTitle>
          <styles.CardContent>{task?.conteudo}</styles.CardContent>
        </styles.CardInfo>
      );
    };

    const renderFormMode = () => {
      if (modeState !== CardMode.EDIT && modeState !== CardMode.CREATE) return;
      return <Form task={task} onSubmit={(newTask) => setTaskState(newTask)} />;
    };
    return (
      <styles.Container draggable ref={ref} {...props}>
        {renderViewMode()}
        {renderFormMode()}
        <ActionNav
          mode={modeState}
          onCancel={() => setModeState(CardMode.VIEW)}
          onCreate={() =>
            create({ ...taskState, lista: TaskList.ToDo } as Task)
          }
          onSave={() => {
            update(taskState?.id as string, taskState);
            setModeState(CardMode.VIEW);
          }}
          onNavigateNext={() => moveTo(taskState as Task, "next")}
          onNavigatePrev={() => moveTo(taskState as Task, "prev")}
          onRemove={() => {
            remove(taskState?.id as string);
          }}
        />
      </styles.Container>
    );
  }
);
