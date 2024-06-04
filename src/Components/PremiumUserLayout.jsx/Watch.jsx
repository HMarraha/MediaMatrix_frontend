import React from 'react'
import stock from '../../assets/stock.png'

import PremiumSearch from './PremiumSearch'
const Watch = () => {
  return (
    <>
      <div className="watchcontainer">
        <img className='stockimage' src={stock}  alt="" />  
        <h1>Immserse yourself in the world of movies and tvshows with our wide collection!</h1>
        <p>Choose What you want to watch?</p>
        <div className="watchbuttons">
           <button>Watch Movies</button>
           <button>Watch TvShows</button>
        </div>
      </div>
      <PremiumSearch/>
    </>
  )
}

export default Watch