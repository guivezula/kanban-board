import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Task } from "../../../domain/task";
import * as styles from "./Form.styles";
import { FormProps } from "./Form.types";

export const Form: React.FC<FormProps> = ({ task, onSubmit }) => {
  useEffect(() => {
    if (!task?.conteudo && !task?.titulo) {
      resetField("titulo");
      resetField("conteudo");
    }
  }, [task]);

  const { register, handleSubmit, resetField } = useForm<Partial<Task>>({
    defaultValues: task,
  });
  const handler = handleSubmit((data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  });

  return (
    <styles.Container>
      <styles.Title
        placeholder="Título"
        {...register("titulo", {
          onChange: handler,
        })}
      />
      <styles.Description
        placeholder="Conteúdo"
        {...register("conteudo", {
          onChange: handler,
        })}
      />
    </styles.Container>
  );
};
