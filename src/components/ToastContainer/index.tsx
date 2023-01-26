import { forwardRef, memo } from "react";
import { createPortal } from "react-dom";
import { ToastOptionType } from "types/ToastOptionType";

import { ToastBody } from "@/components/ToastContainer/styled";
import { ToastElement } from "@/components/ToastElement";
import { useToast } from "@/hooks/useToast";

const ToastContainerForwardRef = forwardRef((_, ref) => {
  const toastPosition = {
    LeftTop: 0,
    LeftBottom: 0,
    RightTop: 0,
    RightBottom: 0,
  };
  const { options } = useToast(ref);
  return createPortal(
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
    </ToastBody>,
    document.body
  );
});
ToastContainerForwardRef.displayName = "ToastContainerName";
export const ToastContainer = memo(ToastContainerForwardRef);
