import errorIcon from "@/assets/error.svg";
import infoIcon from "@/assets/info.svg";
import successIcon from "@/assets/success.svg";
import warningIcon from "@/assets/warning.svg";
import { toastTypes } from "@/constants/toastTypes";
import { theme } from "@/theme";

export const types = {
  [toastTypes.success]: {
    color: theme.colors.green,
    imagePath: successIcon,
    title: toastTypes.success,
  },
  [toastTypes.error]: {
    color: theme.colors.red,
    imagePath: errorIcon,
    title: toastTypes.error,
  },
  [toastTypes.warning]: {
    color: theme.colors.yellow,
    imagePath: warningIcon,
    title: toastTypes.warning,
  },
  [toastTypes.info]: {
    color: theme.colors.purple,
    imagePath: infoIcon,
    title: toastTypes.error,
  },
};

export const animationType = {
  "from top to bottom": "translateY(-100%)",
  "from left to right": "translateX(-100%)",
  "from right to right": "translateX(100%)",
  "from bottom to top": "translateY(100%)",
};
