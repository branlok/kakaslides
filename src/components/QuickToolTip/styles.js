import styled, { keyframes } from "styled-components";

let fadeInOut = keyframes`
0% {
    opacity: 1;
}
90% {
    opacity: 0.5;
}
99% {
    opacity: 0.1;
}
`;

let fadeIn = keyframes`
0% {
    opacity: 0.5;
}

100% {
    opacity: 1;
}
`;

export let StyledTooltip = styled.div`
  position: absolute;
  top: ${(props) => (props.blackBars ? "100px" : "0px")};
  right: 0px;
  height: 100px;
  padding: 15px;
  width: calc(100% - 30px);
  display: flex;
  justify-content: flex-end;
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* animation: ${fadeInOut} 10s ease; */
  transition: 0.5s;
  .centering-wrapper {
    width: 100%;
    padding-right: 5px;
    height: 100%;
    display: flex;
    /* justify-content: flex-end; */
    align-items: flex-end;

    flex-direction: column;
    .front-screen-options {
      margin-top: 5px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .hide-svg {
        height: 100%;
        /* width: 100%; */
        height: 12px;
        margin-left: -5px;
        fill: rgba(255, 255, 255, 0.5);
        transition: 0.2s;
      }
      button {
        font-weight: bold;
        border-style: none;
        color: white;
        margin: 5px;
        height: 25px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 5px 10px;
        transition: 0.2s;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        :last-child {
          margin-right: 0px;
        }
        :hover {
          background-color: rgba(0, 0, 0, 0.4);
          color: white;
        }
        :hover .hide-svg {
          fill: white;
        }
        :active {
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
        }
      }
      .changeUrlBtn {
        margin: 0px;
      }
      input[type="text"] {
        width: 100%;
        padding: 5px 10px;
        width: 200px;
        border-radius: 5px;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.4);
        :focus {
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .background-form-wrapper {
      margin-top: 5px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  :hover {
    opacity: 1;
    transition: 0.2s;
  }
  .themeSection {
    display: flex;
    justify-content: flex-end;
  }
`;

export let StyledColorButton = styled.button`
  height: 17px;
  width: 30px;
  margin: 3px;
  /* border-style: none; */
  background-color: transparent;
  cursor: pointer;
  transition: 0.1s;
  border-style: none;
  background-color: ${(props) => props.theme.alternate[props.color].bg};
  border-top: 2px solid white;
  :last-child {
    margin-right: 0px;
  }
  :hover {
    background-color: ${(props) => props.theme.alternate[props.color].bg};
    transform: scaleY(1.6);
  }
  :active {
    transform: scaleY(1.4);
  }
`;

export let StyledPromptButton = styled.button`
  border-style: none;
  background-color: transparent;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  animation: ${fadeIn} 1s ease forwards;
`;
