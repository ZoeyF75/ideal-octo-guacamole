import React from 'react';
import { useState } from 'react';
import Results from './Results';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesFromServer = await fetchMovies();
    setMovies(moviesFromServer);
  }

  const fetchMovies = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2fbce2b8&s=${searchTerm}`);
    const data = await res.json();
    return data
  }

  //when input on textarea changes
  const onChange = (event) => {
    setSearchTerm(event.target.value);
    getMovies();
  }

  //runs when enter key is pressed
  window.onkeydown=function(event){
    if(event.keyCode===13){
      event.preventDefault(); //prevents enter spacing in text area
      setSearchTerm(event.target.value); //allows for the last letter to be searched for
      getMovies();
    }
  }

  return (
    <>
    <div className="search-container">
      <h5>Movie Title</h5>
      <small>Press enter to complete search</small>
      <div className="search">
        <i className="fa fa-search"></i>
  <textarea placeholder="Search for a movie title" required minLength="1" onChange={event => onChange(event)}></textarea>
      </div>
    </div>
    <div className="results-nom-container">
    <Results
      term={searchTerm}
      data={movies.Search} 
    />
   </div>
   </>
  )
}

export default Search
