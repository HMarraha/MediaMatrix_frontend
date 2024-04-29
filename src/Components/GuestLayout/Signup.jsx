import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useStateContext } from "../../Contextapi/contextProvider";
import axiosClient from "../../Axios/axios";

const SignupForm = () => {
  const {setUser} = useStateContext()
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
    const signup = async () => {
      try {
        const response = await axiosClient.post('/users/signup', formData)
        setUser(response.data)
      } catch(e) {
        console.error(e)
      }
    }
    signup()
  }; 

  return (
    <div className="signup-form-container">
      <Link to='/home'><img src={logo} alt="" /></Link>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
       
                <label htmlFor="username">
                  <h4>Username</h4>
                </label>
              
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
           
                <label htmlFor="email">
                  <h4>Email</h4>
                </label>
             
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
             
                <label htmlFor="password">
                  <h4>Password</h4>
                </label>
             
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
             
        <button type="submit">Signup</button>
        <Link to='/login' style={{textDecoration: 'none',color:'black'}}><p>Already have an account? Login now!</p></Link>
      </form>
    </div>
  );
};

export default SignupForm;
