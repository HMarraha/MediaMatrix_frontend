import {useContext , createContext} from 'react'

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    return <StateContext.Provider>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)