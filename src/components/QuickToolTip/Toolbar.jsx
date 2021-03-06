import React, { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeBg } from "../../features/settings/themeSlice";

import { StyledColorButton, StyledPromptButton, StyledTooltip } from "./styles";
import { ReactComponent as Hide } from "../../globalStyles/eyeHide.svg";
import { toggleSettings } from "../../features/settings/settings";
import { useSelector } from "react-redux";
import {ReactComponent as Github} from "../../globalStyles/github.svg";
import BackgroundForm from "./backgroundForm/BackgroundForm";
function Toolbar({ generateImage }) {
  let dispatch = useDispatch();
  let theme = useSelector((state) => state.theme);
  // let downloadRef = useRef(null);
  let [takingScreenshot, setTakingScreenshot] = useState(false);
  let [toolbarOpened, setToolbarOpened] = useState(false);
  let check = (e) => {
    // let colorList = ["ref, lilac, peach, green, pruple, black, offwhite, orange"];
    if (e.target.hasAttribute("color")) {
      dispatch(changeBg(e.target.getAttribute("color")));
    }
  };

  useEffect(() => {
    //hide for split second to download screen
    if (takingScreenshot) {
      generateImage(setTakingScreenshot);
      // (false);
    }
  }, [takingScreenshot]);

  if (!takingScreenshot) {
    return (
      <StyledTooltip
        onClick={check}
        blackBars={theme.blackBars}
        data-testid="toolbarWrapper"
      >
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTakingScreenshot(true);
                }}
              >
                Download
              </button>
              <button onClick={() => dispatch(toggleSettings(true))}>
                Settings
              </button>
              <button
                data-testid="close"
                onClick={() => setToolbarOpened(false)}
              >
                <Hide className="hide-svg" /> Hide
              </button>
            </div>
            <div className="front-screen-options">
              <BackgroundForm />
            </div>
            <div className="front-screen-options">
              <a href="https://github.com/branlok/kakaslides" ><Github className="github-svg" />Github</a>
            </div>
          </div>
        ) : (
          <div className="centering-wrapper">
            <StyledPromptButton
              data-testid="openToolbarBtn"
              onClick={() => setToolbarOpened(true)}
            >
              click here to toggle toolbar
            </StyledPromptButton>
          </div>
        )}
      </StyledTooltip>
    );
  } else {
    return null;
  }
}

export default Toolbar;
