import { nanoid } from "nanoid";

import { removeToast } from "@/helpers/removeToast";
import { ToastConfigInterface } from "@/interfaces/ToastOptionInterface";
import { ToastManager } from "@/services/singleton";

export const addToast = (option: ToastConfigInterface) => {
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
