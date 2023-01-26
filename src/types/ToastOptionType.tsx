import { ReactNode } from "react";

import { animationKey, positionsKey, toastTypeKey } from "@/theme/index";

export interface ToastOptionType {
  duration: number;
  label: string;
  paddings: number;
  animation: animationKey;
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
  animation: animationKey;
  position: positionsKey;
  type: toastTypeKey;
  color: string;
}

export interface PositionFunctionReturnType {
  x: string;
  y: string;
}

export interface refType {
  current: ReactNode;
}
