import { toastTypes } from "@/constants/toastTypes";

export const types = [
  toastTypes.success,
  toastTypes.warning,
  toastTypes.error,
  toastTypes.info,
];

export const handleCapitalizedWord = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
