import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmbdClient from '../../Axios/tmdb'
import Moviedescription from './Moviedescription'
import Tvshowsdescription from './Tvshowsdescription'
const Description = () => {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
  const Large = 'https://image.tmdb.org/t/p/original'
  const { id,original_name,original_title } = useParams()
  const [movies,setMovies] = useState({})
  const [shows,setShows] = useState({})
  const [cast,setCast] = useState([])
  const [media, setMedia] = useState([])
  const [itsBackdrops,setItsBackdrops] = useState([])
  const [itsPosters,setItsPosters] = useState([])
  const [reviews,setReviews] = useState([])
  const [tvCast,setTvCast] = useState([])
  const [tvMedia,setTvMedia] = useState([])
  const [tvReviews,setTvReviews] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/tv/${id}/reviews`)
        setTvReviews(response.data.results)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_name) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/tv/${id}/videos`)
        setTvMedia(response.data.results)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_name) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/tv/${id}/credits`)
        setTvCast(response.data.cast)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_name) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/reviews`)
        setReviews(response.data.results)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_title) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/images`)
        setItsBackdrops(response.data.backdrops)
        setItsPosters(response.data.posters)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_title) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/videos`)
        setMedia(response.data.results)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_title) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/credits`)
        setCast(response.data.cast)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (original_title) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {   
        try {
          const response = await tmbdClient.get(`/movie/${id}`)
          setMovies(response.data)
          setIsLoading(false)
        } catch(error) {
          console.error(error)
          setIsLoading(false)
        }
    }
    if (original_title) {
      getURL()
    }
  },[id,original_name,original_title])
  useEffect(() => {
    const getURL = async () => {
        try {
          const response = await tmbdClient.get(`/tv/${id}`)
          setShows(response.data)
          setIsLoading(false)
        } catch(error) {
          console.error(error)
          setIsLoading(false)
        }
    }
    if (original_name) {
      getURL()
    }
  },[id,original_name,original_title])
  if (isLoading) {
    return <div></div>
  }
  if (original_title) {
    return (
      <>
          <Moviedescription {...movies} Large={Large} IMG_BASE_URL={IMG_BASE_URL} cast={cast} 
          media={media} itsBackdrops={itsBackdrops} itsPosters={itsPosters} reviews={reviews}/>
      </>
    )
  }
  else if (original_name === shows.original_name) {
    return (
      <>     
        <Tvshowsdescription {...shows} Large={Large} IMG_BASE_URL={IMG_BASE_URL} cast={tvCast}
        media={tvMedia} reviews={tvReviews}
        />
      </>
    )
  }
}

export default Description