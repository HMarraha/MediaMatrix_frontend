import { useState } from "react";
import { useEffect } from "react";

import "./Signup.scss";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire à votre backend ou traiter les données ici
    console.log(formData);
  };

  return (
    <div className="signup-form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <table>
          <tbody>
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
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="username"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">
                  <h4>Email</h4>
                </label>
              </td>
              <td>
                {" "}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  required
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default SignupForm;
