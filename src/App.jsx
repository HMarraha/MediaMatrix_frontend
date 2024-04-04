import './App.css'
import { useStateContext } from './Contextapi/contextProvider'

function App() {
  
  const {counter,setCounter} = useStateContext()
  const handleClick = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default App
