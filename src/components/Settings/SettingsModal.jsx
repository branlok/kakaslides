import React from "react";
import StyledSettingsModal, { StyledPalette, StyledPreivew } from "./Styles";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  changeBg,
  changeTemplateStyle,
} from "../../features/settings/themeSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toggleSettings } from "../../features/settings/settings";
import { changeText } from "../../features/userInputs/inputSlice";
function SettingsModal() {
  //get redux initialValues;

  let dispatch = useDispatch();
  let theme = useSelector((state) => state.theme);
  let settingsOpen = useSelector((state) => state.settings.settingsOpen);
  let initialValues = {
    bgColor: theme.bgColor,
    style: theme.templateStyle,
  };

  if (settingsOpen) {
    return (
      <StyledSettingsModal className="blurred-container">
        <Formik
          initialValues={initialValues}
          onSubmit={(value) => {
            dispatch(changeBg(value.bgColor));
            dispatch(changeTemplateStyle(value.style));
            dispatch(toggleSettings());
            //reset content if switch to new slide
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
          <Form>
            <h1 className="formTitle">Settings</h1>
            <h2 className="themeSect">Theme</h2>
            <section className="themeSection">
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="red" />
                <StyledPalette color="red" className="color"></StyledPalette>
              </label>
              <label className="colorLabels">
                <Field type="radio" name="bgColor" value="lilac" />
                <StyledPalette color="lilac" className="color"></StyledPalette>
              </label>
              <label>
                <Field type="radio" name="bgColor" value="blue" />
                <StyledPalette color="blue" className="color"></StyledPalette>
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
            <h2 className="themeSect">Style</h2>
            <section className="styleSection">
              <label>
                <Field type="radio" name="style" value="identity" />
                <span>Identity</span>
                <StyledPreivew />
              </label>
              <label>
                <Field type="radio" name="style" value="message" />
                <span>Message</span>
                <StyledPreivew />
              </label>
              <label>
                <Field type="radio" name="style" value="paragraph" />
                <span>Excerpt</span>
                <StyledPreivew />
              </label>
            </section>
            <button type="submit">Save</button>
          </Form>
        </Formik>
        <button onClick={() => dispatch(toggleSettings())}>close</button>
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
