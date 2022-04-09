import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>Oops! that page can not be found</h2>
      <p>
        Go back to <Link to="/">home page</Link>
      </p>
    </>
  );
};

export default Error;
