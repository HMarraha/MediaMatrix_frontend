import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../Contextapi/contextProvider'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaPortrait } from 'react-icons/fa'
import { Button } from '@mui/material'
import axiosClient from '../../Axios/axios'
import { FaStar } from 'react-icons/fa'
import useFetch from '../../Axios/useFetch'
const Welcomeprem = () => {

    const [heroMovie,setHeroMovie] = useState()
    const imgBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [isNowPlayingMovie,setIsNowPlayingMovie] = useState(true)
    const [isPopularMovie,setIsPopularMovie] = useState(false)
    const [isTopRatedMovie,setIsTopRatedMovie] = useState(false)
    const [movieCards,setMovieCards] = useState([])
    const [urlMovie,setUrlMovie] = useState('/movie/now_playing?language=en-US&page=1')
    const firstColorMovie = isNowPlayingMovie ? 'primary' : 'secondary'
    const secondColorMovie = isPopularMovie ? 'primary' : 'secondary'
    const thirdColorMovie = isTopRatedMovie ? 'primary' : 'secondary'
    const [isOnTheAirTv,setIsOnTheAirTv] = useState(true)
    const [isPopularTv,setIsPopularTv] = useState(false)
    const [isTopRatedTv,setIsTopRatedTv] = useState(false)
    const [tvCards,setTvCards] = useState([])
    const [urlTv,setUrlTv] = useState('/tv/on_the_air?language=en-US&page=1')
    const firstColorTv = isOnTheAirTv ? 'primary' : 'secondary'
    const secondColorTv = isPopularTv ? 'primary' : 'secondary'
    const thirdColorTv = isTopRatedTv ? 'primary' : 'secondary'
    useEffect(()=> {
        useFetch(urlTv,setTvCards)
    },[urlTv])
    const handleOnTheAir = () => {
        setIsOnTheAirTv(true)
        setIsPopularTv(false)
        setIsTopRatedTv(false)
        setUrlTv('/tv/on_the_air?language=en-US&page=1')
    }
    const handlePopularTv = () => {
        setIsOnTheAirTv(false)
        setIsPopularTv(true)
        setIsTopRatedTv(false)
        setUrlTv('/tv/popular?language=en-US&page=1')
    }
    const handleTopRatedTv = () => {
        setIsOnTheAirTv(false)
        setIsPopularTv(false)
        setIsTopRatedTv(true)
        setUrlTv('/tv/top_rated?language=en-US&page=1')
    }
    useEffect(()=> {
        useFetch(urlMovie,setMovieCards)
    },[urlMovie])
    const handleNowPlaying = () => {
        setIsNowPlayingMovie(true)
        setIsPopularMovie(false)
        setIsTopRatedMovie(false)
        setUrlMovie('/movie/now_playing?language=en-US&page=1')
    }
    const handlePopularMovies = () => {
        setIsNowPlayingMovie(false)
        setIsPopularMovie(true)
        setIsTopRatedMovie(false)
        setUrlMovie('/movie/popular?language=en-US&page=1')
    }
    const handleTopRatedMovies = () => {
        setIsNowPlayingMovie(false)
        setIsPopularMovie(false)
        setIsTopRatedMovie(true)
        setUrlMovie('/movie/top_rated?language=en-US&page=1')
    }
   
    useEffect(()=> {
      useFetch('/movie/top_rated?language=en-US&page=1',setHeroMovie)
      useFetch('/movie/upcoming?language=en-US&page=1',setMovieCards)
    },[])

  return (
    <>
        
    <main id="hero">
            <div className='welcomehero'>
                <div className='welcomehero-text'>
                    <h1>Welcome to MediaMatrix! Your home for Media, from Movies to Anime to even Video games.</h1>
                    <p className="p-1">Search from our wide collection of Movies/TV Shows, Anime, Videos games and add them to your lists.</p>   
                </div>
                <div className='heroposters'>
                  {heroMovie?.map(({id,poster_path}) => (
                    <div key={id}>
                      <img src={`${imgBaseUrl}${poster_path}`} alt="" />  
                    </div>
                  ))}
                </div>
            <div className='btn-container'>
                      <Link style={{textDecoration: 'none'}} to="/premium/search"><button className='btn welcomehero-btn'>Search</button></Link>
            </div> 
            </div>
        </main>
        <div className='moviecardscontainer'>
        <div className="headline">
                <div className='redbar'></div>
                <h1>Movies</h1>
            </div>
        <div className='moviebuttons'>
            <Button onClick={handleNowPlaying} variant='contained' color={firstColorMovie}>Now Playing</Button>
            <Button onClick={handlePopularMovies} variant='contained' color={secondColorMovie}>Popular</Button>
            <Button onClick={handleTopRatedMovies} variant='contained' color={thirdColorMovie}>Top Rated</Button>
        </div>
        <div className="card">
            {movieCards?.map(({id,poster_path,title,release_date,original_title}) => (
                <div className='moviecard' key={id}>
                <Link to={`/premium/description/movie/${id}/${original_title}`}><img src={`${imgBaseUrl}${poster_path}`} alt="" /></Link>
                <Link style={{textDecoration: 'none',color: 'black'}} to={`/premium/description/movie/${id}/${original_title}`}><p className='movietitle'>{title}</p></Link>
                <Link to={`/premium/description/movie/${id}/${original_title}`}  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{release_date}</p></Link>
             </div>
            ))}
        </div>

    </div>
    <div className='moviecardscontainer'>
    <div className="headline">
                <div className='redbar'></div>
                <h1>Tv Shows:</h1>
            </div>
        <div className='moviebuttons'>
            <Button onClick={handleOnTheAir} variant='contained' color={firstColorTv}>On The Air</Button>
            <Button onClick={handlePopularTv} variant='contained' color={secondColorTv}>Popular</Button>
            <Button onClick={handleTopRatedTv} variant='contained' color={thirdColorTv}>Top Rated</Button>
        </div>
        <div className="card">
            {tvCards?.map(({id,poster_path,name,first_air_date,original_name}) => (
                <div className='moviecard' key={id}>
                <Link to={`/premium/description/tv/${id}/${original_name}`}><img src={`${imgBaseUrl}${poster_path}`} alt="" /></Link>
                <Link style={{textDecoration: 'none',color: 'black'}} to={`/premium/description/tv/${id}/${original_name}`}><p className='movietitle'>{name}</p></Link>
                <Link to={`/premium/description/tv/${id}/${original_name}`}  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{first_air_date}</p></Link>
             </div>
            ))}
        </div>

    </div>
    <div className='moviecardscontainer'>
             <div className="headline">
                <div className='redbar'></div>
                <h1>Upcoming in theater:</h1>
            </div>   
        <div className="card">
            {movieCards?.map(({id,poster_path,title,release_date,original_title}) => (
                <div className='moviecard' key={id}>
                <Link to={`/description/movie/${id}/${original_title}`}><img src={`${imgBaseUrl}${poster_path}`} alt="" /></Link>
                <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/movie/${id}/${original_title}`}><p className='movietitle'>{title}</p></Link>
                <Link to={`/description/movie/${id}/${original_title}`}  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{release_date}</p></Link>
             </div>
            ))}
        </div>

    </div>
    </>

    
  )
}

export default Welcomeprem