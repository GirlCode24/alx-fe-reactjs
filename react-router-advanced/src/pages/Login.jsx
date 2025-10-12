import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/profile");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login to Continue</button>
    </div>
  );
}

export default Login;
