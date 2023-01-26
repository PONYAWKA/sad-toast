const spaces = {
  ss: 5,
  s: 20,
  m: 40,
  x: 100,
  xxxl: 400,
};
const font = {
  m: 36,
};
export const colors = {
  white: "#ffffff",
  yellow: "#f0ad4e",
  blue: "#5bc0de",
  green: "#5cb85c",
  red: "#d9534f",
};
export const theme = {
  spaces,
  font,
  colors,
};
export type toastTypeKey = "warning" | "info" | "error" | "success";
export type positionsKey =
  | "LeftTop"
  | "LeftBottom"
  | "RightTop"
  | "RightBottom";
export type animationKey = "leftToRight" | "rightToLeft" | "fade";
