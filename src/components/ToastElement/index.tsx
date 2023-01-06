import { ToastOptionType } from "Types/ToastOptionType";
import { ElementBody, ElementContent } from "./styled";
export const ToastElement = ({ text, id, isNew}: ToastOptionType) => {
  console.log(isNew);

  return (
    <ElementBody isNew={isNew}>
      <ElementContent>{`${text} - ${id}`}</ElementContent>
    </ElementBody>
  );
};
