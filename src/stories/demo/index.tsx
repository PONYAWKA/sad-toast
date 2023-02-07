import { Toast } from "@/components/Toast";
import { addToast } from "@/helpers/addToast";
import { removeToast } from "@/helpers/removeToast";
import { ToastConfigInterface } from "@/interfaces/ToastOptionInterface";
export const ToastExamplePage = (props: ToastConfigInterface) => {
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
