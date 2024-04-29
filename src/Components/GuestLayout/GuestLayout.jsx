import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useStateContext } from '../../Contextapi/contextProvider'
import axiosClient from '../../Axios/axios'
const GuestLayout = () => {
  const {user,setUser} = useStateContext()
  useEffect(()=> {
    const getUser = async () => {
      try {
        const response = await axiosClient.get('/users/user')
        setUser(response.data)
      } catch(error) {
        console.error(error)
      }
    }
    getUser()
  },[])
 
    if(user) {
        return <Navigate to="/welcome"/>
    }
  return (
    <>
      
      <Outlet/>
      
    </>
    
  )
}

export default GuestLayout