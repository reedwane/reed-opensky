import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDataContext } from "contexts/DataContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { name, setName } = useDataContext();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/login"); // go to login if the user doesnt have a name stored
    } else {
      if (!name) setName(localStorage.getItem("name")); // restore the data to the state if incase the browser was refreshed
    }
  });
};

export default useAuth;
