import { ToastElement } from "components/ToastElement";
import { ToastOptionType } from "Types/ToastOptionType";
import { ToastBody } from "components/Toast/styled";

interface IToastContainer {
  options: ToastOptionType[];
  removeToast: (index: number | string) => void;
}

export const ToastContainer = ({ options, removeToast }: IToastContainer) => {
  const op = {
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
            mul={op[position as keyof typeof op]++}
            removeToast={removeToast}
            {...currentOption}
          />
        );
      })}
    </ToastBody>
  );
};
