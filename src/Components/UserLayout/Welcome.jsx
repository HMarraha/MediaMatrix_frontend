import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import axiosClient from '../../Axios/axios'
import { useStateContext } from '../../Contextapi/contextProvider'
import { FaPortrait } from 'react-icons/fa'
import {Button} from '@mui/material'
import WelcomeHero from './WelcomeHomeComponents/WelcomeHero'
import useFetch from '../../Axios/useFetch'
import WelcomeMoviesCards from './WelcomeHomeComponents/WelcomeMoviesCards'
import WelcomeTvShowsCards from './WelcomeHomeComponents/WelcomeTvShowsCards'
import Faq from './WelcomeHomeComponents/Faq'
import WelcomeUpcoming from './WelcomeHomeComponents/WelcomeUpcoming'
import WelcomeFooter from './WelcomeHomeComponents/WelcomeFooter'
import WelcomeNavbar from './WelcomeHomeComponents/WelcomeNavbar'
const Welcome = () => {
    const [heroMovie,setHeroMovie] = useState()
    
   
    useEffect(()=> {
      useFetch('/movie/top_rated?language=en-US&page=1',setHeroMovie)
    },[])
    
  return (
    <>
    <WelcomeHero heroMovie={heroMovie}/>
    <WelcomeMoviesCards/>
    <WelcomeTvShowsCards/>
    <Faq/>
    <WelcomeUpcoming/>
    </>
  )
}

export default Welcome