import useValidateInput from "hooks/useValidateInput";
import LoginButton from "components/LoginButton";
import { useState } from "react";

const LoginForm = () => {
  const [password, showPassword] = useState("password"); //to toggle the password input type
  const [eye, setEye] = useState("fa-eye"); // the show password icon

  const handleShow = () => {
    password === "password" ? showPassword("text") : showPassword("password"); // toggle the input type
    eye === "fa-eye" ? setEye("fa-eye-slash") : setEye("fa-eye"); // toggle the eye
  };

  const { state, handleChange, handleError } = useValidateInput(); // return the function and the values of the input from the custom hook

  return (
    <form className="form--login">
      <label htmlFor="email">
        Name
        {state.nameError && (
          <p className="error error--name">
            Please input a name not less than 2 and not more than 40 characters
          </p>
        )}
        <input
          type="text"
          name="name"
          value={state.name}
          required
          placeholder="First name"
          onChange={handleChange}
          onKeyUp={handleError}
        />
      </label>

      <label htmlFor="email">
        Email
        {state.emailError && (
          <p className="error error--email">Please input a valid email</p>
        )}
        <input
          type="text"
          name="email"
          value={state.email}
          required
          placeholder="email address"
          onChange={handleChange}
          onKeyUp={handleError}
        />
      </label>

      <label className="label login--label" htmlFor="password">
        Password
        {state.passwordError && (
          <p className="error error--password">
            Use at least 1 uppercase, 1 lowercase, 1 aplhanumeric, and 8
            characters long
          </p>
        )}
        <input
          className="login-password"
          type={password}
          name="password"
          placeholder="password"
          required
          value={state.password}
          onChange={handleChange}
          onKeyUp={handleError}
        />
        <i className={`fa ${eye} eye`} onClick={handleShow}></i>
      </label>

      <LoginButton details={state} />
    </form>
  );
};

export default LoginForm;
