import { ToastElement } from "components/ToastElement";
import { ToastOptionType } from "Types/ToastOptionType";
import { ToastBody } from "components/Toast/styled";

interface IToastContainer {
  options: ToastOptionType[];
  removeToast: (index: number | string) => void;
}

export const ToastContainer = ({ options, removeToast }: IToastContainer) => {
  let op = {
    LeftTop: 0,
    LeftBottom: 0,
    RightTop: 0,
    RightBottom: 0,
    BoxMarin: 0,
  };
  return (
    <ToastBody>
      {options.map((currentOption: ToastOptionType) => {
        const prevSize = op.BoxMarin;
        op.BoxMarin += currentOption.margin;
        return (
          <ToastElement
            key={currentOption.id}
            mul={op[currentOption.position as keyof typeof op]++}
            TextSize={prevSize}
            removeToast={removeToast}
            {...currentOption}
          />
        );
      })}
    </ToastBody>
  );
};
