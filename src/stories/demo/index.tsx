import { ToastConfigType } from "types/ToastOptionType";

import { Toast } from "@/components/Toast";
import { addToast, removeToast } from "@/components/Toast/ToastController";
export const ToastExamplePage = (props: ToastConfigType) => {
  const {
    label,
    text,
    paddings,
    animation,
    type,
    margin,
    duration,
    position,
    color,
  } = props;
  const addToastHandler = () => {
    addToast({
      text: text,
      duration: duration,
      position: position,
      animation: animation,
      paddings: paddings,
      label: label,
      type: type,
      margin: margin,
      color: color,
    });
  };

  const removeToastHandler = () => removeToast();
  return (
    <>
      <button onClick={addToastHandler}>Simple add button</button>
      <button onClick={removeToastHandler}>Simple remove button</button>
      <Toast />
    </>
  );
};
