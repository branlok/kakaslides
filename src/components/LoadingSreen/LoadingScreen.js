import React from "react";
import { StyledLoading } from "./styles";
import { ReactComponent as Loader } from "../../globalStyles/donutLoading.svg";
function LoadingScreen() {
  return (
    <StyledLoading>
      <Loader className="svg" />
      <p> Creating Slide </p>
    </StyledLoading>
  );
}

export default LoadingScreen;
