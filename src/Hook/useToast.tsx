import Toast from "components/Toast/Toast";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface toastProp {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
}

export const useToast = () => {
  const [list, setList] = useState<toastProp[]>([]);
  let toastProperties: toastProp;

  const addToast = (type: string) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;
    }
    setList([...list, toastProperties]);
  };

  const ToastCallBack = () =>
  createPortal(
    <Toast toastlist={list} position="buttom-right" setList={setList} />,
    document.body
  );

  return {
    addToast,
    Toast: useCallback(ToastCallBack,[ToastCallBack]),
  };
};
