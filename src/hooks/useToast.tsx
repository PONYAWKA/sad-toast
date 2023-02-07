import React, { useImperativeHandle, useState } from "react";

import { ToastOptionInterface } from "@/interfaces/ToastOptionInterface";

export const useToast = (
  ref:
    | ((instance: unknown) => void)
    | React.RefObject<unknown>
    | null
    | undefined
) => {
  const [options, setOptions] = useState<ToastOptionInterface[]>([]);

  const handleToastAdd = (toast: ToastOptionInterface[]) => {
    setOptions(toast);
  };

  useImperativeHandle(ref, () => ({
    setToast: handleToastAdd,
  }));

  return { options };
};
