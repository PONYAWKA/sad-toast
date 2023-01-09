import { ToastConigType } from "Types/ToastOptionType";
import { nanoid } from "nanoid";
import { ToastManager } from "utils/singleton";

export const removeToast = (id?: string) => {
  ToastManager.removeToast(id);
};

export const addToast = (option: ToastConigType) => {
  const localid = nanoid();
  const { duration, margin, position } = option;
  ToastManager.addToast({
    ...option,
    id: localid,
    isNew: true,
    margin: margin ?? 20,
    position: position ?? "LeftBottom",
  });

  if (duration) setTimeout(() => removeToast(localid), duration);
};
