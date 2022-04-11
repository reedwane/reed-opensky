import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  textwhite,
} from "styles/variables/styleVariables";

export const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
  line-height: 150%;
  font-weight: 200;
  background-color: ${primaryColor};
  border-top: 1px solid ${secondaryColor};

  a {
    color: ${textwhite};
    text-decoration: underline;
    text-decoration-color: ${secondaryColor};
  }
`;
