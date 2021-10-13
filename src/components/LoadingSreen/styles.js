import styled, { keyframes } from "styled-components";

let fadeIn = keyframes`
from {
    background: rgba(0,0,0,0);}

to {
    background: rgba(0,0,0,0.95);
}
`;

let spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export let StyledLoading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: rgba(0, 0, 0, 0); */
  animation: ${fadeIn} 0.2s ease forwards;
  .svg {
    height: 50px;
    width: 50px;
    animation: ${spin} 1s linear infinite;
    fill: white;
  }
`;
