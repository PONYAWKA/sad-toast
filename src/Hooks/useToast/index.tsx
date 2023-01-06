import { useState } from "react";
import { ToastContainer } from "components/Toast/index";
import { createPortal } from "react-dom";
import { ToastManager } from "utils/singleton";
import { ToastOptionType } from "Types/ToastOptionType";
import { nanoid } from "nanoid";

export const useToast: any = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);

  const addToast = (option: ToastOptionType) => {
    const localid = nanoid();
    const { duration } = option;
    ToastManager.addToast({ ...option, id: localid });
    if (duration) setTimeout(() => removeToast(localid), duration);
  
    setToastList([...ToastManager.getToast()]);
  };

  const removeToast = (index: number | string = 1) => {
    setToastList(
      ToastList.map((e, i) => {
        if (i === ToastList.length - 1) return { ...e, toDelete: true, };
        return e;
      })
    );

    if (typeof index === "number") ToastManager.removeToast();
    else ToastManager.removeToastById(index);
    setToastList([...ToastManager.getToast()]);
  };

  return {
    addToast,
    removeToast,
    Toast: () =>
      createPortal(<ToastContainer options={ToastList} />, document.body),
  };
};
