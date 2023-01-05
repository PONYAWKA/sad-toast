class ToastService {
  private static instance: ToastService;

  static setInstance(): ToastService {
    if (!ToastService.instance) {
      this.instance = new ToastService();
    }
    return this.instance;
  }
}

export const ToastManager = ToastService.setInstance();
