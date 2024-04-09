import React from 'react'
import logo from '../../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <ul className="buttons">
            <div>
                <li className='premiumbutton'>Premium</li>  
            </div>
            <div className='loginsignup'>
                <li className='loginbutton'>Login</li>
                <li className='signupbutton'>Signup</li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar