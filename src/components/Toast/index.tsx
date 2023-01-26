import { MutableRefObject, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "@/components/ErrorBoundary/index";
import { ToastContainer } from "@/components/ToastContainer/index";
import { IToastRef } from "@/services/interfaces";
import { ToastManager } from "@/services/singleton";
import { theme } from "@/theme/index";

export const Toast = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement> & IToastRef;

  useEffect(() => ToastManager.init(ref), []);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ToastContainer ref={ref} />
      </ErrorBoundary>
    </ThemeProvider>
  );
};
