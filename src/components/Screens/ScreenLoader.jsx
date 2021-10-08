import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Toolbar from "../QuickToolTip/Toolbar";
import IdentityScreen from "./ScreenVariations/IdentityScreen";
import MessageScreen from "./ScreenVariations/MessageScreen";
import ParagraphScreen from "./ScreenVariations/ParagraphScreen";
import StyledScreenWrapper, { StyledContainer } from "./Styles/ScreenWrapper";

function ScreenLoader() {
  let theme = useSelector((state) => state.theme);
  // let chosenStyle = useSelector((state) => state.theme.templateStyle);
  let screen;

  if (theme.templateStyle === "identity") {
    screen = <IdentityScreen />;
  } else if (theme.templateStyle === "message") {
    screen = <MessageScreen />;
  } else if (theme.templateStyle === "paragraph") {
    screen = <ParagraphScreen />;
  }
  let elem = useRef(null);
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * -0.01}% ${50 - (_mouseY - _h) * -0.01}%`;
    // let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth1}`;
    // console.log(x);
    let ratio = _w/_h;

    // elem.current.style.backgroundSize = `${_w * 2}px ${_h * 2}px`;
    elem.current.style.backgroundPosition = x;
  }

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => document.removeEventListener("mousemove", parallax);
  })

  return (
    <StyledContainer blackBars={theme.blackBars} >
      <div className="blackbars" data-testid="blackbars"></div>
      <StyledScreenWrapper
        ref={elem}
        texture={theme.texture}
        bgColor={theme.bgColor}
        data-testid="screenbg"
      />
      <Toolbar />
      {screen}
      <div className="blackbars" data-testid="blackbars"></div>
    </StyledContainer>
  );
}

export default ScreenLoader;
