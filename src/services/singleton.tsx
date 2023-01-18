import { ItoastRef } from "@/services/interfaces";
import { ToastOptionType } from "@/types/ToastOptionType";

class ToastService {
  private static instance: ToastService;

  toast: ToastOptionType[] = [];
  toastRef: ItoastRef = {
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

  init(ref: ItoastRef) {
    this.toastRef = ref;
  }

  addToast(toastOption: ToastOptionType) {
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
