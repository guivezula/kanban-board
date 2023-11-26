export interface ToastProps {
  message?: string | null;
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
