import React from 'react'
import {Link} from 'react-router-dom'
const Upcoming = ({upcomingMovies}) => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <>
        <div className="latestcontainer upcoming">

            <div className="headline">
                <div className='redbar'></div>
                <h1>Upcoming in theatres</h1>
            </div>
            <div className='cards'>
                {upcomingMovies.map(({id,poster_path,title,release_date}) => (
                        <div className='moviecards' key={id}>
                           <Link to='/login'><img src={`${posterBaseUrl}${poster_path}`} alt="" /></Link>
                           <Link style={{textDecoration: 'none',color: 'black'}} to='/login'><p className='movietitle'>{title}</p></Link>
                           <Link to='/login'  style={{textDecoration: 'none', color: 'black'}}><p className='release'>{release_date}</p></Link>
                        </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Upcoming