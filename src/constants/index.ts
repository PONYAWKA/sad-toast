import error from "assets/icons/error.svg";
import info from "assets/icons/info.svg";
import success from "assets/icons/success.svg";
import warning from "assets/icons/warning.svg";
import { toastTypeKey } from "types/utils/themeTypes";

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
