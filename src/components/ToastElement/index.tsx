import { removeToast } from "components/toastContainer/ToastController";
import { ToastOptionElementType } from "components/toastElement/interfaces";
import {
  CloseButton,
  ElementBody,
  Icon,
  ToastInfo,
  ToastLabel,
  ToastTextContainer,
} from "components/toastElement/styled";
import { SyntheticEvent, useState } from "react";
import { animationType, iconType, Positions, toastTypes } from "utils/theme";

export const ToastElement = (options: ToastOptionElementType) => {
  const {
    label = "Toast Label",
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

  const handleClose = (e: SyntheticEvent) => {
    e.preventDefault();
    removeToast(id);
  };

  const handleDragStart = () => {
    setTimeout(() => setOpacity(0), 1);
  };

  return (
    <ElementBody
      opacity={opacity}
      isNew={isNew}
      animation={animationType[animation]}
      type={color ?? toastTypes[type]}
      padding={paddings}
      margin={margin}
      position={Positions[position](mul, mul * margin)}
      draggable
      onDragEnd={handleClose}
      onDragStart={handleDragStart}
    >
      <CloseButton onClick={handleClose}> X </CloseButton>
      <Icon src={iconType[type]} width={64} alt="error" />
      <ToastTextContainer>
        <ToastLabel>{label}</ToastLabel>
        <ToastInfo>{text}</ToastInfo>
      </ToastTextContainer>
    </ElementBody>
  );
};
