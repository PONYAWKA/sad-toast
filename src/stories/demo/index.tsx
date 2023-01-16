import { Toast } from "components/toastContainer";
import {
  addToast,
  removeToast,
} from "components/toastContainer/ToastController";
import { ToastConfigType } from "types/ToastOptionType";
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
