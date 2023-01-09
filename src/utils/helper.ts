import { css } from "styled-components";

export const opacitySwitcher = (opacity: number) =>
  !opacity
    ? css`
        opacity: 0 !important;
      `
    : css``;
