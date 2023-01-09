import { css } from "styled-components";
import info from "icons/info.svg";
import error from "icons/error.svg";
import warning from "icons/warning.svg";
import success from "icons/success.svg";
export const opacitySwitcher = (opacity: number) =>
  !opacity
    ? css`
        opacity: 0 !important;
      `
    : css``;

const iconType = {
  warning: warning,
  info: info,
  error: error,
  success: success,
};

export const iconSelector = (type: string) => {};
