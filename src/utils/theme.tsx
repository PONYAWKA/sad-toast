import { css } from "styled-components";
import { PositionFunctionReturnType } from "Types/ToastOptionType";
import info from "icons/info.svg";
import error from "icons/error.svg";
import warning from "icons/warning.svg";
import success from "icons/success.svg";

export const Positioins = {
  LeftTop: (
    mul: number = 0,
    margin: number = 0
  ): PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px`,
    y: "left: 1%;",
  }),
  LeftBottom: (
    mul: number = 0,
    margin: number = 0
  ): PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "left: 1%;",
  }),
  RightTop: (
    mul: number = 0,
    margin: number = 0
  ): PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
  RightBottom: (
    mul: number = 0,
    margin: number = 0
  ): PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
};

export const ToastTypes = {
  warning: "#f0ad4e",
  info: "#5bc0de",
  error: "#d9534f",
  success: "#5cb85c",
};
export const iconType = {
  warning: warning,
  info: info,
  error: error,
  success: success,
};

export const AnumationType = {
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
