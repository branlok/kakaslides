import styled, { keyframes } from "styled-components";

let fadeIn = keyframes`
from {
    background: rgba(0,0,0,0);}

to {
    background: rgba(0,0,0,0.95);
}
`;

export let StyledLoading = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 10;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.95);
  animation: ${fadeIn} 0.2s ease forwards;
`;
