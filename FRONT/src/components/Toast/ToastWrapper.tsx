import { useEffect, useState } from "react";
import { useManager } from "../../hooks/useManager";
import { Toast } from "./Toast";
import { ToastType } from "./Toast.types";

export const ToastWrapper: React.FC = () => {
  const { getErrorMessage, getSuccessMessage } = useManager();

  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<ToastType>(ToastType.SUCCESS);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (getErrorMessage || getSuccessMessage) {
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }

    if (getErrorMessage) {
      setState(ToastType.ERROR);
      setMessage(getErrorMessage);
    }

    if (getSuccessMessage) {
      setState(ToastType.SUCCESS);
      setMessage(getSuccessMessage);
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
