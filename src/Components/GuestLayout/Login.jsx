import React, { useEffect } from "react";
import logo from '../../assets/logo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../Axios/axios";
import { useStateContext } from "../../Contextapi/contextProvider";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useStateContext()
  const handleLogin = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        const response = await axiosClient.post('/users/login',{
          email,
          password
        })
        setUser(response.data.user)
        console.log(response)
      } catch(error) {
        console.error(error)
      }
    }
    login()
  };

  return (
    <div className="login-form-container">
      <Link to='/home'><img src={logo} alt="" /></Link>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form"> 
              <label htmlFor="email">
                <h4>Email</h4>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <label htmlFor="password">
                <h4>Password</h4>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
        <button type="submit" className="login-button">
          Sign in
        </button>
        <Link to='/signup' style={{textDecoration: 'none'}}><p>Don't have an account? click here to signup!</p></Link>
      </form>
    </div>
  );
};

export default LoginForm;
