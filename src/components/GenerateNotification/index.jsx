import { number, string } from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import { handleToastService } from "@/helpers/handleToastService";
import { theme } from "@/theme";

import ErrorBoundary from "../ErrorBoundary";
import { ToastPortal } from "../ToastPortal";

export const GenerateNotification = memo(
  ({
    position = "top right",
    time = 3000,
    indent = 16,
    animation = "disappearance",
  }) => {
    const { init } = handleToastService();
    const toastRef = useRef(null);

    useEffect(() => {
      if (toastRef) {
        init(toastRef);
      }
    }, [init]);

    return (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <ToastPortal
            ref={toastRef}
            position={position}
            time={time}
            indent={indent}
            animation={animation}
          />
        </ThemeProvider>
      </ErrorBoundary>
    );
  },
);

GenerateNotification.PropType = {
  position: string,
  time: number,
  indent: number,
  animation: string,
};
