import styled, { css, keyframes } from "styled-components";
// import { jitterTextText } from "../../../../globalStyles/jitterTextKeyframe";
import { jitterText } from "../../../../globalStyles/jitterKeyframe";


let StyledIdentityTemplate = styled.div`
  //takes the current theme
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
    :hover {
      animation: ${jitterText} 0.2s ease infinite;
    }
    /* animation: ${jitterText} 0.2s ease infinite; */
  }
  input {
    background: transparent;
    border-style: none;
    text-align: center;
    color: white;
  }
  .mainTextInput {
    font-size: 250px;
    width: 100vw;

  }
  .mainText {
    font-size: 250px;
  }

  .secondaryText,
  .secondaryTextInput {
    font-size: 30px;
    letter-spacing: 4px;
    font-family: Charm;
  }
  .mainNumber,
  .mainNumberInput {
    font-size: 25px;
    line-height: 50px;
    font-family: "Times New Roman", Times, serif;
  }
`;


export let StyledMessageTemplate = styled.div`
  //takes the current theme
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  


  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
    :hover {
      animation: ${jitterText} 0.2s ease infinite;
    }
    /* animation: ${jitterText} 0.2s ease infinite; */
  }
  .mainText,
  .mainTextInput {
    font-size: 100px;
  }
  .secondaryText,
  .secondaryTextInput {
    font-size: 30px;
    letter-spacing: 4px;
    font-family: Charm;
  }
  .mainNumber,
  .mainNumberInput {
    font-size: 25px;
    line-height: 50px;
    font-family: "Times New Roman", Times, serif;
  }
  footer {
    position: absolute;
    bottom: 30px;
    font-size: 20px;
    left: 0px;
    width: 100%;
  }
`;

export let StyledParagraphTemplate = styled.div`
  //takes the current theme
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: calc(100% - 100px);
    height: 20vw;
    padding: 100px;
  }
  textarea {
    height: 100%;
    width: 100%;
    line-height: 50px;
    font-size: 25px;
    letter-spacing: 15px;
    background-color: transparent;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    border: 0px solid transparent;
    :focus {
      outline: none;
      background-color: rgba(0, 0, 0, 0.2);
    }
    overflow-y: scroll;
    scrollbar-color: gray rgba(0, 0, 0, 0);
    ::-webkit-scrollbar {
      background-color: rgba(0, 0, 0, 0);
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.33333);
      border-radius: 1.25em /* 20px / 16px */;
      width: 215px;
    }
  }

  div {
    margin: 0px;
    padding: 0px;
    font-size: 25px;
    text-align: left;
    padding-left: 100px;
    padding-right: 300px;
    overflow: hidden;
    letter-spacing: 15px;
    p {
      line-height: 50px;
      text-shadow: 2px 2px black !important;
    }
    :hover {
      animation: ${jitterText} 0.2s ease infinite;
    }
    /* animation: ${jitterText} 0.2s ease infinite; */
  }
  /* .mainText {
    font-size: 100px;
  }
  .secondaryText {
    font-size: 30px;
    letter-spacing: 4px;
    font-family: Charm;
  }
  .mainNumber {
    font-size: 25px;
    line-height: 50px;
    font-family: "Times New Roman", Times, serif;
  } */
  /* footer {
    position: absolute;
    bottom: 120px;
    font-size: 25px;
    left: 0px;
    width: 100%;
  } */
`;

export default StyledIdentityTemplate;
