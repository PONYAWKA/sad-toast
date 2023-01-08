import { CSSProp } from "styled-components";
import { PositionFunctionReturnType } from "Types/ToastOptionType";


export interface ElementBodyType {
    position: PositionFunctionReturnType;
    padding: number;
    isNew: boolean;
    margin: number;
    animation: CSSProp;
    type: {
      backgroundColor: string;
    };
  }