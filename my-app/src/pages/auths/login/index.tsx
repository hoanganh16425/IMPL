import React, { useState } from "react";
import "../../../assets/styles/form.scss";
import "./login.scss";
import { login } from "../../../@core/apis/auth";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../../@core/apis/users/users";
function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      login(userName, password).then((response) => {
          navigate("/")
      });
    } catch (error) {
      throw error
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="auth-container">
          <div className="auth-logo">
            <img src={require("../../../assets/img/IMPL_1.png")} />
          </div>
          <h1 className="auth-title">Login</h1>
          <form className="auth-form">
            <label htmlFor="username">User</label>
            <input
              type="text"
              id="username"
              placeholder="johndoe"
              name="name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="name"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="forgot-password">
              <a href="/">Forgot Password</a>
            </div>
            <button onClick={() => handleLogin()} type="button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
