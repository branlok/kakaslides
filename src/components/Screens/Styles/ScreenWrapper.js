import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "../../../globalStyles/fadeInKeyframe";
import horizontalTexture from "../../../textures/horizotalTexturePattern.webp";
import plastic from "../../../textures/plastic_landscape.webp";
import water from "../../../textures/water.webp";
import ripple from "../../../textures/ripple.webp";
import snail from "../../../textures/snail.png";
import cat from "../../../textures/cat.png";
import snake from "../../../textures/snake.webp";
import crab from "../../../textures/crab.webp";
import monkey from "../../../textures/monkey.webp";
import blood from "../../../textures/blood.webp";
import { jitterText } from "../../../globalStyles/jitterKeyframe";

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

let jitter = keyframes`
from {
    transform: scaleY(0.9);
}

to {
    transform: scaleY(1);
}
`;

let StyledScreenWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  pointer-events: none;
  @media only screen and (max-height: 700px) and (max-width: 1080px) {
    background-size: 300% auto;
  }
  /* background-size: 100% auto; */
  @media only screen and (min-height: 700px) and (min-width: 1080px) {
    background-size: 150% auto;
  }

  background-color: ${(props) => props.theme.primary.bg};
  /* background-image: url("https://images.unsplash.com/photo-1634036711291-92f6b263de9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); */
  background-image: ${(props) =>
    props.texture === "custom"
      ? `url(${props.customUrl})`
      : `url(${theme[props.texture]})`}; //conditional render texture
  background-blend-mode: multiply;
  pointer-events: none;

  background-repeat: no-repeat;
  background-position: 50% 50%;
  animation: ${jitter} 0.5s ease infinite revers;
  z-index: -1;
  /* transition: 0.3s; */
`;

let expand = keyframes`
from {
    transform: scaleY(0);
}

to {
    transform: scaleY(1);
}
`;

export let StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  h1,
  h2,
  h3,
  .jitterClass {
    color: ${(props) =>
      props.blackFont && props.bgColor === "offWhite"
        ? "black !important"
        : "white"};
    text-shadow: ${(props) =>
      props.blackFont && props.bgColor === "offWhite"
        ? "none"
        : " 0px 0px 3px white;"};
    animation: ${(props) =>
      props.jitter
        ? css`
            ${jitterText} 0.2s ease infinite;
          `
        : "none"};
  }

  //stand alone footer element on .messageScrene.jsx ,
  .inputFooter {
    color: ${(props) =>
      props.blackFont && props.bgColor === "offWhite"
        ? "black !important"
        : "white"};
  }
  //styles when edit is toggled.
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    input {
      background: transparent;
      border-style: none;
      text-align: center;
      color: ${(props) =>
        props.blackFont && props.bgColor === "offWhite"
          ? "black !important"
          : "white"};
      text-shadow: ${(props) =>
        props.blackFont && props.bgColor === "offWhite"
          ? "none"
          : " 0px 0px 3px white;"};
      font-weight: bold;
      padding: 0px;
      width: calc(100% - 100px);
    }

    textarea {
      color: ${(props) =>
        props.blackFont && props.bgColor === "offWhite"
          ? "black !important"
          : "white"};
    }
    input:focus {
      outline: none;
      background-color: rgba(0, 0, 0, 0.2);

      transition: 0.2s;
    }
    button {
      color: ${(props) =>
        props.blackFont && props.bgColor === "offWhite"
          ? "black !important"
          : "white"};
    }
    .saveEdit {
      position: absolute;
      bottom: -20px;
      border-style: none;
      background-color: transparent;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.5);
      animation: ${fadeIn} 1s ease forwards;
      margin-top: 5px;
      border-radius: 15px;
      padding: 0px 15px;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
      :focus {
        background-color: rgba(0, 0, 0, 0.2);
        outline: none;
      }
    }
  }

  //tooltip styles
  .showEdit {
    pointer-events: none;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    padding: 5px 5px;
    width: 100px;
    /* height: 20px; */
    display: none;
    /* width: 80px; */
    animation: ${fadeIn} 0.5s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 2px;
    font-weight: bold;
  }

  .blackbars {
    height: 100px;
    width: 100%;
    flex-shrink: 0;
    background: black;
    display: ${(props) => (props.blackBars ? "block" : "none")};
    animation: ${expand} 3s ease-in-out forwards;
    transform-origin: top;
  }
  .blackbars:last-child {
    transform-origin: bottom;
  }
`;

export default StyledScreenWrapper;
