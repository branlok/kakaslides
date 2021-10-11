import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeLongText } from "../../../features/userInputs/inputSlice";
import { StyledButtonLite } from "../../../globalStyles/GenericButton";
import IdentityLayout from "./EditMode/IdentityLayout";
import { StyledParagraphTemplate } from "./Styles/Styles";

function ParagraphScreen() {
  const [editMode, setEditMode] = useState(false);
  let dispatch = useDispatch();
  let input = useSelector((state) => state.inputs);
  return (
    <StyledParagraphTemplate data-testid="paragraphScreen">
      {!editMode ? (
        <div onClick={() => setEditMode(true)}>
          <p>{input.longText}</p>
        </div>
      ) : (
        <Formik
          initialValues={{ longText: input.longText }}
          onSubmit={(val) => {
            if (val.longText.length === 0) {
              val.longText = input.longText;
              setEditMode(false);
            }
            dispatch(changeLongText(val.longText));
            setEditMode(false);
          }}
        >
          <Form>
            <Field autoFocus component="textarea" spellCheck={false} name="longText" ></Field>
            <StyledButtonLite className="save" type="submit">
              Save
            </StyledButtonLite>
          </Form>
        </Formik>
      )}
    </StyledParagraphTemplate>
  );
}

export default ParagraphScreen;
