import React, { useEffect, useState } from "react";
import { Task } from "../../domain/task";
import { useManager } from "../../hooks/useManager";
import { Card } from "../Card/Card";
import { CardMode } from "../Card/Card.types";
import { ColumnProps } from "./Column.types";

import * as styles from "./Column.styles";

export const Column: React.FC<ColumnProps> = ({ type, title }) => {
  const { getAll: tasks } = useManager();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (type === "Backlog") return;
    setFilteredTasks(getFilteredTasks());
  }, [type, tasks]);

  const getFilteredTasks = () => {
    return tasks.filter((item) => item.lista === type);
  };

  const renderStructure = () => {
    if (type === "Backlog") {
      return (
        <styles.DropArea>
          <Card mode={CardMode.CREATE} />
        </styles.DropArea>
      );
    }

    return (
      <styles.DropArea>
        {filteredTasks.map((task) => (
          <Card key={task.id} task={task} mode={CardMode.VIEW} />
        ))}
      </styles.DropArea>
    );
  };

  return (
    <styles.Container>
      <styles.Title>{title}</styles.Title>
      {renderStructure()}
    </styles.Container>
  );
};
