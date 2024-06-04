import {useContext , createContext, useState} from 'react'

const StateContext = createContext({
    user: '',
    setUser: () => {},
}

);

export const ContextProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [watchedMovies,setWatchedMovies] = useState([])
    const [watchedTvShows,setWatchedTvShows] = useState([])
    const [watchingMovies,setWatchingMovies] = useState([])
    const [watchingTvShows,setWatchingTvShows] = useState([])
    const [wantToWatchMovies,setWantToWatchMovies] = useState([])
    const [wantToWatchTvShows,setWantToWatchTvShows] = useState([])
    return <StateContext.Provider value={{user,setUser,watchedMovies,watchedTvShows,wantToWatchMovies,wantToWatchTvShows,watchingMovies,watchingTvShows,setWatchedMovies,setWatchedTvShows,setWatchingMovies,setWatchingTvShows,setWantToWatchMovies,setWantToWatchTvShows}}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)