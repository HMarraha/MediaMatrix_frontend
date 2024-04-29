import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import Add from "@mui/icons-material/Add"
import nopfp from "../../assets/noimage.webp"
import noimage from "../../assets/noimage.webp"
import Star from "@mui/icons-material/Star"
import {Snackbar, Alert } from '@mui/material'
import { forwardRef } from 'react'
import Link from '@mui/icons-material/Link'
const SnackbarAlert = forwardRef(
    function SnackbarAlert(props,ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)
const Tvshowsdescription = ({seasons,last_episode_to_air,last_air_date,reviews,revenue,budget,status,media,cast,IMG_BASE_URL,Large,backdrop_path,episode_run_time,first_air_date,genres,number_of_episodes,number_of_seasons,original_name,original_language,vote_average,poster_path,overview,homepage}) => {
  const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200' 
  const [isError,setIsError] = useState(false)
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarVisible(false)
  }
 
  return (
      <>
        <div className="movie-description">
          <img className='backdropimage' src={`${Large}${backdrop_path}`} alt="" />
            <div className="description-container">
              <img src={`${IMG_BASE_URL}${poster_path}`} alt="" />
              <div>
                <div className="movietitle">
                  <h1>{original_name}</h1>
                  <p>({episode_run_time}min)</p>
                </div>
                <h1 className='vote'>{vote_average}/10</h1>
                <div className='genres'>
                  <p>{first_air_date} ({original_language})</p>
                  {genres?.map(genre => <span key={genre.id}>{genre.name}</span>)}
                </div>
                <div className="seasons">
                  <p>({number_of_seasons}) seasons</p>
                  <p>({number_of_episodes}) episodes</p>
                </div>
                <div className="summary">
                  <p>Summary:</p>
                  <p>{overview}</p>
                </div>
                <div className="list">
                 <p>Add to a List:</p>
                </div>
                <div className="buttons">
                  <form onSubmit={(e) => addWatchedTvShow(e,poster_path,original_name,overview)}>
                    <Button type='submit' className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWatched</Button>
                  </form>
                  <form onSubmit={(e) => addWatchingTvShow(e,poster_path,original_name,overview)}>
                    <Button type='submit' className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWatching</Button> 
                  </form>
                  <form onSubmit={(e) => addWantToWatchTvShow(e,poster_path,original_name,overview)}>
                    <Button type='submit' className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWant To Watch</Button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        <div className="movie-credits">
            <a href={homepage}><Link sx={{fontSize: '5rem'}} /></a>
            <h1>Cast:</h1>
            <div className="cast-container">
              <div className="cast">
                {cast?.map(item => item.profile_path ?
                  <div key={item.id} className='actor'>
                    <img src={`${IMG_BASE_URL_SMALL}${item.profile_path}`} alt="" />
                    <p>{item.name}</p>
                  </div> :
                  <div key={item.id} className='actor'>
                  <img className='nopfp' src={nopfp} alt="" />
                  <p>{item.name}</p>
                </div>
                )}
              </div>
            </div>
            <div className="media">
              <h1>Last Episode to Air:</h1>
              <div className="lastepisodetoair">
                {last_episode_to_air.still_path ? 
                <img className='lastepisodetoairimg' src={`${IMG_BASE_URL}${last_episode_to_air.still_path}`} alt="" /> :
                <img className='noimage' src={noimage} alt="" />
                }    
                <div className="lastepisodetoairinfo">
                  <div className="letainfo">
                    <div>
                      <p><span>{last_episode_to_air.episode_number}.</span> <span>{last_episode_to_air.name}</span> <span className='letaseason'>(Season {last_episode_to_air.season_number})</span></p>
                    </div>
                    <div className='letaruntime'>
                      <p>{last_episode_to_air.air_date}</p>
                      <p>({last_episode_to_air.runtime}m)</p>
                    </div>
                  </div>
                  <p className='letaoverview'>{last_episode_to_air.overview}</p>
                </div>
              </div>
            </div>
            <div className="seasonsdesc">
              <h1>Available Seasons:</h1>
              {seasons?.map(season => (
                <div key={season.id} className="seasondesc">       
                    {season.poster_path ?
                    <img className='seasonimg' src={`${IMG_BASE_URL}${season.poster_path}`} alt="" /> :
                    <img className='noimage' src={noimage} alt="" />
                    }
                    <div className="seasoninfo">
                      <p><span className='seasonname'>{season.name}</span> {season.air_date && <span className='seasonyear'>({season.air_date.slice(0,4)}) </span>} 
                       | <span className='seasonepisodes'>{season.episode_count} Episodes</span></p>
                      <p className='seasonpremiere'>Season {season.season_number} of {original_name} Aired on {season.air_date}</p>
                      <p className='seasonoverview'>{season.overview}</p>
                    </div>    
                </div>
              ))}
            </div>
            <div className="reviews">
              <h1>Reviews:</h1>
              <div className="reviewflex">
                <div className="review">
                  {reviews?.map(item => (
                        <div key={item.id} className='thereview'>
                          <div className="author-details">
                            <div className="authorpfp">
                              {item.author_details.avatar_path && item.author_details.avatar_path.slice(0,34) === '/https://secure.gravatar.com/avatar' ? 
                              <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                              <img className='noprofilepic' src={nopfp} alt="nopfp" /> }
                            </div>
                            <div className="author-name">
                              <h1 className='reviewauthor'>{item.author}</h1>
                              <div className="time">
                                <p className='reviewrating'>{item.author_details.rating}.00<Star /></p>
                                <p>{item.created_at.slice(0,10)}</p>
                              </div>
                            </div>
                          </div>
                          <p className='reviewcontent'>{item.content}</p>
                        </div>
                      ))}
                </div>
              </div>
            </div>
        </div>
        {isError ? 
                <Snackbar open={isSnackbarVisible} 
                          autoHideDuration={4000} 
                          onClose={closeSnackbar} 
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='error'>
                        TvShow Already Added!
                    </SnackbarAlert>
                </Snackbar>
                : <Snackbar open={isSnackbarVisible}
                            autoHideDuration={4000}
                            onClose={closeSnackbar} 
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='success'>
                        TvShow Added Successfully!
                    </SnackbarAlert>
                </Snackbar>
        } 
      </>
    )
}

export default Tvshowsdescription