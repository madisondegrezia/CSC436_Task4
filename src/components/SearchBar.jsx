import { useState, useEffect } from "react";
import movieData from '../utils/movies';

const SearchBar = ({search, setSearch, maxLength, setMaxLength, direction, setDirection, sortedMovies, setSortedMovies}) => {

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortMovies = () => {
        if(direction === 'asc') {
            sortedMovies.sort((a,b) => b.length - a.length);   // descending order 
            setDirection('desc');
        } else {
            sortedMovies.sort((a,b) => a.length - b.length);   // ascending order
            setDirection('asc');
        }
        setSortedMovies(sortedMovies);
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={sortMovies}>Sort Movie Duration</button> <small>{direction}</small>
    </>
}

export default SearchBar;