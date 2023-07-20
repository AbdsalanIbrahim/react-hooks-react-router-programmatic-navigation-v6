import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const login = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log('navigated to login')

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
