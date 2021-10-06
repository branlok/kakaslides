import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeBg } from "../../features/settings/themeSlice";
import { StyledPalette } from "../Settings/Styles";
import { StyledColorButton, StyledPromptButton, StyledTooltip } from "./styles";
import { ReactComponent as Hide } from "../../globalStyles/eyeHide.svg";
import { toggleSettings } from "../../features/settings/settings";
function Toolbar() {
  let dispatch = useDispatch();
  let [toolbarOpened, setToolbarOpened] = useState(false);
  let check = (e) => {
    // let colorList = ["ref, lilac, peach, green, pruple, black, offwhite, orange"];
    if (e.target.hasAttribute("color")) {
      dispatch(changeBg(e.target.getAttribute("color")));
    }
  };
  return (
    <StyledTooltip onClick={check} data-testid="toolbarWrapper">
      {toolbarOpened ? (
        <div className="centering-wrapper">
          <div
            className="themeSection"
            role="listbox"
            aria-labelledby="colorList"
          >
            <StyledColorButton color="red"></StyledColorButton>
            <StyledColorButton color="lilac"></StyledColorButton>
            <StyledColorButton color="peach"></StyledColorButton>
            <StyledColorButton color="green"></StyledColorButton>
            <StyledColorButton color="purple"></StyledColorButton>
            <StyledColorButton color="black"></StyledColorButton>
            <StyledColorButton color="offWhite"></StyledColorButton>
            <StyledColorButton color="orange"></StyledColorButton>
          </div>

          <div className="front-screen-options">
            <button>Download</button>
            <button onClick={() => dispatch(toggleSettings())}>Settings</button>
            <button data-testid="close" onClick={() => setToolbarOpened(false)}>
              <Hide className="hide-svg" /> Hide
            </button>
          </div>
        </div>
      ) : (
        <div className="centering-wrapper">
          <StyledPromptButton
            data-testid="openToolbarBtn"
            onClick={() => setToolbarOpened(true)}
          >
            click here or press space to toggle toolbar
          </StyledPromptButton>
        </div>
      )}
    </StyledTooltip>
  );
}

export default Toolbar;
