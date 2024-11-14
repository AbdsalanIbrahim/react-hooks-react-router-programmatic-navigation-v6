import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to home page after login
    } else {
      navigate("/login"); // Navigate to login page after logout
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      <NavBar logout={logout} />
      <Outlet context={login} />
    </div>
  );
}

export default App;
