import error from "assets/icons/error.svg";
import info from "assets/icons/info.svg";
import success from "assets/icons/success.svg";
import warning from "assets/icons/warning.svg";
import { css, FlattenSimpleInterpolation } from "styled-components";
import { PositionFunctionReturnType } from "types/ToastOptionType";

import { AnimationKey, positionsKey, toastTypeKey } from "./themeTypes";

export const Positions: Record<
  positionsKey,
  (mul: number, margin: number) => PositionFunctionReturnType
> = {
  LeftTop: (mul = 0, margin = 0): PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px`,
    y: "left: 1%;",
  }),
  LeftBottom: (mul = 0, margin = 0): PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "left: 1%;",
  }),
  RightTop: (mul = 0, margin = 0): PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
  RightBottom: (mul = 0, margin = 0): PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
};

export const toastTypes: Record<toastTypeKey, string> = {
  warning: "#f0ad4e",
  info: "#5bc0de",
  error: "#d9534f",
  success: "#5cb85c",
};

export const iconType = {
  warning,
  info,
  error,
  success,
};

export const animationType: Record<AnimationKey, FlattenSimpleInterpolation> = {
  leftToRight: css`
    @keyframes ani {
      0% {
        transform: translate(-30px);
      }
      100% {
        transform: translate(0);
      }
    }
  `,
  rightToLeft: css`
    @keyframes ani {
      0% {
        transform: translate(30px);
      }
      100% {
        transform: translate(0);
      }
    }
  `,
  fade: css`
    @keyframes ani {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,
};
