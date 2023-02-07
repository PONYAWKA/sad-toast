import { ToastOptionInterface } from "@/interfaces/ToastOptionInterface";
import { IToastRef } from "@/services/interfaces";

class ToastService {
  private static instance: ToastService;

  toast: ToastOptionInterface[] = [];
  toastRef: IToastRef = {
    current: {
      setToast: () => {
        return;
      },
    },
  };
  static setInstance(): ToastService {
    if (!ToastService.instance) {
      this.instance = new ToastService();
    }
    return this.instance;
  }

  init(ref: IToastRef) {
    this.toastRef = ref;
  }

  addToast(toastOption: ToastOptionInterface) {
    if (this.toast.length < 3) {
      this.toast = [
        ...this.toast.map((e) => ({ ...e, isNew: false })),
        toastOption,
      ];
    }
    this.toastRef.current.setToast(this.toast);
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

    this?.toastRef.current.setToast([...this.toast]);
  }
}

export const ToastManager = ToastService.setInstance();
