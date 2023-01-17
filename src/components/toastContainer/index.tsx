import { memo } from "react";
import { createPortal } from "react-dom";
import { ThemeProvider } from "styled-components";
import { ToastOptionType } from "types/ToastOptionType";

import ErrorBoundary from "@/components/ErrorBoundary/index";
import { IToastContainer } from "@/components/ToastContainer/interfaces";
import { ToastBody } from "@/components/ToastContainer/styled";
import { ToastElement } from "@/components/ToastElement";
import { theme } from "@/theme/index";

const index = ({ options }: IToastContainer) => {
  const toastPosition = {
    LeftTop: 0,
    LeftBottom: 0,
    RightTop: 0,
    RightBottom: 0,
  };

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
};

export const ToastContainer = memo(index);
