import { NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ logout }) {

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <NavLink
        to="/"
        style={linkStyles} 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyles}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={linkStyles}
      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
