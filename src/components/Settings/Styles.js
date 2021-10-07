import styled, { keyframes } from "styled-components";

import horizontalTexture from "../../textures/icons/horizontalTexture.png";
import plastic from "../../textures/icons/plastic_landscape.webp";
import water from "../../textures/icons/water.webp";
import ripple from "../../textures/icons/ripple.webp";
import snail from "../../textures/icons/snail.webp";
import cat from "../../textures/icons/cat.png";
import snake from "../../textures/icons/snake.webp";
import crab from "../../textures/icons/crab.webp";
import monkey from "../../textures/icons/monkey.webp";
import blood from "../../textures/icons/blood.webp";

let theme = {
  horizontalTexture,
  plastic,
  water,
  ripple,
  snail,
  cat,
  snake,
  crab,
  monkey,
  blood,
};

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
  label {
    cursor: pointer;
  }
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    cursor: pointer;
  }

  [type="radio"]:checked + div {
    outline: 2px solid white;
    transition: 0.1s;
  }

  [type="radio"]:checked + span {
    border-bottom: 3px solid white;
    transition: 0.1s;
  }

  .themeSection,
  .textureSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .styleSection {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    span:hover {
      border-bottom: 3px solid white;
    }
  }
  .styleLabels {
    height: 30px;
    padding: 0px 5px;
  }

  .textureLabels,
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
  .description {
    margin-top: 20px;
    height: 40px;
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    width: calc(100% - 40px);
    padding: 0px 20px;
    background-color: rgba(0,0,0,0.2);
    /* animation: ${fadeIn} 0.3s ease forwards; */
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 700px;
    height: 600px;
    color: white;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.13);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  h2 {
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
  }
  .action {
    padding: 25px;
  }
`;

export let StyledPalette = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme[props.color].bg};
  outline: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.13);
  :hover {
    transform: scale(1.05);
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
  }
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
  border-style: none;
  color: white;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  :active {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export let StyledTexture = styled.div`
  width: 50px;
  height: 50px;
  margin: 0px 4px;
  border-radius: 3px;
  background-color: white;
  /* border: 2px solid black; */
  background-image: ${(props) => `url(${theme[props.texture]})`};
  background-size: cover;
  outline: 2px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.13);
  :hover {
    /* background-color: gray; */
    transform: scale(1.05);
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default StyledSettingsModal;
