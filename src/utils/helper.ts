import { css } from "styled-components";
import { iconType } from "./theme";
export const opacitySwitcher = (opacity: number) =>
  !opacity
    ? css`
        opacity: 0 !important;
      `
    : css``;

export const iconSelector = (icon: string) =>
  iconType[icon as keyof typeof iconType];
