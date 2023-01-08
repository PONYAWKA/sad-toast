
import {css} from 'styled-components' 
import { PositionFunctionReturnType } from 'Types/ToastOptionType';

export const Positioins = {
  LeftTop: (mul: number, margin: number):PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px`,
    y: "left: 1%;",
  }),
  LeftBottom: (mul: number, margin: number):PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "left: 1%;",
  }),
  RightTop: (mul: number, margin: number):PositionFunctionReturnType => ({
    x: `top: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
  RightBottom: (mul: number, margin: number):PositionFunctionReturnType => ({
    x: `bottom: ${mul * 100 + margin}px;`,
    y: "right: 1%;",
  }),
};

export const ToastTypes = {
  warning: {
    backgroundColor: "#f0ad4e",
  },
  info: {
    backgroundColor: "#5bc0de",
  },
  error: {
    backgroundColor: "#d9534f",
  },
  success: {
    backgroundColor: "#5cb85c",
  },
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
