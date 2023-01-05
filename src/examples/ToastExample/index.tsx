import { useToast } from "Hooks/useToast";
import React from "react";

export const ToastExamplePage: React.FC = () => {
  const { addToast, removeToast, Toast } = useToast();
  const addToastHandler = () => addToast({ text: "Adada", duration: 0, position: "LB" });
  const removeToastHandler = () => removeToast();

  return (
    <>
      <button onClick={addToastHandler}>Simple add button</button>
      <button onClick={removeToastHandler}>Simple remove button</button>
      <Toast />
    </>
  );
};
