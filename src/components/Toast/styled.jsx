import styled from "styled-components";

export const ToastBody = styled.div`
  position: absolute;
  ${props => props.position.x}
  ${props => props.position.y}
  width: 18%;
  display: flex;
  flex-direction:  ${props => props.position.column};
`;
