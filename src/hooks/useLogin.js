import { useDataContext } from "contexts/DataContext";
import { useNavigate } from "react-router-dom";

const useLogin = (details, setDetailError) => {
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

      setDetailError(false); //remove the alert

      setName(name);

      localStorage.setItem("name", name);

      navigate("/");
    } else {
      setDetailError(true);
    }
  };

  return { handleSubmit }; // return this function
};

export default useLogin;
