import { ToastOptionType } from "Types/ToastOptionType";
import { ElementBody, ElementContent } from "./styled";

export const ToastElement = ({ text, id }: ToastOptionType) => {


  return (
    <ElementBody>
      <ElementContent>{`${text} - ${id}`}</ElementContent>
    </ElementBody>
  );
};
