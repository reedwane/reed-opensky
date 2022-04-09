import useLogin from "hooks/useLogin";

const LoginButton = ({ details }) => {
  const { handleSubmit } = useLogin(details);

  return (
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
  );
};

export default LoginButton;
