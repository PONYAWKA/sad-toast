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
    if (this.toast.length < 3) {
      this.toast = [
        ...this.toast.map((e) => ({ ...e, isNew: false })),
        toastOption,
      ];
    } else if (this.toast.length) this.toast.at(-1)!.isNew = false;
  }

  getToast() {
    return this.toast;
  }
  removeToast() {
    if (this.toast.length) this.toast.at(-1)!.isNew = false;
    this.toast.pop();
  }
  removeToastById(id: string) {
    if (this.toast.length) this.toast.at(-1)!.isNew = false;
    this.toast = this.toast.filter((e) => e.id !== id);
  }
}

export const ToastManager = ToastService.setInstance();
