import React, { useState, useEffect } from 'react'
import Supersearchdesc from './Supersearchdesc';
import SuperSearchWord from './SuperSearcWord';
import { Button } from '@mui/material';
const Supersearch = () => {
  const [description,setDescription] = useState(false)
  const [phrase,setPhrase] = useState(false)
  const [isClicked,setIsClicked] = useState(false)
  const styles = {
      display: isClicked ? 'block' : 'none',
      transform: isClicked ? "translateY(5rem)" : "translateY(-5rem)",
      transition: isClicked ? "150ms ease-out" : "0s",
  }
  const handleDescription = () => {
    setDescription(true)
    setPhrase(false)
    setIsClicked(true)
  }
  const handlePhrase = () => {
    setPhrase(true)
    setDescription(false)
    setIsClicked(true)
  }
  return (
    <>
      <div className="supersearchchoice">
        <Button onClick={handleDescription} variant='contained'>Search by Description</Button>
        <Button onClick={handlePhrase} variant='contained'>Search by Phrase</Button>
        {description && <Supersearchdesc isClicked={isClicked} style={styles}/>}
        {phrase && <SuperSearchWord isClicked={isClicked} styles={styles}/>}
      </div>
    </>
  );
}

export default Supersearch