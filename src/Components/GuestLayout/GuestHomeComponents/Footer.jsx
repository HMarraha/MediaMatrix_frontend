import React from 'react'
import logo from '../../../assets/logo.png'
import { FaEnvelope,FaFacebook,FaInstagram,FaTwitter,FaCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="content-container">
        <div className="container-1">
          <a href='#navbar'><img className='logo' src={logo} alt="" /></a>
          <h1>Keep Tracking!</h1>
        </div>
        <div className="container-2">
          <h1>Contact us</h1>
          <div className="contact">
            <i className='contacticon' style={{cursor: 'pointer'}}><FaEnvelope color='white' size='3rem'/></i>
            <i className='contacticon' style={{cursor: 'pointer'}}><FaFacebook color='white' size='3rem'/></i>
            <i className='contacticon' style={{cursor: 'pointer'}}><FaInstagram color='white' size='3rem'/></i>
            <i className='contacticon' style={{cursor: 'pointer'}}><FaTwitter color='white' size='3rem'/></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i><FaCopyright size='1.5rem' color='white'/></i>
        <h1>All rights reserved, MediaMatrix 2024</h1>
      </div>
    </div>
  </>
  )
}

export default Footer