import styled from "styled-components";

import { toastTypes } from "@/constants/toastTypes";

const TOAST_CONTAINER_WIDTH = 400;
const TOAST_CONTAINER_MIN_HEIGHT = 80;

export const Wrapper = styled.div`
  width: ${TOAST_CONTAINER_WIDTH}px;
  background-color: ${({ color }) => color};
  min-height: ${TOAST_CONTAINER_MIN_HEIGHT}px;
  border-radius: ${({ theme }) => theme.spaces[3]}px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spaces[3]}px;
  justify-content: space-between;
  transform: ${({ animation }) => animation ?? "none"};
  animation: ani 2s forwards;
  @keyframes ani {
    0% {
      opacity: 0;
      transform: ${({ animation }) => animation ?? "none"};
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  margin: ${({ theme }) => theme.spaces[0]};
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight[3]};
  color: ${({ value, theme }) =>
    value === toastTypes.warning ? theme.colors.black : theme.colors.white};
`;
export const ImageWrapper = styled.img`
  width: ${({ theme }) => theme.spaces[4]}px;
  align-self: flex-start;
  cursor: pointer;
`;
export const Image = styled.img`
  width: ${({ theme }) => theme.spaces[5] - 9}px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[4]}px;
`;
export const Subtitle = styled.p`
  margin: ${({ theme }) => theme.spaces[0]};
  color: ${({ value, theme }) =>
    value === toastTypes.warning ? theme.colors.black : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  hyphens: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
