import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../../../Axios/useFetch'
const WelcomeUpcoming = () => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [movieCards,setMovieCards] = useState([])
    
    useEffect(()=> {
        useFetch('/movie/upcoming?language=en-US&page=1',setMovieCards)
    },[])

    
   return (
    <>
    <div className='moviecardscontainer'>
        <h1>Upcoming :</h1>    
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

export default WelcomeUpcoming