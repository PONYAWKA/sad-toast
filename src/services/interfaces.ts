import { ToastOptionType } from "@/types/ToastOptionType";

export interface ItoastRef {
  current: { setToast: (arg: ToastOptionType[]) => void };
}
