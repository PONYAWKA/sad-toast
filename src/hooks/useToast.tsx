import React, { useImperativeHandle, useState } from "react";

import { ToastOptionType } from "@/types/ToastOptionType";

export const useToast = (
  ref:
    | ((instance: unknown) => void)
    | React.RefObject<unknown>
    | null
    | undefined
) => {
  const [options, setOptions] = useState<ToastOptionType[]>([]);

  const handleToastAdd = (toast: ToastOptionType[]) => {
    setOptions(toast);
  };

  useImperativeHandle(ref, () => ({
    setToast: handleToastAdd,
  }));

  return { options };
};
