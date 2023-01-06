import { number, string } from "prop-types";
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import ReactDOM from "react-dom";

import { handleToastService } from "@/helpers/handleToastService";
import { usePortal } from "@/hooks/usePortal";

import { Toast } from "../Toast";
import { getThreeToasts } from "./config";
import { Container } from "./styles";

export const ToastPortal = memo(
  forwardRef(({ position, time, indent, animation }, ref) => {
    const { toast, removeToast } = handleToastService();

    const [toasts, setToast] = useState(toast);

    const { loaded, portalId } = usePortal();

    const handleAddToast = (obj) => {
      setToast([...toast, obj]);
    };

    const handleRemoveToast = useCallback(
      (id) => () => {
        setToast((prev) => prev.filter((е) => е.id !== id));
        removeToast(id);
      },
      [removeToast, toast],
    );

    useImperativeHandle(ref, () => ({
      onToast: handleAddToast,
      onRemove: handleRemoveToast,
    }));

    if (!loaded) {
      return null;
    }

    return ReactDOM.createPortal(
      <Container position={position} indent={indent}>
        {getThreeToasts(toasts).map((props) => (
          <Toast
            {...props}
            key={props.id}
            title={props.title ?? props.type}
            setToast={setToast}
            handleRemove={handleRemoveToast}
            time={time}
            animation={animation}
          />
        ))}
      </Container>,
      document.getElementById(portalId),
    );
  }),
);

ToastPortal.PropType = {
  position: string,
  time: number,
  indent: number,
  animation: string,
};
