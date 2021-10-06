import styled, { keyframes } from "styled-components";

let jitter = keyframes`
0% {
    transform: translateY(0px) translateX(0px)
}
25% {
    transform: translateY(1px) translateX(1px)
}
50% {
    transform: translateY(1px) translateX(0px)
}
75% {
    transform: translateY(0px) translateX(-1px)
}
100% {
    transform: translateY(0px) translateX(0px)
}
`;

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
      animation: ${jitter} 0.2s ease infinite;
    }
    /* animation: ${jitter} 0.2s ease infinite; */
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

  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
    :hover {
      animation: ${jitter} 0.2s ease infinite;
    }
    /* animation: ${jitter} 0.2s ease infinite; */
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
    position: fixed;
    bottom: 120px;
    font-size: 25px;
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
    }
    :hover {
      animation: ${jitter} 0.2s ease infinite;
    }
    /* animation: ${jitter} 0.2s ease infinite; */
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
  footer {
    position: absolute;
    bottom: 120px;
    font-size: 25px;
    left: 0px;
    width: 100%;
  }
`;

export default StyledIdentityTemplate;
