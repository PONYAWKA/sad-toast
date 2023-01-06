import styled, { css } from "styled-components";

export const ElementBody = styled.div`
  color: white;
  background-color: red;
  border-radius: 20px;
  padding: 10px;
  margin: 10px 0;
  animation: ${(props) => (props.isNew ? css`ani 1s forwards;` : css``)}
    @keyframes ani {
    0% {
      transform: translate(30px);
    }
    100% {
      transform: translate(0);
    }
  }
`;

export const ElementContent = styled.div`
  display: flex;
  word-break: break-all;
`;
