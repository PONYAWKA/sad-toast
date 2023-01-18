import { nanoid } from "nanoid";

import { ToastManager } from "@/services/singleton";
import { ToastConfigType } from "@/types/ToastOptionType";

export const removeToast = (id?: string) => {
  ToastManager.removeToast(id);
};

export const addToast = (option: ToastConfigType) => {
  const localId = nanoid();
  const { duration, margin, position } = option;
  ToastManager.addToast({
    ...option,
    id: localId,
    isNew: true,
    margin: margin ?? 20,
    position: position ?? "LeftBottom",
  });

  if (duration) setTimeout(() => removeToast(localId), duration);
};
