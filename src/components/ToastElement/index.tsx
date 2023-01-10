import {
  ElementBody,
  Icon,
  ToastInfo,
  ToastLabel,
  ToastTextContainer,
} from "components/ToastElement/styled";
import { AnumationType, Positioins, ToastTypes } from "utils/theme";
import { ToastOptionElementType } from "components/ToastElement/types";
import { useState } from "react";
import { iconSelector } from "utils/helper";
import { removeToast } from "Hooks/useToast/ToastController";
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
  } = options;

  const [opacity, setOpacity] = useState(1);

  const handleDragEnd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    removeToast(id);
  };

  const handleDragStart = (e: React.SyntheticEvent) => {
    setTimeout(() => setOpacity(0), 1);
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
      <Icon src={iconSelector(type)} width={64} alt="error" />
      <ToastTextContainer>
        <ToastLabel>{label}</ToastLabel>
        <ToastInfo>{text}</ToastInfo>
      </ToastTextContainer>
    </ElementBody>
  );
};
