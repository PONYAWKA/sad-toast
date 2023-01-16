import { CSSProp } from "styled-components";
import {
  PositionFunctionReturnType,
  ToastOptionType,
} from "types/ToastOptionType";

export interface ElementBodyType {
  position: PositionFunctionReturnType;
  padding: number;
  isNew: boolean;
  margin: number;
  animation: CSSProp;
  type: string;
  opacity: number;
}

export interface ToastOptionElementType extends ToastOptionType {
  mul: number;
}
