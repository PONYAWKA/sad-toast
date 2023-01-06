import { ToastElement } from "components/ToastElement";
import { ToastOptionType } from "Types/ToastOptionType";
import { Positioins } from "utils/theme";
import { ToastBody } from "./styled";

interface IToastContainer {
  options: ToastOptionType[];
}

export const ToastContainer = ({ options }: IToastContainer) => {
  const position = Positioins.LB;
  return (
    <ToastBody position={position}>
      {options.map((currentOption: ToastOptionType) => (
        <ToastElement key={currentOption.id} {...currentOption} />
      ))}
    </ToastBody>
  );
};
