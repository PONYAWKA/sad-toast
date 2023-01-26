import error from "assets/icons/error.svg";
import info from "assets/icons/info.svg";
import success from "assets/icons/success.svg";
import warning from "assets/icons/warning.svg";

import { colors, toastTypeKey } from "@/theme/index";

export const toastTypes: Record<toastTypeKey, string> = {
  warning: colors.yellow,
  info: colors.blue,
  error: colors.red,
  success: colors.green,
};

export const iconType = {
  warning,
  info,
  error,
  success,
};
