import { ToastOptionType } from "Types/ToastOptionType";

class ToastService {
  private static instance: ToastService;

  toast: ToastOptionType[] = [];

  static setInstance(): ToastService {
    if (!ToastService.instance) {
      this.instance = new ToastService();
    }
    return this.instance;
  }

  addToast(toastOption: ToastOptionType) {
    this.toast = [
      ...this.toast.map((e) => ({ ...e, isNew: false })),
      toastOption,
    ];
  }

  getToast() {
    return this.toast;
  }
  removeToast() {
    this.toast.shift();
  }
  removeToastById(id: string) {
    this.toast = this.toast.filter((e) => e.id !== id);
  }
}

export const ToastManager = ToastService.setInstance();
