import styled from "styled-components";

export const ToastBody = styled.div`
  width: ${({theme}) => theme.width.x}%;
  height: ${({theme}) => theme.height.x}%;
  display: flex;
  overflow: hidden;
`;
