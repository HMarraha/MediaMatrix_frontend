import React, { useEffect, useState } from 'react'
import Navbar from './GuestHomeComponents/Navbar'
import Hero from './GuestHomeComponents/Hero'
import tmbdClient from '../../Axios/tmdb'
import Latest from './GuestHomeComponents/Latest'
import Join from './GuestHomeComponents/Join'
import Footer from './GuestHomeComponents/Footer'

const GuestHome = () => {
  const [heroMovie, setHeroMovie] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [nowPlayingTvSeries, setNowPlayingTvSeries] = useState([])
  const fetchUrl = async (url,setState) => {
    const response = await tmbdClient.get(url)
    const results = response.data.results
    setState(results)
  }
  useEffect(()=> {
    fetchUrl('/movie/top_rated?language=en-US&page=1',setHeroMovie)
    fetchUrl('/movie/now_playing?language=en-US&page=1',setNowPlayingMovies)
    fetchUrl('/tv/on_the_air?language=en-US&page=1',setNowPlayingTvSeries)
  },[])
  return (
    <>
     <Navbar/> 
     <Hero heroMovie={heroMovie}/>
     <Latest nowPlayingMovies={nowPlayingMovies} nowPlayingTvSeries={nowPlayingTvSeries}/>
     <Join/>
     <Footer/>
    </>
  )
}

export default GuestHome