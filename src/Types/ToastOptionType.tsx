import { AnimationKey, toastTypeKey } from "utils/themeTypes";

export interface ToastOptionType {
  duration: number;
  label: string;
  paddings: number;
  animation: AnimationKey;
  text: string;
  position: string;
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
  position: string;
  type: toastTypeKey;
  color: string;
}

export interface PositionFunctionReturnType {
  x: string;
  y: string;
}
