import { ToastOptionType } from "Types/ToastOptionType";
import {
  ElementBody,
  ToastInfo,
  ToastLabel,
} from "components/ToastElement/styled";
import { AnumationType, Positioins, ToastTypes } from "utils/theme";

interface ToastOptionElementType extends ToastOptionType {
  mul: number;
  removeToast: (index: number | string) => void;
  TextSize: number;
}

export const ToastElement = (options: ToastOptionElementType) => {
  const {
    label = "Toast Lable",
    text = "some text",
    id,
    paddings = 20,
    animation = "leftToRight",
    type = "warning",
    isNew,
    margin = 10,
    position = "LeftBottom",
    mul,
    TextSize,
    removeToast,
  } = options;
  const handleDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
    removeToast(id);
  };
  return (
    <ElementBody
      isNew={isNew}
      animation={AnumationType[animation as keyof typeof AnumationType]}
      type={ToastTypes[type as keyof typeof ToastTypes]}
      padding={paddings}
      margin={margin}
      position={Positioins[position as keyof typeof Positioins](mul, TextSize)}
      draggable
      onDragOver={handleDragOver}
    >
      <ToastLabel>{label}</ToastLabel>
      <ToastInfo>{text}</ToastInfo>
    </ElementBody>
  );
};
