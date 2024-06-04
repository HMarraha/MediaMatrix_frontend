import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Contextapi/contextProvider'
import WelcomeNavbar from './WelcomeHomeComponents/WelcomeNavbar'
import Footer from '../GuestLayout/GuestHomeComponents/Footer'
const UserLayout = () => {
  const {user} = useStateContext()
  if (!user) {
    return <Navigate to='/login'/>
  } else if (user?.role === 'premium') {
    return <Navigate to='/welcomeprem'/>
  }
  return (
    <>
      <WelcomeNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default UserLayout