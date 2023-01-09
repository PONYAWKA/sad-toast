import {
  ElementBody,
  ToastInfo,
  ToastLabel,
} from "components/ToastElement/styled";
import { AnumationType, Positioins, ToastTypes } from "utils/theme";
import { ToastOptionElementType } from "components/ToastElement/types";
import { useState } from "react";

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
    color,
    removeToast,
  } = options;
  const [opacity, setOpacity] = useState(1);
  const handleDragEnd = (e: React.SyntheticEvent) => {
    console.log(e);
    e.preventDefault();
    removeToast(id);
  };
  const handleDragStart = (e: React.SyntheticEvent) => {
    console.log(e);
    setTimeout(() => setOpacity(0));
  };

  return (
    <ElementBody
      opacity={opacity}
      isNew={isNew}
      animation={AnumationType[animation as keyof typeof AnumationType]}
      type={color ?? ToastTypes[type as keyof typeof ToastTypes]}
      padding={paddings}
      margin={margin}
      position={Positioins[position as keyof typeof Positioins](
        mul,
        mul * margin
      )}
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <ToastLabel>{label}</ToastLabel>
      <ToastInfo>{text}</ToastInfo>
    </ElementBody>
  );
};
