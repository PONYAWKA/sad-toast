import { nanoid } from "nanoid";

import { ToastConfigType } from "@/types/ToastOptionType";
import { ToastManager } from "@/types/utils/singleton";

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
