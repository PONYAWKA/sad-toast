import { CSSProp } from "styled-components";

import {
  PositionFunctionReturnType,
  ToastOptionInterface,
} from "@/interfaces/ToastOptionInterface";

export interface ElementBodyType {
  position: PositionFunctionReturnType;
  padding: number;
  isNew: boolean;
  margin: number;
  animation: CSSProp;
  type: string;
  opacity: number;
}

export interface ToastOptionElementType extends ToastOptionInterface {
  mul: number;
}
