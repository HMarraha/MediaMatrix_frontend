import React, { useEffect, useState } from 'react'
import Navbar from './GuestHomeComponents/Navbar'
import Hero from './GuestHomeComponents/Hero'
import tmbdClient from '../../Axios/tmdb'
import Latest from './GuestHomeComponents/Latest'
import Join from './GuestHomeComponents/Join'
import Footer from './GuestHomeComponents/Footer'
import useFetch from '../../Axios/useFetch'
import Upcoming from './GuestHomeComponents/Upcoming'

const GuestHome = () => {
  const [heroMovie, setHeroMovie] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [nowPlayingTvSeries, setNowPlayingTvSeries] = useState([])
  const [upcomingMovies,setUpcomingMovies] = useState([])
  useEffect(()=> {
    useFetch('/movie/top_rated?language=en-US&page=1',setHeroMovie)
    useFetch('/movie/now_playing?language=en-US&page=1',setNowPlayingMovies)
    useFetch('/tv/on_the_air?language=en-US&page=1',setNowPlayingTvSeries)
    useFetch('/movie/upcoming?language=en-US&page=1',setUpcomingMovies)
  },[])
  return (
    <>
     <Navbar/> 
     <Hero heroMovie={heroMovie}/>
     <Latest nowPlayingMovies={nowPlayingMovies} nowPlayingTvSeries={nowPlayingTvSeries}/>
     <Join/>
     <Upcoming upcomingMovies={upcomingMovies}/>
     <Footer/>
    </>
  )
}

export default GuestHome