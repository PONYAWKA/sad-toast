import ToastService from "../service/ToastService";

export const handleToastService = () => {
  const toastsService = ToastService.getInstance();

  return toastsService;
};
