import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import List from "@mui/icons-material/List"
import Dashboard from "@mui/icons-material/Dashboard"
import Movie from "@mui/icons-material/MovieFilter"
import Tv from "@mui/icons-material/Tv"
import { ButtonGroup} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/Add'
import { useStateContext } from '../../Contextapi/contextProvider'
import axiosClient from '../../Axios/axios'
import Empty from '@mui/icons-material/HourglassEmpty'
import { forwardRef } from 'react'
import {Snackbar, Alert} from '@mui/material'
import { Link } from 'react-router-dom'
const SnackbarAlert = forwardRef(
  function SnackbarAlert(props,ref) {
      return <Alert elevation={6} ref={ref} {...props} />
  }
)
const Profile = () => {
  const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
  const {watchedMovies,setWatchedMovies} = useStateContext()
  const {watchingMovies,setWatchingMovies} = useStateContext()
  const {wantToWatchMovies,setWantToWatchMovies} = useStateContext()
  const {watchedTvShows, setWatchedTvShows} = useStateContext()
  const {watchingTvShows,setWatchingTvShows} = useStateContext()
  const {wantToWatchTvShows,setWantToWatchTvShows} = useStateContext()
  const [dashboard, setDashboard] = useState(true)
  const [movieList,setMovieList] = useState(false)
  const [tvShowsList,setTvShowsList] = useState(false)
  const totalWatchedMovies = watchedMovies.length
  const totalWatchingMovies = watchingMovies.length
  const totalWantToWatchMovies = wantToWatchMovies.length
  const totalWatchedTvShows = watchedTvShows.length
  const totalWatchingTvShows = watchingTvShows.length
  const totalWantToWatchTvShows = wantToWatchTvShows.length
  const [tvShowsWatched,setTvShowsWatched] = useState(true)
  const [tvShowsWatching,setTvShowsWatching] = useState(false)
  const [moviesWatched, setMoviesWatched] = useState(true)
  const [moviesWatching,setMoviesWatching] = useState(false)
  const totalMovies = totalWantToWatchMovies + totalWatchedMovies + totalWatchingMovies
  const totalTvShows = totalWantToWatchTvShows + totalWatchedTvShows + totalWatchingTvShows
  const [isError,setIsError] = useState(false)
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarVisible(false)
    }
  const deleteWatchedMovie = async (id) => {
    try {
      await axiosClient.delete(`/watched-movies/${id}`);
      console.log('Movie deleted successfully!');
      setWatchedMovies(prevMovie => prevMovie.filter((movie) => movie.movieId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchingMovie = async (id) => {
    try {
      await axiosClient.delete(`/watching-movies/${id}`);
      console.log('Movie deleted successfully!');
      setWatchingMovies(prevMovie => prevMovie.filter((movie) => movie.movieId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWantToWatchMovie = async (id) => {
    try {
      await axiosClient.delete(`/want-to-watch-movies/${id}`);
      console.log('Movie deleted successfully!');
      setWantToWatchMovies(prevMovie => prevMovie.filter((movie) => movie.movieId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchedTvShow = async (id) => {
    try {
      await axiosClient.delete(`/watched-tvshows/${id}`);
      console.log('Movie deleted successfully!');
      setWatchedTvShows(prevTvShow => prevTvShow.filter((tvshow) => tvshow.tvshowId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchingTvShow = async (id) => {
    try {
      await axiosClient.delete(`/watching-tvshows/${id}`);
      console.log('Movie deleted successfully!');
      setWatchingTvShows(prevTvShow => prevTvShow.filter((tvshow) => tvshow.tvshowId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWantToWatchTvShow = async (id) => {
    try {
      await axiosClient.delete(`/want-to-watch-tvshows/${id}`);
      console.log('Movie deleted successfully!');
      setWantToWatchTvShows(prevTvShow => prevTvShow.filter((tvshow) => tvshow.tvshowId !== id))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  useEffect(() => {
    const getWatchedTvShow = async () => {
      try {
        const response = await axiosClient.get('/watched-tvshows')
        setWatchedTvShows(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchedTvShow()
  },[])
  useEffect(() => {
    const getWatchingTvShow = async () => {
      try {
        const response = await axiosClient.get('/watching-tvshows')
        setWatchingTvShows(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchingTvShow()
  },[])
  useEffect(() => {
    const getWantToWatchTvShow = async () => {
      try {
        const response = await axiosClient.get('/want-to-watch-tvshows')
        setWantToWatchTvShows(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWantToWatchTvShow()
  },[])
  useEffect(() => {
    const getWantToWatchMovie = async () => {
      try {
        const response = await axiosClient.get('/want-to-watch-movies')
        setWantToWatchMovies(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWantToWatchMovie()
  },[])
  useEffect(() => {
    const getWatchingMovie = async () => {
      try {
        const response = await axiosClient.get('/watching-movies')
        setWatchingMovies(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchingMovie()
  },[])
  useEffect(() => {
    const getWatchedMovie = async () => {
      try {
        const response = await axiosClient.get('/watched-movies')
        setWatchedMovies(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchedMovie()
  },[])
  const handleDashboard = () => {
    setDashboard(true)
    setMovieList(false)
    setTvShowsList(false)
  }
  const handleMovieList = () => {
    setDashboard(false)
    setMovieList(true)
    setTvShowsList(false)
    setTvShowsWatched(true)
  }
  const handleTvShowsList = () => {
    setDashboard(false)
    setMovieList(false)
    setTvShowsList(true)
    setMoviesWatched(true)
  }
  const showWatched = () => {
    setTvShowsWatched(true)
    setTvShowsWatching(false)
  }
  const showWatching = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(true)
  }
  const showWantToWatch = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(false)
  }
  const displayWatched = () => {
    setMoviesWatched(true)
    setMoviesWatching(false)
  }
  const displayWatching = () => {
    setMoviesWatched(false)
    setMoviesWatching(true)
  }
  const displayWantToWatch = () => {
    setMoviesWatched(false)
    setMoviesWatching(false)
  }
  if (isLoading) {
    return <div></div>
  }
  if (dashboard) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button variant='contained' onClick={handleDashboard} style={{backgroundColor:'#BE3144'}} startIcon={<Dashboard />}>Dashboard</Button>
              <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movie Lists</Button>
              <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="dashboard">
            <h1 className='title'>Dashboard</h1>
            <div className="moviestvshows">
              <div className="moviesdashboard">
                <List  className='list'  />
                <div className="totals">
                  <h1>Total Movies</h1>
                  <p>{totalMovies}</p>
                </div>
              </div>
              <div className="tvshowsdashboard">
                <List className='list2'/>
                <div className="totals">
                  <h1>Total TvShows</h1>
                  <p>{totalTvShows}</p>
                </div>
              </div>
            </div>
            <h1 className='title'>Movies:</h1>
            <div className="wlists">
              <div className="watchedlist">
                <Movie className='list' />
                <div className="totals">
                  <h1>Total Watched</h1>
                  <p>{totalWatchedMovies}</p>
                </div>
              </div>
              <div className="watchinglist">
                <Movie className='list2' />
                <div className="totals">
                  <h1>Total Watching</h1>
                  <p>{totalWatchingMovies}</p>
                </div>
              </div>
              <div className="wanttowatchlist">
                <Movie className='list3' />
                <div className="totals">
                  <h1>Total WtW</h1>
                  <p>{totalWantToWatchMovies}</p>
                </div>
              </div>
            </div>
            <h1 className='title'>Tv Shows:</h1>
            <div className="wlists">
              <div className="watchedlist">
                <Tv className='list' />
                <div className="totals">
                  <h1>Total Watched</h1>
                  <p>{totalWatchedTvShows}</p>
                </div>
              </div>
              <div className="watchinglist">
                <Tv className='list2' />
                <div className="totals">
                  <h1>Total Watching</h1>
                  <p>{totalWatchingTvShows}</p>
                </div>
              </div>
              <div className="wanttowatchlist">
                <Tv className='list3' />
                <div className="totals">
                  <h1>Total WtW</h1>
                  <p>{totalWantToWatchTvShows}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }
  if (movieList) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button onClick={handleDashboard} color="secondary" startIcon={<Dashboard />}>Dashboard</Button>
              <Button variant='contained' onClick={handleMovieList} style={{backgroundColor:'#BE3144'}} startIcon={<List />}>Movie Lists</Button>
              <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="movieslist">
            <h1 className='titles'>Movie Lists:</h1>
            {moviesWatched ? 
              <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={displayWatched} variant='contained' style={{width: '100%', backgroundColor:'#BE3144'}}>Watched</Button>
              <Button onClick={displayWatching} style={{width: '100%'}}>Watching</Button>
              <Button onClick={displayWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
                <Link to="/search"><Button style={{width:'100%',margin:'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />} >Add Movie</Button></Link> 
              </div>
              <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
              {watchedMovies.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              ):
                (
                  watchedMovies?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.overview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={() => deleteWatchedMovie(item.movieId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }            
            </div>
               : moviesWatching ?
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
              <Button onClick={displayWatching} variant='contained' style={{width: '100%',backgroundColor:'#BE3144'}}>Watching</Button>
              <Button onClick={displayWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
               <Link to="/search"><Button style={{width: '100%',margin:'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />}>Add Movie</Button></Link>
              </div>
               <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
               {watchingMovies.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              )
               :
                (
                  watchingMovies?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.watchingtitle}</p>
                      <p>{item.watchingoverview}</p>
                      <div className="actions">
                        <Button  color='secondary' onClick={() => deleteWatchingMovie(item.movieId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }      
               </div>
               : 
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                  <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
                  <Button onClick={displayWatching} style={{width: '100%'}}>Watching</Button>
                  <Button onClick={displayWantToWatch} variant='contained' style={{width: '100%',backgroundColor:'#BE3144'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
               <Link to="/search"><Button style={{width: '100%',margin:'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />}>Add Movie</Button></Link>
              </div>
              <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
              {wantToWatchMovies.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              ) 
              :
                (
                  wantToWatchMovies?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.wanttowatchtitle}</p>
                      <p>{item.wanttowatchoverview}</p>
                      <div className="actions">
                        <Button  color='secondary' onClick={()=>deleteWantToWatchMovie(item.movieId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }      
              </div>
              }
          </div>
      </div>
       <Snackbar open={isSnackbarVisible} 
                 autoHideDuration={4000} 
                 onClose={closeSnackbar} 
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                 }}>
          <SnackbarAlert onClose={closeSnackbar} severity='success'>
              Movie Deleted Successfully!
          </SnackbarAlert>
      </Snackbar>
      </>
    )
  }
  if (tvShowsList) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button onClick={handleDashboard} color="secondary" startIcon={<Dashboard />}>Dashboard</Button>
              <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movie Lists</Button>
              <Button variant='contained' onClick={handleTvShowsList} style={{backgroundColor:'#BE3144'}} startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="movieslist">
            <h1 className='titles'>TvShows Lists:</h1>
              {tvShowsWatched ? 
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                <Button onClick={showWatched} variant='contained' style={{width: '100%',backgroundColor:'#BE3144'}}>Watched</Button>
                <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
                <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
                </ButtonGroup> 
                <div className='addmovie'>
                  <Link to="/premium/search"><Button style={{width :'100%',margin: 'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></Link>
                </div>
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div> 
                {watchedTvShows.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              ):
                (
                  watchedTvShows?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.overview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=> deleteWatchedTvShow(item.tvshowId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div>
              : tvShowsWatching ?
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
                <Button onClick={showWatching} variant='contained' style={{width: '100%',backgroundColor:'#BE3144'}}>Watching</Button>
                <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
                </ButtonGroup> 
                <div className='addmovie'>
                  <Link to="/premium/search"><Button style={{width :'100%',margin: 'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></Link>
                </div> 
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div>
                {watchingTvShows.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              ):
                (
                  watchingTvShows?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.overview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=>deleteWatchingTvShow(item.tvshowId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div> 
              :
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                    <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
                    <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
                    <Button onClick={showWantToWatch} variant='contained' style={{width: '100%',backgroundColor:'#BE3144'}}>Want to Watch</Button>
                </ButtonGroup>
                <div className='addmovie'>
                  <Link to="/premium/search"><Button style={{width :'100%',margin: 'auto',backgroundColor:'#BE3144'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></Link>
                </div>
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div>
                {wantToWatchTvShows.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem',color:'white'}} />
                </div>
              ):
                (
                  wantToWatchTvShows?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.posterPath}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.overview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=>deleteWantToWatchTvShow(item.tvshowId)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div>
              }
          </div>
      </div>
      <Snackbar open={isSnackbarVisible} 
                 autoHideDuration={4000} 
                 onClose={closeSnackbar} 
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                 }}>
          <SnackbarAlert onClose={closeSnackbar} severity='success'>
              TvShow Deleted Successfully!
          </SnackbarAlert>
      </Snackbar>
      </>
    )
  }
}

export default Profile