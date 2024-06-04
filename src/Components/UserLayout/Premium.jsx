import React from 'react'
import prem from '../../assets/prem.jpg'
import { FaTv } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import netflix from '../../assets/netflix.png'
import hulu from '../../assets/hulu.png'
import disneyp from '../../assets/disneyp.png'
import appletv from '../../assets/appletv.png'
import hbo from '../../assets/hbo.png'
import prime from '../../assets/prime.png'
const Premium = () => {
    const streaminglogos = [
        {
            id: 1,
            url: netflix
        },
        {
            id: 2,
            url: hulu
        },
        {
            id: 3,
            url: appletv
        },
        {
            id: 4,
            url: hbo
        },
        {
            id: 5,
            url: disneyp
        },
        {
            id: 6,
            url: prime
        }
    ]
  return (
    <>
        <div className="premimgcontainer">
            <img className='premimg' src={prem} alt="" />
            <div className="premimgtxt">
                <h1>Welcome to Premium!</h1>
                <p>A world where you can do whatever you want with movies and tv shows.</p>
                <a href='#prices'><button>Join Now!</button></a>
            </div>
        </div>
        <div className="benefits">
            <h1>Why choose Premium?</h1>
            <div className='benefitsflex'>
                <div className="benefit">
                    <FaTv size={50} color='#BE3144'/>
                    <p>Watch unlimited movies and tv shows, with fhd quality and many different subtitles.</p>
                </div>
                <div className="benefit" >
                    <FaSearch size={45} color='#BE3144' />
                    <p>SuperSearch! you can search for a movie or tv show only using description or using a word that was used in them!</p>
                </div>
            </div>
            <div className="streaminglogos">
                {streaminglogos.map((item) => (
                    <img width={200} key={item.id} src={item.url}/>
                ))}
            </div>
        </div>
        <h1 id='prices' className='plans'>Plans :</h1>
        <div className="prices">
            <div className="pricing">
                <h2>3 month</h2>
                <h1>10.99$</h1>
                <p>(+1 month free)</p>
                <ul>
                    <li>HD/2K/4K</li>
                    <li>+100000 Movies</li>
                    <li>+50000 Tvshows</li>
                </ul>
                <button>Buy now</button>
                <p>Ready within 5-7mins</p>
            </div>
            <div className="pricing">
                <h2>6 month</h2>
                <h1>20.99$</h1>
                <p>(+1 month free)</p>
                <ul>
                    <li>HD/2K/4K</li>
                    <li>+100000 Movies</li>
                    <li>+50000 Tvshows</li>
                </ul>
                <button>Buy now</button>
                <p>Ready within 5-7mins</p>
            </div>
            <div className="pricing">
                <h2>12 month</h2>
                <h1>30.99$</h1>
                <p>(+1 month free)</p>
                <ul>
                    <li>HD/2K/4K</li>
                    <li>+100000 Movies</li>
                    <li>+50000 Tvshows</li>
                </ul>
                <button>Buy now</button>
                <p>Ready within 5-7mins</p>
            </div>
        </div>
    </>
  )
}

export default Premium