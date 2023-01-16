import { ToastOptionType } from "types/ToastOptionType";

class ToastService {
  private static instance: ToastService;

  toast: ToastOptionType[] = [];
  setToast: (arg: ToastOptionType[]) => void = () => {
    return;
  };
  static setInstance(): ToastService {
    if (!ToastService.instance) {
      this.instance = new ToastService();
    }
    return this.instance;
  }
  init(setToast: (arg: ToastOptionType[]) => void) {
    this.setToast = setToast;
  }

  addToast(toastOption: ToastOptionType) {
    if (this.toast.length < 3) {
      this.toast = [
        ...this.toast.map((e) => ({ ...e, isNew: false })),
        toastOption,
      ];
    }
    this.setToast(this.toast);
  }

  getToast() {
    return this.toast;
  }
  removeToast(id?: string) {
    if (id) {
      if (this.toast.length) this.toast.at(-1)!.isNew = false;
      this.toast = this.toast.filter((e) => e.id !== id);
    } else if (this.toast.length) {
      this.toast.at(-1)!.isNew = false;
      this.toast.pop();
    }

    this.setToast([...this.toast]);
  }
}

export const ToastManager = ToastService.setInstance();
