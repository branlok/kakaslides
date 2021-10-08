import { Field } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledToggle } from "./style";

function Toggle({ toggleOption, target }) {
  let dispatch = useDispatch();
//   let selector = useSelector((state) => state.theme[toggleOption]);

  return (
    <StyledToggle>
      <label className="switch">
        <Field type="checkbox" name={toggleOption} />
        <span className="slider round"></span>
      </label>
    </StyledToggle>
  );
}

export default Toggle;
