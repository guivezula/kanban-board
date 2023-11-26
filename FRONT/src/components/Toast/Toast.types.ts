export interface ToastProps {
  message?: string;
  type?: ToastType;
  open?: boolean;
  onClose?: () => void;
}

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
}

export enum ToastIconName {
  success = "AiOutlineCheckCircle",
  error = "AiOutlineMinusCircle",
}
