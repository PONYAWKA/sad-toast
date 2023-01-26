import { forwardRef, memo } from "react";
import { createPortal } from "react-dom";
import { ThemeProvider } from "styled-components";
import { ToastOptionType } from "types/ToastOptionType";

import ErrorBoundary from "@/components/ErrorBoundary/index";
import { ToastBody } from "@/components/ToastContainer/styled";
import { ToastElement } from "@/components/ToastElement";
import { useToast } from "@/hooks/useToast";
import { theme } from "@/theme/index";

const index = forwardRef((_, ref) => {
  const toastPosition = {
    LeftTop: 0,
    LeftBottom: 0,
    RightTop: 0,
    RightBottom: 0,
  };
  const { options } = useToast(ref);
  return createPortal(
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ToastBody>
          {options.map((currentOption: ToastOptionType) => {
            const { position, id } = currentOption;
            return (
              <ToastElement
                key={id}
                mul={toastPosition[position]++}
                {...currentOption}
              />
            );
          })}
        </ToastBody>
      </ErrorBoundary>
    </ThemeProvider>,
    document.body
  );
});
index.displayName = "ToastContainerName";
export const ToastContainer = memo(index);
