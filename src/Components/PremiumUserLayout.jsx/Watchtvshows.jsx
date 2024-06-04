import React, { useEffect, useState, forwardRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../Axios/useFetch'
import tmbdClient from '../../Axios/tmdb'
import { Alert, Button, Menu, Snackbar } from '@mui/material'
import { FaAngleDown, FaArrowDown, FaCartArrowDown, FaDropbox, FaList, FaPlay, FaStar, FaTv } from 'react-icons/fa'
import Add from '@mui/icons-material/Add'
import useFetchone from '../../Axios/useFetchone'
import { useStateContext } from '../../Contextapi/contextProvider'
import axiosClient from '../../Axios/axios'
const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  });

const Watchtvshows = () => {
    const {id} = useParams()
    const [tvshow,setTvshow] = useState([])
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
    const Large = 'https://image.tmdb.org/t/p/original'
    const [cast,setCast] = useState([])
    const {setWatchedTvShows,setWatchingtvShows,setWantToWatchTvShows} = useStateContext()
    const [similar,setSimilar] = useState([])
    const [season, setSeason] = useState('');
    const [episodes,setEpisodes] = useState([])
    const [episode,setEpisode] = useState('')
    const [episodeChosen,setEpisodeChosen] = useState(null)
    const [isError,setIsError] = useState(false)
    const [isSnackbarVisible,setIsSnackbarVisible] = useState(false)
    
    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsSnackbarVisible(false);
      };
    
    const addTvShow = async (e, type, tvshowId, posterPath, title, overview) => {
        e.preventDefault();
        try {
          let response;
          if (type === 'watched') {
            response = await axiosClient.post('/watched-tvshows', { tvshowId, title, overview, posterPath });
            setWatchedTvShows(response.data);
          } else if (type === 'watching') {
            response = await axiosClient.post('/watching-tvshows', { tvshowId, title, overview, posterPath });
            setWatchingtvShows(response.data);
          } else if (type === 'wantToWatch') {
            response = await axiosClient.post('/want-to-watch-tvshows', { tvshowId, title, overview, posterPath });
            setWantToWatchTvShows(response.data);
          }
          setIsSnackbarVisible(true);
          setIsError(false);
        } catch (error) {
          console.error(error);
          setIsError(true);
          setIsSnackbarVisible(true);
        }
      };
    const handleChange = (e) => {
      setSeason(e.target.value);
    };
    const handleClick = (e,episodeNumber) => {
      setEpisode(e.target.value);
      setEpisodeChosen(episodeNumber)
    };
    useEffect(()=> {
        useFetchone(`/tv/${id}?language=en-US`,setTvshow)
        const getEpisode = async () => {
            try {
                const response = await tmbdClient.get(`/tv/${id}/season/${season}?language=en-US`)
                setEpisodes(response.data)
            } catch(e) {
                console.error(e)
            }
        }
        if (season !== '') {
            getEpisode();
        }
        const getUrl = async () => {
            try {
                const response = await tmbdClient.get(`/tv/${id}/credits?language=en-US`)
                setCast(response.data.cast)
            } catch(e) {
                console.error(e)
            }
        }
        getUrl()
        const getSimilar = async () => {
            try {
                const response = await tmbdClient.get(`/tv/${id}/similar?language=en-US`)
                setSimilar(response.data.results)
            } catch(e) {
                console.error(e)
            }
        }
        getSimilar()
    },[id,season,episodeChosen,isSnackbarVisible])
    similar.pop()
    similar.pop()
    similar.pop()
    similar.pop()
    similar.pop()
    similar.pop() 
    similar.pop() 
  return (
    <>
         <div className='movieframe'>
                <img className='backdropimage' src={`${Large}/${tvshow.backdrop_path}`} alt="" />
                <h1>{tvshow.original_name}</h1>
                <iframe src={`https://vidsrc.to/embed/tv/${tvshow.id}/${season}/${episode}`} width={1200} height={500} frameBorder="0" allowFullScreen={true}></iframe>
            </div>
            <div style={{backgroundColor: '#020916', padding: '1rem'}}>
                <div className="select">
                    <select className='manual-select' onChange={handleChange} value={season} name="" id="">
                        <option>...</option>
                        {tvshow.seasons?.map((item)=> (
                            <option key={item.id} value={item.season_number}>{item.name}</option>
                        ))}
                    </select>
                </div>
                   <div className='episodebuttons'>
            {episodes.episodes?.map((item, i) => (
                <button
                    key={item.id}
                    onClick={(e) => handleClick(e, item.episode_number)}
                    className={`episodebutton ${episodeChosen === item.episode_number ? 'selected' : ''}`}
                    value={item.episode_number}
                >
                    <FaPlay size={10}/> Ep {item.episode_number}: {item.name}
                </button>
            ))}
        </div>
            </div>
            <div className='watchmoviesflex'>
                <div>
                <Link to={`/premium/description/tv/${tvshow.id}/${tvshow.original_name}` } style={{textDecoration: 'none'}}><img src={`${IMG_BASE_URL}/${tvshow.poster_path}`} alt="" /></Link>
                </div>
                <div className='movieinformation'>
                    <div className='movietitleflex'>
                    <Link to={`/premium/description/tv/${tvshow.id}/${tvshow.original_name}`}><h1>{tvshow.original_name}</h1></Link>
                        <div className='watchbuttons'>
                        <form onSubmit={(e) => addTvShow(e, 'watched', tvshow.id, tvshow.poster_path, tvshow.name, tvshow.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Watched</Button>
              </form>
              <form onSubmit={(e) => addTvShow(e, 'watching', tvshow.id, tvshow.poster_path, tvshow.name, tvshow.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Watching</Button>
              </form>
              <form onSubmit={(e) => addTvShow(e, 'wantToWatch', tvshow.id, tvshow.poster_path, tvshow.name, tvshow.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Want To Watch</Button>
              </form>
                        </div>
                    </div>
                    <div className='runtimeflex'>
                        <div className='voteflex'>
                            <FaStar/>
                            {tvshow.vote_average}
                        </div>
                        {`${tvshow.seasons?.length} seasons`}
                    </div>
                    <p style={{fontWeight: 'bold'}}>{tvshow.overview}</p>
                    <div className='moviedetails'>
                        <div className='details'>
                            <p>Country:</p>
                            <p>{tvshow.production_countries?.map((item)=> (`${item.name}, `))}</p>
                        </div>
                        <div className='details'>
                            <p>Genre:</p>
                            <p>{tvshow.genres?.map((item)=> (`${item.name}, `))}</p>
                        </div>
                        <div className='details'>
                            <p>Released:</p>
                            <p>{tvshow.release_date}</p>
                        </div>
                        <div className='details'>
                            <p>Production:</p> 
                            <p>{tvshow.production_companies?.map((item)=> (`${item.name}, `))}</p>
                        </div>
                        <div className='details'>
                            <p>Casts:</p>
                            <p>{cast[0]?.name}</p>
                            <p>{cast[1]?.name}</p>
                            <p>{cast[2]?.name}</p>
                            <p>{cast[3]?.name}</p>
                            <p>{cast[4]?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className='umayalsolike'>
                    <h1>You May Also Like : </h1>
                    <div className='similarflex'>

                    {similar?.map((item)=> (
                        <div className='similarmovies'>
                            <Link to={`/watch/tvshows/${item.id}`}><img src={`${IMG_BASE_URL}${item.poster_path}`} alt="" /></Link>
                            <Link to={`/watch/tvshows/${item.id} `} style={{textDecoration: 'none'}}><h3>{item.original_name}</h3></Link>
                            <Link to={`/watch/tvshows/${item.id}`} style={{textDecoration: 'none', color:'white', fontWeight: '400z'}}> <p>{item.release_date}</p>  </Link>  
                        </div>

                    ))}
                    </div>
                </div>
                <Snackbar 
        open={isSnackbarVisible} 
        autoHideDuration={6000} 
        onClose={closeSnackbar} 
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}>
        <SnackbarAlert onClose={closeSnackbar} severity={isError ? 'error' : 'success'}>
          {isError ? `"${tvshow.name}" is already in the list!` : `"${tvshow.name}" has been added successfully!`}
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}

export default Watchtvshows