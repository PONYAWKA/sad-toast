import { useEffect, useState } from "react";
import { ToastContainer } from "components/Toast/index";
import { createPortal } from "react-dom";
import { ToastManager } from "utils/singleton";
import { ToastConigType, ToastOptionType } from "Types/ToastOptionType";
import { nanoid } from "nanoid";
import ErrorBoundary from "components/ErrorBoundary";

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

export const useToast = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);
  useEffect(() => ToastManager.init(setToastList), []);
  return {
    Toast: () =>
      createPortal(
        <ErrorBoundary>
          <ToastContainer options={ToastList} />
        </ErrorBoundary>,
        document.body
      ),
  };
};
