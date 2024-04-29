import React, { useState } from 'react'
import { useStateContext } from '../../../Contextapi/contextProvider'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { FaPortrait } from 'react-icons/fa'
import { Button } from '@mui/material'
import axiosClient from '../../../Axios/axios'
const WelcomeNavbar = () => {
    const {user,setUser} = useStateContext()
    const [logout,setLogout] = useState(true)
    const [error,setError] = useState()
    const handleLogout = () => {
        setLogout(prevLogout => !prevLogout)
      }
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axiosClient.post('/users/logout');
            console.log(response)
            setUser(null)
          } catch (error) {
            setError(error.message);
            console.error(error);
          }
        };
        const logoutstyle = {
          visibility: logout ? "hidden" : "visible",
          transform: logout ? "translateY(-5%)" : "translateY(5%)",
          transition: logout ? "0s" : "150ms ease-out",
          opacity: logout ? "0" : "1",
        }
  return (
    <>
        <nav className='navbar'>
        <div className='logo'>
            <Link to='/home'><img src={logo} alt="" /></Link>
        </div>
        <ul className="buttons">
            <div>
                <li className='premiumbutton'>Premium</li>  
            </div>
            <div onClick={handleLogout} className="profiledisplay">
                        <h1 className="profilename">{user.username}</h1>
                        <i className="profileicon"><FaPortrait radius={49} color="white" size={60}/></i>
                        <div style={logoutstyle} className="logout">
                            <Link to="/profile">
                                <Button className="profilebtn" style={{width : '15rem',height: '3rem'}} variant="contained">Profile</Button>
                            </Link>
                                <Button className="signout" onClick={handleSubmit} style={{width : '15rem',marginTop: '1rem',height: '3rem'}} variant="contained">Sign out</Button>
                                <div className="logoutinfo">
                                    <h1 className="profilename">{user.username}</h1>
                                    <p className="profileemail">{user.email}</p>
                                </div>
                        </div>
                    </div>
        </ul>
    </nav>
    </>
  )
}

export default WelcomeNavbar