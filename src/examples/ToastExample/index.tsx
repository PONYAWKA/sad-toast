import { useToast } from "Hooks/useToast";
import { ToastConigType} from "Types/ToastOptionType";
export const ToastExamplePage = (props: ToastConigType) => {
  const {
    label ,
    text ,
    paddings ,
    animation,
    type ,
    margin ,
    duration,
    position
  } = props;
  const { addToast, removeToast, Toast } = useToast();
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
