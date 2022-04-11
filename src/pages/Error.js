import { Link } from "react-router-dom";
import styled from "styled-components";
import { textwhite } from "styles/variables/styleVariables";

const Error = () => {
  return (
    <ErrorWrapper>
      <h2>Oops! that page can not be found</h2>
      <p>
        Go back to <Link to="/">home page</Link>
      </p>
    </ErrorWrapper>
  );
};

export const ErrorWrapper = styled.div`
  a {
    color: ${textwhite};
  }
`;

export default Error;
