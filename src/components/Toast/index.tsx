import { useEffect, useState } from "react";

import { ToastContainer } from "@/components/ToastContainer/index";
import { ToastOptionType } from "@/types/ToastOptionType";
import { ToastManager } from "@/types/utils/singleton";

export const Toast = () => {
  const [ToastList, setToastList] = useState<ToastOptionType[]>([]);
  useEffect(() => ToastManager.init(setToastList), []);

  return <ToastContainer options={ToastList} />;
};
