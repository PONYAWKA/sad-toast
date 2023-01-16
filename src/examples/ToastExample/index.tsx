import { useToast } from "hooks/useToast";
import { addToast, removeToast } from "hooks/useToast/ToastController";
import { ToastConigType} from "types/ToastOptionType";
export const ToastExamplePage = (props: ToastConigType) => {
  const {
    label ,
    text ,
    paddings ,
    animation,
    type ,
    margin ,
    duration,
    position,
    color,
  } = props;
  const { Toast } = useToast();
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
      color: color
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
