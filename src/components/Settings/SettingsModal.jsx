import React, { useEffect } from "react";
import StyledSettingsModal, {
  StyledPalette,
  StyledPreivew,
  StyledTexture,
} from "./Styles";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  changeBg,
  changeTemplateStyle,
  changeTexture,
  invert,
  setBlackFont,
  setJitter,
  toggleblackBars,
} from "../../features/settings/themeSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toggleSettings } from "../../features/settings/settings";
import { changeText } from "../../features/userInputs/inputSlice";
import { StyledButton } from "../../globalStyles/GenericButton";
import { useRef } from "react";
import Toggle from "./Accessory/Toggle";
function SettingsModal() {
  //get redux initialValues;
  let [hoverDescription, setHoverDescription] = useState(null);
  let dispatch = useDispatch();
  let theme = useSelector((state) => state.theme);
  let settingsOpen = useSelector((state) => state.settings.settingsOpen);
  let descriptionRef = useRef(null);
  let initialValues = {
    bgColor: theme.bgColor,
    style: theme.templateStyle,
    texture: theme.texture,
    blackBars: theme.blackBars,
    inverted: false,
    jitterDefault: theme.jitterDefault,
    blackFont: theme.blackFont
  };

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === "Escape") {
        dispatch(toggleSettings(false));
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);

  let onhover = (e) => {
    if (e.target.closest(".styleLabels")?.dataset.styleName == "identity") {
      descriptionRef.current.style.background = "rgba(0,0,0,0.2)";
      setHoverDescription("Large text");

    } else if (
      e.target.closest(".styleLabels")?.dataset.styleName == "message"
    ) {
      descriptionRef.current.style.background = "rgba(0,0,0,0.2)";
      setHoverDescription("Medium Text");

    } else if (
      e.target.closest(".styleLabels")?.dataset.styleName == "paragraph"
    ) {
      descriptionRef.current.style.background = "rgba(0,0,0,0.2)";
      setHoverDescription("Small Text");

    } else {
      descriptionRef.current.style.background = "rgba(0,0,0,0.0)";

      setHoverDescription(null);
    }
  };

  if (settingsOpen) {
    return (
      <StyledSettingsModal className="blurred-container">
        <Formik
          className="formikWrapper"
          initialValues={initialValues}
          onSubmit={(value) => {
            dispatch(changeBg(value.bgColor));
            dispatch(changeTemplateStyle(value.style));
            dispatch(changeTexture(value.texture));
            dispatch(toggleblackBars(value.blackBars));
            dispatch(setJitter(value.jitterDefault));
            dispatch(setBlackFont(value.blackFont));
            // dispatch(invert(value.blackBars));
            dispatch(toggleSettings(false));

            //reset content if switch to new sldie
            if (theme.templateStyle != value.style) {
              dispatch(
                changeText({
                  mainText: null,
                  secondaryText: null,
                  numberText: null,
                })
              );
            }
          }}
        >
          <Form onMouseOver={onhover}>
            <h1 className="formTitle">Settings</h1>
            <h2 className="themeSect">Style</h2>
            <section className="styleSection">
              <label className="styleLabels" data-style-name="identity">
                <Field type="radio" name="style" value="identity" />
                <span>Identity</span>
              </label>
              <label className="styleLabels" data-style-name="message">
                <Field type="radio" name="style" value="message" />
                <span>Message</span>
              </label>
              <label className="styleLabels" data-style-name="paragraph">
                <Field type="radio" name="style" value="paragraph" />
                <span>Excerpt</span>
              </label>
            </section>
            <section ref={descriptionRef} className="description">
              <div>{hoverDescription ? hoverDescription : null}</div>
            </section>
            <section className="otherSection">
              <div className="toggleWrapper">
                Blackbars
                <Toggle toggleOption={"blackBars"} />
              </div>
              <div className="toggleWrapper">
                Always Shake Text
                <Toggle toggleOption={"jitterDefault"} />
              </div>
              <div className="toggleWrapper">
                Black Text on White Backdrop
                <Toggle toggleOption={"blackFont"} />
              </div>
            </section>
            <h2 className="themeSect">Colors</h2>
            <section className="themeSection">
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="red" />
                <StyledPalette color="red" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="lilac" />
                <StyledPalette color="lilac" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="peach" />
                <StyledPalette color="peach" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="green" />
                <StyledPalette color="green" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="purple" />
                <StyledPalette color="purple" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="black" />
                <StyledPalette color="black" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="offWhite" />
                <StyledPalette
                  color="offWhite"
                  className="color"
                ></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="orange" />
                <StyledPalette color="orange" className="color"></StyledPalette>
              </label>
            </section>
            <h2 className="themeSect">Texture</h2>
            <section className="textureSection">
              <label className="textureLabels">
                <Field type="radio" name="texture" value="horizontalTexture" />
                <StyledTexture texture="horizontalTexture" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="cat" />
                <StyledTexture texture="cat" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="blood" />
                <StyledTexture texture="blood" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="plastic" />
                <StyledTexture texture="plastic" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="water" />
                <StyledTexture texture="water" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="ripple" />
                <StyledTexture texture="ripple" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="snail" />
                <StyledTexture texture="snail" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="crab" />
                <StyledTexture texture="crab" />
              </label>
              <label className="textureLabels">
                <Field type="radio" name="texture" value="snake" />
                <StyledTexture texture="snake" />
              </label>
            </section>
            <div className="action">
              <StyledButton onClick={() => dispatch(toggleSettings(false))}>
                Close
              </StyledButton>
              <StyledButton type="submit">Save</StyledButton>
            </div>
          </Form>
        </Formik>
      </StyledSettingsModal>
    );
  } else {
    return (
      // <StyledSettingsButton onClick={() => setSettings(true)}>
      //   Settings
      // </StyledSettingsButton>
      null
    );
  }
}

export default SettingsModal;
