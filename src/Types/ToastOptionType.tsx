import {
  AnimationKey,
  positionsKey,
  toastTypeKey,
} from "types/utils/themeTypes";

export interface ToastOptionType {
  duration: number;
  label: string;
  paddings: number;
  animation: AnimationKey;
  text: string;
  position: positionsKey;
  id: string;
  isNew: boolean;
  type: toastTypeKey;
  margin: number;
  color: string;
}
export interface ToastConfigType {
  duration: number;
  label: string;
  margin: number;
  text: string;
  paddings: number;
  animation: AnimationKey;
  position: positionsKey;
  type: toastTypeKey;
  color: string;
}

export interface PositionFunctionReturnType {
  x: string;
  y: string;
}
