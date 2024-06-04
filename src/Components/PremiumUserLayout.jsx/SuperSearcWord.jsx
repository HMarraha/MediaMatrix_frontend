import React, { useState, useEffect } from 'react'
import CircularIndeterminate from './CircularIndeterminate'; 
import elasticClient from '../../Axios/elastic';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import { FaTv } from 'react-icons/fa';
const SuperSearchWord = ({styles,isClicked}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults,setNoResults] = useState(false)

  const searchElasticsearch = async (index, queryType, queryValue) => {
    try {
      const response = await elasticClient.post(`/${index}/_search`, {
        query: {
          [queryType]: {
            line: queryValue,
          },
        },
      });
      return response.data.hits.hits;
    } catch (error) {
      console.error(`Error searching ${index}:`, error);
      return [];
    }
  };
  const extractStartTime = (timeSaid) => {
    const times = timeSaid.split(' --> ');
    const startTime = times[0]; // Get the starting time
    const [hours, minutes, seconds] = startTime.split(':'); // Split into hours, minutes, and seconds
    return `${hours}:${minutes}:${seconds.split(',')[0]}`; // Return up to seconds
  };
  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false)
    setResults([])
    try {
      let wordResults = await searchElasticsearch('wordsearch', 'match_phrase', query);

      if (wordResults.length > 0) {
        setResults([...wordResults]);
        
      } else {
        wordResults = await searchElasticsearch('wordsearch', 'match', query);
        const combinedResults = [...wordResults]
        setResults(combinedResults);

        if (combinedResults.length === 0) {
          setNoResults(true)
        }
      }   
    } catch (error) {
      console.error('There was an error with the search:', error);
    }
    setLoading(false);
  };

  return (
    <>
    <div className="supersearch">
      <h1>Super Search By Phrase</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows by a phrase"
      />
      <Button variant='contained' onClick={handleSearch}>Search</Button>
      {loading && <CircularIndeterminate />}
      <div className="results">
      {noResults && !loading && <h1>No matches were found with your description</h1>}
        {results?.map((result) => (
          <div key={result._id} className="result-item">
            <Link style={{textDecoration:'none'}} to={`/watch/movies/${result._source.id}`}><img src={`https://image.tmdb.org/t/p/w500${result._source.poster_path}`} alt={`${result._source.original_title} poster`} /></Link>
            <div>
            <Link style={{textDecoration:'none'}} to={`/watch/movies/${result._source.id}`} ><h2>{result._source.original_title}</h2></Link>
            <Link style={{textDecoration:'none'}} to={`/watch/movies/${result._source.id}`}><p>{result._source.overview}</p></Link>
            <p style={{color:'#BE3144',marginTop:'2rem'}}>Line: {result._source.line}</p>
            <Link to={`/watch/movies/${result._source.id}`}><Button startIcon={<FaTv/>} style={{backgroundColor:'#BE3144', color: 'white'}} variant='contained'>Watch at {extractStartTime(result._source.timeSaid)}</Button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default SuperSearchWord