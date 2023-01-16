import { ToastBody } from "components/toast/styled";
import { ToastElement } from "components/toastElement";
import { memo } from "react";
import { ToastOptionType } from "types/ToastOptionType";

import { IToastContainer } from "./interfaces";

const index = ({ options }: IToastContainer) => {
  const toastPosition = {
    LeftTop: 0,
    LeftBottom: 0,
    RightTop: 0,
    RightBottom: 0,
  };

  return (
    <ToastBody>
      {options.map((currentOption: ToastOptionType) => {
        const { position } = currentOption;
        return (
          <ToastElement
            key={currentOption.id}
            mul={toastPosition[position as keyof typeof toastPosition]++}
            {...currentOption}
          />
        );
      })}
    </ToastBody>
  );
};

export const ToastContainer = memo(index);
