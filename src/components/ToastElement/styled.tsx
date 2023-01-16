import { ElementBodyType } from "components/toastElement/interfaces";
import styled, { css } from "styled-components";

export const ElementBody = styled.div<ElementBodyType>`
  position: absolute;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ type }) => type};
  ${({ position }) => position.x};
  ${({ position }) => position.y};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.m}px;
  padding: ${({ padding }) => padding}px;
  margin: ${({ margin }) => margin}px ${({ theme }) => theme.margin.s}px;
  animation: ${({ isNew }) => (isNew ? css`ani .7s forwards` : css``)};
  ${({ animation }) => animation};
  width: ${({ theme }) => theme.width.xxxl}px;
  height: ${({ theme }) => theme.width.x}px;
  box-sizing: border-box;
  ${({ opacity }) =>
    !opacity
      ? css`
          opacity: 0 !important;
        `
      : css``};
`;

export const ElementContent = styled.div`
  display: flex;
  word-break: break-word;
`;

export const ToastLabel = styled.div``;

export const ToastInfo = styled.div`
  display: flex;
  word-break: break-word;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.font.m}px;
`;

export const ToastTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.margin.m}px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  outline: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;
