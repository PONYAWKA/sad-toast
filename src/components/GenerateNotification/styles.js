import styled from "styled-components";

import { theme } from "@/theme";

const BUTTON_WIDTH = 100;
const BUTTON_HEIGHT = 32;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spaces[3]}px;
  max-width: 200px;
`;

export const Button = styled.button`
  width: ${BUTTON_WIDTH}%;
  max-width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_HEIGHT}px;
  background-color: pink;
  border: none;
  border-radius: ${theme.spaces[3]}px;
  cursor: pointer;
  margin: 0 auto;
`;

export const Wrapper = styled.input`
  height: ${theme.spaces[3]}px;
`;
export const Content = styled.select`
  height: ${theme.spaces[3] + 4}px;
`;
export const Option = styled.option``;
