import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import getDefaultText from "../../../utils/getDefaultText";
import { handleHoverToolTip } from "../../../utils/hoverTooltip";
import IdentityLayout from "./EditMode/IdentityLayout";
import { StyledMessageTemplate } from "./Styles/Styles";

function MessageScreen() {
  //   let refContainer = useRef(null);

  const [editMode, setEditMode] = useState(false);
  let bgColor = useSelector((state) => state.theme.bgColor);
  let userText = useSelector((state) => state.inputs);
  const defaultValues = getDefaultText(bgColor, "message");

  {
    return (
      <StyledMessageTemplate data-testid="messageScreen">
        {!editMode ? (
          <>
            <h1 className="mainText" onClick={() => setEditMode(!editMode)}>
              {userText.mainText || defaultValues.mainText}
            </h1>
            <h2 className="secondaryText">
              {" "}
              {userText.secondaryText || defaultValues.secondaryText}
            </h2>
            <h3 className="mainNumber">
              {" "}
              {userText.numberText || defaultValues.numberText}
            </h3>
            <footer>動書番戦 無シ</footer>
          </>
        ) : (
          <IdentityLayout toggler={setEditMode} styleType="message" />
        )}
      </StyledMessageTemplate>
    );
  }
}

export default MessageScreen;