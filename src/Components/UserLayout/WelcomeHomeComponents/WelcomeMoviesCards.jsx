import React, {useState, useEffect} from 'react'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import useFetch from '../../../Axios/useFetch'
const WelcomeMoviesCards = () => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [isNowPlaying,setIsNowPlaying] = useState(true)
    const [isPopular,setIsPopular] = useState(false)
    const [isTopRated,setIsTopRated] = useState(false)
    const [movieCards,setMovieCards] = useState([])
    const [url,setUrl] = useState('/movie/now_playing?language=en-US&page=1')
    const firstColor = isNowPlaying ? 'primary' : 'secondary'
    const secondColor = isPopular ? 'primary' : 'secondary'
    const thirdColor = isTopRated ? 'primary' : 'secondary'
   
    useEffect(()=> {
        useFetch(url,setMovieCards)
    },[url])
    const handleNowPlaying = () => {
        setIsNowPlaying(true)
        setIsPopular(false)
        setIsTopRated(false)
        setUrl('/movie/now_playing?language=en-US&page=1')
    }
    const handlePopular = () => {
        setIsNowPlaying(false)
        setIsPopular(true)
        setIsTopRated(false)
        setUrl('/movie/popular?language=en-US&page=1')
    }
    const handleTopRated = () => {
        setIsNowPlaying(false)
        setIsPopular(false)
        setIsTopRated(true)
        setUrl('/movie/top_rated?language=en-US&page=1')
    }
   return (
    <>
    <div className='moviecardscontainer'>
            <div className="headline">
                <div className='redbar'></div>
                <h1>Movies</h1>
            </div>
        <div className='moviebuttons'>
            <Button onClick={handleNowPlaying} variant='contained' color={firstColor}>Now Playing</Button>
            <Button onClick={handlePopular} variant='contained' color={secondColor}>Popular</Button>
            <Button onClick={handleTopRated} variant='contained' color={thirdColor}>Top Rated</Button>
        </div>
        <div className="card">
            {movieCards?.map(({id,poster_path,title,release_date,original_title}) => (
                <div className='moviecard' key={id}>
                <Link to={`/description/movie/${id}/${original_title}`}><img src={`${posterBaseUrl}${poster_path}`} alt="" /></Link>
                <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/movie/${id}/${original_title}`}><p className='movietitle'>{title}</p></Link>
                <Link to={`/description/movie/${id}/${original_title}`}  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{release_date}</p></Link>
             </div>
            ))}
        </div>

    </div>
    </>
  )
}

export default WelcomeMoviesCards