import error from "@/assets/error.svg";
import info from "@/assets/info.svg";
import success from "@/assets/success.svg";
import warning from "@/assets/warning.svg";
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
