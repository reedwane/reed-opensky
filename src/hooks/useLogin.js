import { useDataContext } from "contexts/DataContext";
import { useNavigate } from "react-router-dom";

const useLogin = (details) => {
  const { name, email, password, passwordError, emailError, nameError } =
    details;

  const { setName } = useDataContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      name &&
      email &&
      password &&
      !passwordError &&
      !emailError &&
      !nameError
    ) {
      //if the inputs are validated

      setName(name);

      localStorage.setItem("name", name);

      navigate("/");
    }
  };

  return { handleSubmit }; // return this function
};

export default useLogin;
