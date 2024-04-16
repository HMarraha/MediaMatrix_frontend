import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to='/home'><img src={logo} alt="" /></Link>
        </div>
        <ul className="buttons">
            <div>
                <li className='premiumbutton'>Premium</li>  
            </div>
            <div className='loginsignup'>
                <Link to='/login'><li className='loginbutton'>Login</li></Link>
                <Link to='/signup'><li className='signupbutton'>Signup</li></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar