import { useEffect, useState } from "react";
import { ToastContainer } from "components/Toast/index";
import { createPortal } from "react-dom";
import { ToastManager } from "utils/singleton";
import ErrorBoundary from "components/ErrorBoundary";
import { ToastOptionType } from "Types/ToastOptionType";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";

export const useToast = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);
  useEffect(() => ToastManager.init(setToastList), []);
  return {
    Toast: () =>
      createPortal(
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <ToastContainer options={ToastList} />
          </ErrorBoundary>
        </ThemeProvider>,
        document.body
      ),
  };
};
