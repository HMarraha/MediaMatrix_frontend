import React, { useEffect } from "react";

import { useState } from "react";

import "./Login.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Insérer ici la logique de connexion
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <table>
          <tr>
            <td>
              <label htmlFor="username">
                <h4>Username</h4>
              </label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">
                <h4>Password</h4>
              </label>
            </td>
            <td>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </td>
          </tr>
        </table>

        <button type="submit" className="login-button">
          Connection
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
