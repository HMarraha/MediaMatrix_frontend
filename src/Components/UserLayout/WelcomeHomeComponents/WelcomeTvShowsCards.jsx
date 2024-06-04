import React, {useState, useEffect} from 'react'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import useFetch from '../../../Axios/useFetch'
const WelcomeTvShowsCards = () => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [isOnTheAir,setIsOnTheAir] = useState(true)
    const [isPopular,setIsPopular] = useState(false)
    const [isTopRated,setIsTopRated] = useState(false)
    const [tvCards,setTvCards] = useState([])
    const [url,setUrl] = useState('/tv/on_the_air?language=en-US&page=1')
    const firstColor = isOnTheAir ? 'primary' : 'secondary'
    const secondColor = isPopular ? 'primary' : 'secondary'
    const thirdColor = isTopRated ? 'primary' : 'secondary'
    useEffect(()=> {
        useFetch(url,setTvCards)
    },[url])
    const handleOnTheAir = () => {
        setIsOnTheAir(true)
        setIsPopular(false)
        setIsTopRated(false)
        setUrl('/tv/on_the_air?language=en-US&page=1')
    }
    const handlePopular = () => {
        setIsOnTheAir(false)
        setIsPopular(true)
        setIsTopRated(false)
        setUrl('/tv/popular?language=en-US&page=1')
    }
    const handleTopRated = () => {
        setIsOnTheAir(false)
        setIsPopular(false)
        setIsTopRated(true)
        setUrl('/tv/top_rated?language=en-US&page=1')
    }
   return (
    <>
    <div className='moviecardscontainer'>
            <div className="headline">
                <div className='redbar'></div>
                <h1>Tv Shows:</h1>
            </div>
        <div className='moviebuttons'>
            <Button onClick={handleOnTheAir} variant='contained' color={firstColor}>On The Air</Button>
            <Button onClick={handlePopular} variant='contained' color={secondColor}>Popular</Button>
            <Button onClick={handleTopRated} variant='contained' color={thirdColor}>Top Rated</Button>
        </div>
        <div className="card">
            {tvCards?.map(({id,poster_path,name,first_air_date,original_name}) => (
                <div className='moviecard' key={id}>
                <Link to={`/description/tv/${id}/${original_name}`}><img src={`${posterBaseUrl}${poster_path}`} alt="" /></Link>
                <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/tv/${id}/${original_name}`}><p className='movietitle'>{name}</p></Link>
                <Link to={`/description/tv/${id}/${original_name}`}  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{first_air_date}</p></Link>
             </div>
            ))}
        </div>

    </div>
    </>
  )
}

export default WelcomeTvShowsCards