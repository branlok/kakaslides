import React from "react";
import { Field, Form, Formik } from "formik";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeText } from "../../../../features/userInputs/inputSlice";
import { useSelector } from "react-redux";
import getDefaultText from "../../../../utils/getDefaultText";

function IdentityLayout({ toggler, styleType }) {
  let main = useRef(null);
  let dispatch = useDispatch();
  let state = useSelector((state) => state.inputs);
  let bgColor = useSelector((state) => state.theme.bgColor);
  //conditionall rendering the slides, and default values are base on "color and identity"
  let defaultValues = getDefaultText(bgColor, styleType);
  //use default or use history
  let initialValues = {
    mainText: state.mainText || defaultValues.mainText,
    secondaryText: state.secondaryText || defaultValues.secondaryText,
    mainNumberInput: state.numberText || defaultValues.numberText,
  };

  let submitFunction = (val) => {
    if (
      val.mainText == defaultValues.mainText &&
      val.secondaryText == defaultValues.secondaryText &&
      val.mainNumberInput == defaultValues.numberText
    ) {
      //if theres more similar logic, could use _lodash for this part
      dispatch(
        //always reset user input i it becomes the default input
        changeText({
          mainText: null,
          secondaryText: null,
          numberText: null,
        })
      );
      toggler(false);
      return;
    }
    dispatch(
      //revert to null, or if there is zero length string
      changeText({
        mainText: val.mainText.length > 0 ? val.mainText : null,
        secondaryText: val.secondaryText.length > 0 ? val.secondaryText : null,
        numberText: val.mainNumberInput.length > 0 ? val.mainNumberInput : null,
      })
    );
    toggler(false);
  };

  switch (styleType) {
    case "identity":
      return (
        <Formik initialValues={initialValues} onSubmit={submitFunction}>
          <Form>
            <Field
              autoFocus
              ref={main}
              className="mainTextInput"
              type="text"
              name="mainText"
            />
            <Field className="secondaryTextInput" name="secondaryText"></Field>
            <Field className="mainNumberInput" name="mainNumberInput"></Field>
            <button className="saveEdit" type="submit">
              Save
            </button>
          </Form>
        </Formik>
      );
    case "message":
      return (
        <Formik initialValues={initialValues} onSubmit={submitFunction}>
          <Form>
            <Field
              autoFocus
              ref={main}
              className="mainTextInput"
              type="text"
              name="mainText"
            />
            <Field className="secondaryTextInput" name="secondaryText"></Field>
            <Field className="mainNumberInput" name="mainNumberInput"></Field>
            <footer>動書番戦 無シ</footer>
            <button className="saveEdit" type="submit">
              Save
            </button>
          </Form>
        </Formik>
      );
    default:
      return null;
  }
}

export default IdentityLayout;
