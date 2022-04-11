import styled from "styled-components";
import {
  faintWhite,
  primaryColor,
  secondaryColor,
  textwhite,
} from "styles/variables/styleVariables";

export const AirportListWrapper = styled.div`
  div {
    border: 1px solid ${secondaryColor};
    color: ${textwhite};
    font-weight: 400;
    width: 80%;
    margin: 1em auto;
    background-color: ${faintWhite};
    cursor: default;

    &:hover {
      color: ${primaryColor};
      background-color: ${textwhite};
    }

    @media screen and (max-width: 768px) {
      color: ${primaryColor};
      background-color: ${textwhite};
    }
  }

  @media screen and (min-width: 500px) {
    width: 100%;
    padding: 2% 10%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;

    div {
      width: 100%;
      margin: 0;
    }
  }
`;
