import { useEffect, useState } from "react";
import { ToastContainer } from "components/Toast/index";
import { createPortal } from "react-dom";
import { ToastManager } from "utils/singleton";
import ErrorBoundary from "components/ErrorBoundary";
import { ToastOptionType } from "Types/ToastOptionType";

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
