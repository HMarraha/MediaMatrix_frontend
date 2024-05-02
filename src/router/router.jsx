import {createBrowserRouter, Navigate} from 'react-router-dom'
import GuestLayout from '../Components/GuestLayout/GuestLayout'
import Signup from '../Components/GuestLayout/Signup'
import Login from '../Components/GuestLayout/Login'
import GuestHome from '../Components/GuestLayout/GuestHome'
import UserLayout from '../Components/UserLayout/UserLayout'
import NotFound from '../Components/NotFound/NotFound'
import Welcome from '../Components/UserLayout/Welcome'
import Search from '../Components/UserLayout/Search'
import Description from '../Components/UserLayout/Description'
import Profile from '../Components/UserLayout/Profile'
const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>,
    },
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to='/welcome'/>
            },
            {
                path: '/welcome',
                element: <Welcome/>
            },
            {
                path:'/search',
                element: <Search/>
            },
            {
                path: '/description/movie/:id/:original_title',
                element: <Description/>
            },
            {
                path: '/description/tv/:id/:original_name',
                element: <Description/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    },
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
        },
])

export default router