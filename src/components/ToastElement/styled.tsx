import styled, { css, } from "styled-components";
import { ElementBodyType } from "./types";




export const ElementBody = styled.div<ElementBodyType>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ type }) => type};
  ${({ position }) => position.x};
  ${({ position }) => position.y};
  color: white;
  border-radius: 20px;
  padding: ${({ padding }) => padding}px;
  margin: ${({ margin }) => margin}px;
  animation: ${({ isNew }) => (isNew ? css`ani 1s forwards` : css``)};
  ${({ animation }) => animation};
  max-width: 200px;
  height: 100px;
  box-sizing: border-box;
`;

export const ElementContent = styled.div`
  display: flex;
  word-break: break-all;
`;

export const ToastLabel = styled.div``;

export const ToastInfo = styled.div`
  display: flex;
  word-break: break-all;
  align-items: center;
  height: 100%;
`;
