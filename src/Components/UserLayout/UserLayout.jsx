import React, {useEffect} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Contextapi/contextProvider'
import WelcomeNavbar from './WelcomeHomeComponents/WelcomeNavbar'
import axiosClient from '../../Axios/axios'

const UserLayout = () => {
  
  const {user,setUser} = useStateContext()
  useEffect(()=> {
    const getUser = async () => {
      try {
        const response = await axiosClient.get('/users/user')
        
        if (response.data) {
          setUser(response.data)
          return <Navigate to='/login'/>
        }
        
      } catch(error) {
        console.error(error)
      }
    }
    getUser()
  },[])
  return (
    <>
      <WelcomeNavbar/>
      <Outlet/>
    </>
  )
}

export default UserLayout