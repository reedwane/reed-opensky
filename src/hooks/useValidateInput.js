import { useState } from "react";

const useValidateInput = (e) => {
  // to set multiple states for the inputs in the form
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    nameError: false,
    emailError: false,
    passwordError: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value, //set value according to the name of the target input
      // id: [e.target.dataset.id],
    });
  };

  // to handle login/signup input error
  const handleError = (e) => {
    const nameRegex = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;

    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

    // at least one uppercase, one lowercase, one number/special character, 8 chars long
    // example: Abcdefge@
    const passwordRegex =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (e.target.name === "name") {
      setState({
        ...state,
        nameError: !nameRegex.test(state.name),
      });
    } else if (e.target.name === "email") {
      setState({
        ...state,
        emailError: !emailRegex.test(state.email),
      });
    } else {
      setState({
        ...state,
        passwordError: !passwordRegex.test(state.password),
      });
    }
  };

  const validators = {
    state,
    handleChange,
    handleError,
  };

  return validators;
};

export default useValidateInput;
