import { useDataContext } from "contexts/DataContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { name, setName } = useDataContext();

  const handleLogout = () => {
    localStorage.clear();
    setName("");
  };

  return (
    <header className="header">
      <h2 className="header--logo">reedwane</h2>

      <nav className="nav">
        {!name && (
          <>
            <span>Welcome Voyager</span>
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
    </header>
  );
};

export default Header;
