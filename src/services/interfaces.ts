import { ToastOptionInterface } from "@/interfaces/ToastOptionInterface";

export interface IToastRef {
  current: { setToast: (arg: ToastOptionInterface[]) => void };
}
