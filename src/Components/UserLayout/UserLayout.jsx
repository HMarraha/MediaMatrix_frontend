import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Contextapi/contextProvider'
import WelcomeNavbar from './WelcomeHomeComponents/WelcomeNavbar'

const UserLayout = () => {
  const {user} = useStateContext()
  if (!user) {
    return <Navigate to='/login'/>
  }
  return (
    <>
      <WelcomeNavbar/>
      <Outlet/>
    </>
  )
}

export default UserLayout