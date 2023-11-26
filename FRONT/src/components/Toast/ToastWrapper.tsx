import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useManager } from "../../hooks/useManager";
import { resetError, resetSuccess } from "../../reducers/TaskActions";
import { Toast } from "./Toast";
import { ToastType } from "./Toast.types";

export const ToastWrapper: React.FC = () => {
  const { getErrorMessage, getSuccessMessage } = useManager();

  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<ToastType>(ToastType.SUCCESS);
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getErrorMessage) {
      setState(ToastType.ERROR);
      setMessage(getErrorMessage);
    }

    if (getSuccessMessage) {
      setState(ToastType.SUCCESS);
      setMessage(getSuccessMessage);
    }

    if (getErrorMessage || getSuccessMessage) {
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
        dispatch(resetError());
        dispatch(resetSuccess());
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [getErrorMessage, getSuccessMessage]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Toast
      open={visible}
      type={state}
      message={message}
      onClose={handleClose}
    />
  );
};
