import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
