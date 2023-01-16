import { ToastElement } from "components/toastElement";
import { ToastOptionType } from "types/ToastOptionType";
import { ToastBody } from "components/toast/styled";

interface IToastContainer {
  options: ToastOptionType[];
}

export const ToastContainer = ({ options }: IToastContainer) => {
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
            {...currentOption}
          />
        );
      })}
    </ToastBody>
  );
};
