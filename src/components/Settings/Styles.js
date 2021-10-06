import styled, { keyframes } from "styled-components";

let fadeIn = keyframes`
from {
    background: rgba(0,0,0,0);
    opacity: 0;
}
to {
    /* background: rgba(0,0,0,7); */
    opacity: 1;
}
`;

let StyledSettingsModal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(35px);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ScheherazadeNew;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type="radio"]:checked + div {
    outline: 2px solid white;
    transition: 0.2s;
  }

  [type="radio"]:checked + span {
    border-bottom: 3px solid white;
    transition: 0.2s;
  }
  .themeSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .styleSection {
    display: flex;
    justify-content: center;
    align-items: center;
    span:hover {
      border-bottom: 3px solid white;
    }
  }

  .colorLabels {
    width: 50px;
    height: 50px;
    margin: 0px 5px;
  }

  .formTitle {
    letter-spacing: 7px;

    font-size: 25px;
  }
  .themeSect {
    border-bottom: 2px solid white;
    text-align: start;
    letter-spacing: 7px;

    font-size: 25px;
  }

  section {
    padding: 0px 10px;
  }
  form {
    width: 700px;
    height: 600px;

    color: white;
  }
`;

export let StyledPalette = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme[props.color].bg};
  outline: 2px solid transparent;
`;

export let StyledPreivew = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px 4px;
  border-radius: 3px;
  outline: 2px solid transparent;
`;

export let StyledSettingsButton = styled.button`
  position: absolute;
  top: 140px;
  right: 10px;
  font-weight: bold;
  border-style:none;
  color: white;
  margin: 5px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
  padding: 5px;
  transition:0.2s;
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,0.3);
  }
  :active {
    background-color: rgba(0,0,0,0.5);
  }

`;
export default StyledSettingsModal;
