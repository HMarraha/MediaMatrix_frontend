import React, { useEffect, useState, forwardRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../Axios/useFetch'
import tmbdClient from '../../Axios/tmdb'
import { Button, Snackbar, Alert } from '@mui/material'
import { FaStar, FaTv } from 'react-icons/fa'
import Add from '@mui/icons-material/Add'
import useFetchone from '../../Axios/useFetchone'
import { useStateContext } from '../../Contextapi/contextProvider'
import axiosClient from '../../Axios/axios'

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  });

const Watchmovies = () => {
    const {id} = useParams()
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
    const Large = 'https://image.tmdb.org/t/p/original'
    const [movie,setMovie] = useState([])
    const [cast,setCast] = useState([])
    const [similar,setSimilar] = useState([])
    const {setWatchedMovies,setWatchingMovies,setWantToWatchMovies} = useStateContext()
    const [isSnackbarVisible,setIsSnackbarVisible] = useState(false)
    const [isError,setIsError] = useState(false)
    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsSnackbarVisible(false);
      };
    const addMovie = async (e, type, movieId, posterPath, title, overview) => {
        e.preventDefault();
        try {
          let response;
          if (type === 'watched') {
            response = await axiosClient.post('/watched-movies', { movieId, title, overview, posterPath });
            setWatchedMovies(response.data);
          } else if (type === 'watching') {
            response = await axiosClient.post('/watching-movies', { movieId, title, overview, posterPath });
            setWatchingMovies(response.data);
          } else if (type === 'wantToWatch') {
            response = await axiosClient.post('/want-to-watch-movies', { movieId, title, overview, posterPath });
            setWantToWatchMovies(response.data);
          }
          setIsSnackbarVisible(true);
          setIsError(false);
        } catch (error) {
          console.error(error);
          setIsError(true);
          setIsSnackbarVisible(true);
        }
      };
    
      const fetchMovieDetails = async () => {
        useFetchone(`/movie/${id}?language=en-US`, setMovie)
      };
    
      const fetchCastDetails = async () => {
        try {
          const response = await tmbdClient.get(`/movie/${id}/credits?language=en-US`);
          setCast(response.data.cast);
        } catch (e) {
          console.error(e);
        }
      };
    
      const fetchSimilarMovies = async () => {
        try {
          const response = await tmbdClient.get(`/movie/${id}/similar?language=en-US`);
          setSimilar(response.data.results.slice(0, 6));
        } catch (e) {
          console.error(e);
        }
      };
    
      useEffect(() => {
        fetchMovieDetails();
        fetchCastDetails();
        fetchSimilarMovies();
      }, [id, isSnackbarVisible]);
  return (
    <>     
            <div className='movieframe'>
                <img className='backdropimage' src={`${Large}/${movie.backdrop_path}`} alt="" />
                <h1>{movie.original_title}</h1>
                <iframe src={`https://vidsrc.to/embed/movie/${movie.id}?start=123`} width={1200} height={500} frameBorder="0" allowFullScreen='true'></iframe>
            </div>
            <div className='watchmoviesflex'>
                <div>
                    <Link to={`/premium/description/movie/${movie.id}/${movie.original_title}`}><img src={`${IMG_BASE_URL}/${movie.poster_path}`} alt="" /></Link>
                </div>
                <div className='movieinformation'>
                    <div className='movietitleflex'>
                    <Link style={{textDecoration: 'none'}} to={`/premium/description/movie/${movie.id}/${movie.original_title}`}><h1>{movie.original_title}</h1></Link>
                        <div className='watchbuttons'>
                        <form onSubmit={(e) => addMovie(e, 'watched', movie.id, movie.poster_path, movie.title, movie.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Watched</Button>
              </form>
              <form onSubmit={(e) => addMovie(e, 'watching', movie.id, movie.poster_path, movie.title, movie.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Watching</Button>
              </form>
              <form onSubmit={(e) => addMovie(e, 'wantToWatch', movie.id, movie.poster_path, movie.title, movie.overview)}>
                <Button type='submit' className='watch' startIcon={<Add />} variant='contained' size='small' style={{backgroundColor:'#BE3144'}}>Want To Watch</Button>
              </form>
                        </div>
                    </div>
                    <div className='runtimeflex'>
                        <div className='voteflex'>
                            <FaStar/>
                            {movie.vote_average}
                        </div>
                        {`${movie.runtime}min`}
                    </div>
                    <p style={{fontWeight: 'bold'}}>{movie.overview}</p>
                    <div className='moviedetails'>
                        <div className='details'>
                            <p>Country:</p>
                            <p>{movie.production_countries?.map((item)=> (`${item.name}, `))}</p>
                        </div>
                        <div className='details'>
                            <p>Genre:</p>
                            <p>{movie.genres?.map((item)=> (`${item.name}, `))}</p>
                        </div>
                        <div className='details'>
                            <p>Released:</p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className='details'>
                            <p>Production:</p> 
                            <p>{movie.production_companies?.map((item)=> (`${item.name}, `))}</p>
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
                        <div key={item.id} className='similarmovies'>
                            <Link to={`/watch/movies/${item.id}`}><img src={`${IMG_BASE_URL}${item.poster_path}`} alt="" /></Link>
                            <Link to={`/watch/movies/${item.id} `} style={{textDecoration: 'none'}}><h3>{item.original_title}</h3></Link>
                            <Link to={`/watch/movies/${item.id}`} style={{textDecoration: 'none', color:'white', fontWeight: '400z'}}> <p>{item.release_date}</p>  </Link>  
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
          {isError ? `"${movie.title}" is already in the list!` : `"${movie.title}" has been added successfully!`}
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}

export default Watchmovies