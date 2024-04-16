import React from 'react'
import { Link } from 'react-router-dom'

const Latest = ({nowPlayingMovies,nowPlayingTvSeries}) => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <>
        <div className="latestcontainer">
            <div className="headline">
                <div className='redbar'></div>
                <h1>Now Playing: Movies</h1>
            </div>
            <div className='cards'>
                {nowPlayingMovies.map(({id,poster_path,title,release_date}) => (
                        <div className='moviecards' key={id}>
                           <Link to='/login'><img src={`${posterBaseUrl}${poster_path}`} alt="" /></Link>
                           <Link style={{textDecoration: 'none',color: 'black'}} to='/login'><p className='movietitle'>{title}</p></Link>
                           <Link to='/login'  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{release_date}</p></Link>
                        </div>
                ))}
            </div>
            <div className="headline">
                <div className='redbar'></div>
                <h1>On Air: Tv Series</h1>
            </div>
            <div className='cards'>
                {nowPlayingTvSeries.map(({id,poster_path,name,first_air_date}) => (
                        <div className='moviecards' key={id}>
                           <Link to='/login'><img src={`${posterBaseUrl}${poster_path}`} alt="" /></Link>
                           <Link style={{textDecoration: 'none',color: 'black'}} to='/login'><p className='movietitle'>{name}</p></Link>
                           <Link to='/login'  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{first_air_date}</p></Link>
                        </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Latest