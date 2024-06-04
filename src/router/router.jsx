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
import Premium from '../Components/UserLayout/Premium'
import Assignrole from '../Components/UserLayout/Assignrole'
import PremiumUserLayout from '../Components/PremiumUserLayout.jsx/PremiumUserLayout'
import Welcomeprem from '../Components/PremiumUserLayout.jsx/Welcomeprem'
import Supersearch from '../Components/PremiumUserLayout.jsx/Supersearch'
import Watch from '../Components/PremiumUserLayout.jsx/Watch'
import Watchmovies from '../Components/PremiumUserLayout.jsx/Watchmovies'
import Watchtvshows from '../Components/PremiumUserLayout.jsx/Watchtvshows'
import Srtparser from '../srtparser'
import PremiumSearch from '../Components/PremiumUserLayout.jsx/PremiumSearch'
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
    },
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
            },
            {
                path: '/prem',
                element: <Premium />
            },
            {
                path: '/assign',
                element: <Assignrole/>
            },
        ]
    },
    {
        path: '/',
        element: <PremiumUserLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/welcomeprem'/>
            },
            {
                path: '/welcomeprem',
                element: <Welcomeprem/>
            },
            {
                path: '/premiumdescription/movie/:id/:original_title',
                element: <Description/>
            },
            {
                path: '/premiumdescription/tv/:id/:original_title',
                element: <Description/> 
            },
            {
                path: '/premiumprofile',
                element: <Profile/>
            },
            {
                path: '/supersearch',
                element: <Supersearch/>
            },
            {
                path: '/watch',
                element: <Watch/>
            },
            {
                path: '/watch/movies/:id',
                element: <Watchmovies/>
            },
            {
                path: '/watch/tvshows/:id',
                element: <Watchtvshows/>
            },
            {
                path:'/premium/search',
                element: <PremiumSearch/>
            },
            {
                path: '/premium/description/movie/:id/:original_title',
                element: <Description/>
            },
            {
                path: '/premium/description/tv/:id/:original_name',
                element: <Description/>
            },
            {
                path:'/srt',
                element: <Srtparser/>
            }
        ]
    }
])

export default router