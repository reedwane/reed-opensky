import { useDataContext } from "contexts/DataContext";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import { HeaderWrapper } from "styles/styledComponents/headerWrapper";

const Header = () => {
  const { name, setName } = useDataContext();

  const handleLogout = () => {
    localStorage.clear();
    setName("");
  };

  return (
    <HeaderWrapper className="header">
      <img src={logo} alt="logo" />

      <nav className="nav">
        {!name && (
          <>
            <span>Welcome Voyager!</span>
          </>
        )}

        {name && (
          <>
            <span>Hello {name}</span>

            <Link className="link nav--link" to="login" onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
