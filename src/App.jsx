import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';
import './App.css';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [direction, setDirection] = useState('');
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    const sortedMovieData = [...movieData];

    setMovies(sortedMovieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     }));
     setSortedMovies(sortedMovieData);
  }, [search, maxLength, direction, sortedMovies]);

  

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        direction={direction}
        setDirection={setDirection}
        sortedMovies={movieData}
        setSortedMovies={setSortedMovies}

      />
      {/* Output the Movies */}
      <Movies movies={movies} /> 
    </>
  )
}

export default App