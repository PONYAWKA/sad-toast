import { ToastOptionType } from "@/types/ToastOptionType";

export interface IToastRef {
  current: { setToast: (arg: ToastOptionType[]) => void };
}
