import ErrorBoundary from "components/errorBoundary";
import { ToastContainer } from "components/toast/index";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/index";
import { ToastOptionType } from "types/ToastOptionType";
import { ToastManager } from "utils/singleton";

export const Toast = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);
  useEffect(() => ToastManager.init(setToastList), []);

  return createPortal(
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ToastContainer options={ToastList} />
      </ErrorBoundary>
    </ThemeProvider>,
    document.body
  );
};
