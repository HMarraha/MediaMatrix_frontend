import {createBrowserRouter, Navigate} from 'react-router-dom'
import GuestLayout from '../Components/GuestLayout/GuestLayout'
import Signup from '../Components/GuestLayout/Signup'
import Login from '../Components/GuestLayout/Login'
import GuestHome from '../Components/GuestLayout/GuestHome'
const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path:'/home',
                element: <GuestHome />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
        ]
    }
    {
        path: '*',
        element: <NotFound />,
    }
])

export default router