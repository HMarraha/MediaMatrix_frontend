import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <main id="hero">
            <div className='welcomehero'>
                <div className='welcomehero-text'>
                    <h1>Welcome to MediaMatrix! Your home for Media, from Movies to Anime to even Video games.</h1>
                    <p className="p-1">Search from our wide collection of Movies/TV Shows, Anime, Videos games and add them to your lists.</p>
                    <div className='btn-container'>
                      <Link style={{textDecoration: 'none'}} to="/search"><button className='btn welcomehero-btn'>Search</button></Link>
                    </div>    
                </div>
            </div>
        </main>
    </>
  )
}

export default Hero