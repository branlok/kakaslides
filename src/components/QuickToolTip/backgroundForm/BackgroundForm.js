import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTexture,
  setCustom,
} from "../../../features/settings/themeSlice";

function BackgroundForm() {
  let currentCustom = useSelector((state) => state.theme.custom);
  let dispatch = useDispatch();

  let [showInput, setShowInput] = useState(false);
  if (showInput) {
    return (
      <Formik
        initialValues={{ texture: currentCustom }}
        onSubmit={(val) => {
          if (val.texture.length > 0) {
            dispatch(changeTexture("custom"));
            dispatch(setCustom(val.texture));
          }
          setShowInput(false);
        }}
      >
        <Form>
          <Field
            type="text"
            name="texture"
            placeholder="Enter Image URL..."
          ></Field>
        </Form>
      </Formik>
    );
  } else {
    return (
      <button className="changeUrlBtn" onClick={() => setShowInput(true)}>
        Background URL
      </button>
    );
  }
}

export default BackgroundForm;
