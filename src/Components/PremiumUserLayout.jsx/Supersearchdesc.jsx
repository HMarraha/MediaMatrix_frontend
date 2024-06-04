import React, { useState, useEffect } from 'react'
import CircularIndeterminate from './CircularIndeterminate'; 
import elasticClient from '../../Axios/elastic';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
const Supersearchdesc = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults,setNoResults] = useState(false)
    const searchElasticsearch = async (index, queryType, queryValue) => {
      try {
        const response = await elasticClient.post(`/${index}/_search`, {
          query: {
            [queryType]: {
              overview: queryValue,
            },
          },
        });
        return response.data.hits.hits;
      } catch (error) {
        console.error(`Error searching ${index}:`, error);
        return [];
      }
    };
  
    const handleSearch = async () => {
      setLoading(true);
      setNoResults(false)
      setResults([])
      try {
        let movieResults = await searchElasticsearch('moviedescriptionsearch', 'match_phrase', query);
        let tvResults = await searchElasticsearch('tvdescriptionsearch', 'match_phrase', query);
  
        movieResults = movieResults.map(result => ({ ...result, _source: { ...result._source, type: 'movie' }}));
        tvResults = tvResults.map(result => ({ ...result, _source: { ...result._source, type: 'tv' }}));
  
        if (movieResults.length > 0 || tvResults.length > 0) {
          setResults([...movieResults, ...tvResults]);
          
        } else {
          movieResults = await searchElasticsearch('moviedescriptionsearch', 'match', query);
          tvResults = await searchElasticsearch('tvdescriptionsearch', 'match', query);
          movieResults = movieResults.map(result => ({ ...result, _source: { ...result._source, type: 'movie' }}));
          tvResults = tvResults.map(result => ({ ...result, _source: { ...result._source, type: 'tv' }}));
          const combinedResults = [...movieResults, ...tvResults]
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
        <h1>Super Search By Description</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies or TV shows..."
        />
        <Button variant='contained' onClick={handleSearch}>Search</Button>
        {loading && <CircularIndeterminate />}
        <div className="results">
        {noResults && !loading && <h1>No matches were found with your description</h1>}
          {results?.map((result) => (
            <div key={result._id} className="result-item">
              <Link style={{textDecoration:'none'}} to={result._source.type === 'movie' ? `/watch/movies/${result._source.id}` : `/watch/tvshows/${result._source.id}`}><img src={`https://image.tmdb.org/t/p/w500${result._source.poster_path}`} alt={`${result._source.original_title} poster`} /></Link>
              <div>
              <Link style={{textDecoration:'none'}} to={result._source.type === 'movie' ? `/watch/movies/${result._source.id}` : `/watch/tvshows/${result._source.id}`}><h2>{result._source.original_title}</h2></Link>
              <Link style={{textDecoration:'none'}} to={result._source.type === 'movie' ? `/watch/movies/${result._source.id}` : `/watch/tvshows/${result._source.id}`}><p>{result._source.overview}</p></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    );
}

export default Supersearchdesc