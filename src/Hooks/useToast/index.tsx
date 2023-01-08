import { useState } from "react";
import { ToastContainer } from "components/Toast/index";
import { createPortal } from "react-dom";
import { ToastManager } from "utils/singleton";
import { ToastConigType, ToastOptionType } from "Types/ToastOptionType";
import { nanoid } from "nanoid";

export const useToast: any = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);

  const addToast = (option: ToastConigType) => {
    const localid = nanoid();
    const { duration } = option;
    ToastManager.addToast({ ...option, id: localid, isNew: true });

    if (duration) setTimeout(() => removeToast(localid), duration);
    setToastList([...ToastManager.getToast()]);
  };

  const removeToast = (index: number | string = 1) => {
    if (typeof index === "number") ToastManager.removeToast();
    else ToastManager.removeToastById(index);
    setToastList([...ToastManager.getToast()]);
  };

  return {
    addToast,
    removeToast,
    Toast: () =>
      createPortal(
        <ToastContainer options={ToastList} removeToast={removeToast} />,
        document.body
      ),
  };
};
