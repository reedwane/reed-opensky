import useLogin from "hooks/useLogin";
import { useState } from "react";

const LoginButton = ({ details }) => {
  const [detailError, setDetailError] = useState(false);
  const { handleSubmit } = useLogin(details, setDetailError);

  return (
    <>
      <button
        className="button login--button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Login
      </button>

      {detailError && <span className="submit-error">fill in all details</span>}
    </>
  );
};

export default LoginButton;
