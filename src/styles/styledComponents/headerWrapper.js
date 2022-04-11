import styled from "styled-components";
import {
  faintWhite,
  secondaryColor,
  textwhite,
} from "styles/variables/styleVariables";

export const HeaderWrapper = styled.header`
  color: ${textwhite};
  border: 1px solid ${secondaryColor};
  background-color: ${faintWhite};
  width: 100%;
  height: 3em;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    cursor: pointer;
    height: 2em;
  }

  nav {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: flex-end;
  }

  span {
    align-self: center;
    width: 60%;
    height: 2em;
    overflow: hidden;
  }

  a {
    color: ${textwhite};
    border: 1px solid ${secondaryColor};
    display: inline-block;
    border-radius: 20%;
    padding: 0 0.1em;
    height: 2em;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    height: 5em;
    padding: 1em;
    align-items: center;
    justify-content: space-around;

    a {
      border-radius: 20%;
    }
  }
`;
