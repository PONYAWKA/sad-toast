import { MutableRefObject, useEffect, useRef } from "react";

import { ToastContainer } from "@/components/ToastContainer/index";
import { ItoastRef } from "@/services/interfaces";
import { ToastManager } from "@/services/singleton";

export const Toast = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement> & ItoastRef;

  useEffect(() => ToastManager.init(ref), []);

  return <ToastContainer ref={ref} />;
};
