import React, { useState } from "react";
import { useSelector } from "react-redux";
import Toolbar from "../QuickToolTip/Toolbar";
import IdentityScreen from "./ScreenVariations/IdentityScreen";
import MessageScreen from "./ScreenVariations/MessageScreen";
import ParagraphScreen from "./ScreenVariations/ParagraphScreen";
import StyledScreenWrapper, { StyledContainer } from "./Styles/ScreenWrapper";

function ScreenLoader() {
  let bgColor = useSelector((state) => state.theme.bgColor);
  let chosenStyle = useSelector((state) => state.theme.templateStyle);
  let screen;

  if (chosenStyle === "identity") {
    screen = <IdentityScreen />;
  } else if (chosenStyle === "message") {
    screen = <MessageScreen />;
  } else if (chosenStyle === "paragraph") {
    screen = <ParagraphScreen />;
  }

  return (
    <StyledContainer>
      <div className="blackbars" data-testid="blackbars"></div>
      <StyledScreenWrapper bgColor={bgColor} data-testid="screenbg" />
      <Toolbar />
      {screen}
      <div className="blackbars" data-testid="blackbars"></div>
    </StyledContainer>
  );
}

export default ScreenLoader;
