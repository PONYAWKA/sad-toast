class ToastService {
  static getInstance() {
    if (!this.instance) {
      this.instance = new ToastService();
    }

    return this.instance;
  }

  constructor() {
    this.toast = [];
    this.containerRef = null;
  }

  init = (ref) => {
    this.containerRef = ref;
  };

  getToasts = () => {
    return this.toast;
  };

  addToast = ({ type, title, subtitle, backgroundColor }) => {
    const id = Date.now().toString();
    this.containerRef?.current.onToast({
      type,
      id,
      title,
      subtitle,
      backgroundColor,
    });
    this.toast.push({ type, id, title, subtitle, backgroundColor });
  };

  removeToast = (id) => {
    this.containerRef?.current.onRemove(this.toast, id);
    this.toast = this.toast.filter((e) => e.id !== id);
    return this.toast;
  };
}

export default ToastService;
