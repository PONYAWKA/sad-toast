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
    this.toast = [...this.toast, toastOption];
  }

  getToast() {
    return this.toast;
  }
  removeToast(index: number = 0) {
    if (this.toast.length === 1) this.toast = [];
    else {
      this.toast.splice(index, 1);
      this.toast = [...this.toast];
    }
    console.log(this.toast.length);
  }
  removeToastById(id: string) {
   this.toast = this.toast.filter((e) => e.id !== id);
  }
}

export const ToastManager = ToastService.setInstance();
