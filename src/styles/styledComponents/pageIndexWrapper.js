import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  textwhite,
} from "styles/variables/styleVariables";

export const PageIndexWrapper = styled.footer`
  margin-top: 1em;

  span {
    cursor: pointer;
    display: inline-block;
    width: 1.5em;
    padding: 0.1em;
    margin: 1%;
    border: 1px solid ${secondaryColor};

    &:hover {
      background-color: ${textwhite};
      color: ${primaryColor};
      font-weight: 300;
    }
  }
`;
