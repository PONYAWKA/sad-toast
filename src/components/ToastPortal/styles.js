import styled from "styled-components";

import { handleFindInclude } from "@/helpers/handleFindInclude";

import { positionValue } from "./config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: ${({ indent }) => indent}px;
  ${({ position }) => handleFindInclude(position, positionValue.tb)}: 4%;
  ${({ position }) => handleFindInclude(position, positionValue.rl)}: 4%;
`;
