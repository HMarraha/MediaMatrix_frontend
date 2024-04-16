import React from 'react'
import backgroundimage from '../../../assets/images.webp'
import {Link} from 'react-router-dom'
const Join = () => {
  return (
    <>  
        <div className='join'>
            <img className='backgroundimg' src={backgroundimage} alt="" />
            <h1>Join Today</h1>
            <div className='joinflex'>
                <div>
                    <p>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next--- regardless if it's in theatres,on Tv or available on popular streaming services like Netflix, Amazon Prime, Hulu...</p>
                    <Link to='/signup'><button>Sign up</button></Link>
                </div>
                <div>
                    <ul>
                        <li><p>Maintain a personal watchlist</p></li>
                        <li><p>filter by your subscribed streaming services and find something to watch.</p></li>
                        <li><p>Build custom lists.</p></li>
                        <li><p>Contribute to improve our database.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join