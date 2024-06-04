import React, { useEffect } from 'react'
import axiosClient from '../../Axios/axios'
import { useStateContext } from '../../Contextapi/contextProvider'

const Assignrole = () => {
    const {user} = useStateContext()
    const {id: userId,role} = user
    const handleSubmit = (e) => {
        e.preventDefault()
            const assign = async () => {
                try {
                    const response = await axiosClient.post('/users/assign-role',
                    {
                        userId,
                        role: 'premium'
                    }
                )
                console.log(response)
                } catch (err) {
                    console.error(err)
                } 
            }
            assign()     
    }
    console.log(user)
  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Assign premium role</button>
            </form>
        </div>
    </>
  )
}

export default Assignrole