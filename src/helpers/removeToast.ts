import { ToastManager } from "@/services/singleton";

export const removeToast = (id?: string) => {
  ToastManager.removeToast(id);
};
