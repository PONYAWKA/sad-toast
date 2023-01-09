export interface ToastOptionType {
  duration: number;
  label: string;
  paddings: number;
  animation: string;
  text: string;
  position: string;
  id: string;
  isNew: boolean;
  type: string;
  margin: number;
  color: string;
}
export interface ToastConigType {
  duration: number;
  label: string;
  margin: number;
  text: string;
  paddings: number;
  animation: string;
  position: string;
  type: string;
  color: string;
}

export interface PositionFunctionReturnType {
  x:string,
  y:string,
}