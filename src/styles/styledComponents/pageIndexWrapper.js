import styled from "styled-components";
import { secondaryColor } from "styles/variables/styleVariables";

export const PageIndexWrapper = styled.footer`
  margin-top: 1em;
  height: 2em;

  span {
    cursor: pointer;
    display: inline-block;
    width: 2em;
    padding: 0.2em;
    margin: 0 1%;
    border: 1px solid ${secondaryColor};
  }
`;
