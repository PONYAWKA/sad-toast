import styled, { css } from "styled-components";
import { ElementBodyType } from "components/ToastElement/types";
import { opacitySwitcher } from "utils/helper";

export const ElementBody = styled.div<ElementBodyType>`
  position: absolute;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ type }) => type};
  ${({ position }) => position.x};
  ${({ position }) => position.y};
  color: white;
  border-radius: 20px;
  padding: ${({ padding }) => padding}px;
  margin: ${({ margin }) => margin}px 5px;
  animation: ${({ isNew }) => (isNew ? css`ani .7s forwards` : css``)};
  ${({ animation }) => animation};
  width: 200px;
  height: 100px;
  box-sizing: border-box;
  ${({ opacity }) => opacitySwitcher(opacity)};
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
