import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getDefaultText from "../../../utils/getDefaultText";
import IdentityLayout from "./EditMode/IdentityLayout";
import StyledIdentityTemplate from "./Styles/Styles";
function IdentityScreen() {
  const refContainer = useRef(null);
  const [editMode, setEditMode] = useState(false);
  let bgColor = useSelector((state) => state.theme.bgColor);
  let userText = useSelector((state) => state.inputs);
  const defaultValues = getDefaultText(bgColor, "identity");

  let handleHoverToolTip = (e) => {
    console.log(e.type);
    if (e.type == "mouseenter") {
      refContainer.current.style.transform = "scale(1)";
      refContainer.current.style.transition = "0.3s";
      refContainer.current.style.opacity = "1";
      refContainer.current.textContent = "click to edit";
    }
    if (e.type == "mousemove") {
      refContainer.current.style.display = "block";
      refContainer.current.style.position = "absolute";
      refContainer.current.style.top = e.clientY - 50 + "px";
      refContainer.current.style.left = e.clientX - 50 + "px";
      refContainer.current.style.transform = "scale(1)";
      refContainer.current.style.transition = "none";
    }
    if (e.type == "mouseleave") {
      refContainer.current.style.opacity = "0";
      refContainer.current.style.transition = "0.2s";
    }
  };


  return (
    <StyledIdentityTemplate data-testid="identityScreen">
      {!editMode ? (
        <>
          <h1
            onMouseEnter={handleHoverToolTip}
            onMouseMove={handleHoverToolTip}
            onMouseLeave={handleHoverToolTip}
            className="mainText"
            onClick={() => setEditMode(true)}
          >
            {userText.mainText || defaultValues.mainText}
          </h1>
          <h2 className="secondaryText">
            {userText.secondaryText || defaultValues.secondaryText}
          </h2>
          <h3 className="mainNumber">
            {userText.numberText || defaultValues.numberText}
          </h3>
          <div ref={refContainer} className="showEdit">

          </div>
        </>
      ) : (
        <IdentityLayout toggler={setEditMode} styleType="identity" />
      )}
    </StyledIdentityTemplate>
  );
}

export default IdentityScreen;
