import React from 'react'
import {Link} from 'react-router-dom'
const WelcomeHero = ({heroMovie}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original'
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
                      <Link style={{textDecoration: 'none'}} to="/search"><button className='btn welcomehero-btn'>Search</button></Link>
            </div> 
            </div>
        </main>
    </>
  )
}

export default WelcomeHero