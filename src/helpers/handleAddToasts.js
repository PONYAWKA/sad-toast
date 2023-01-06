import { handleToastService } from "./handleToastService";

export const handleAddToasts = (type, obj) => () => {
  const { addToast } = handleToastService();

  return addToast({ type, ...obj });
};
