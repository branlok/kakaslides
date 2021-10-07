import styled from "styled-components";

export let StyledButton = styled.button`
  border-style: none;
  background-color: transparent;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  margin: 5px;
  padding: 3px 10px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-color: rgba(0,0,0,0.6);
  }
  :active {
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-color: rgba(0,0,0,0.6);
  }
`;
