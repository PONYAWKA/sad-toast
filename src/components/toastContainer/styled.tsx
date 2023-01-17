import styled from "styled-components";

export const ToastBody = styled.div`
  width: ${({ theme }) => theme.spaces.x}%;
  height: ${({ theme }) => theme.spaces.x}%;
  display: flex;
  overflow: hidden;
`;
