import React from 'react';
import { useState } from 'react';
import Results from './Results';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');

  const getMovies = async () => {
    const moviesFromServer = await fetchMovies();
    setMovies(moviesFromServer);
  }

  const fetchMovies = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2fbce2b8&s=${searchTerm}`);
    const data = await res.json();
    return data
  }

  const onChange = (event) => {
    setSearchTerm(event.target.value);
    getMovies();
  }

  window.onkeydown=function(event){
    if(event.keyCode==13){
      event.preventDefault();
      setSearchTerm(event.target.value);
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
  <textarea placeholder="Search for a movie title" required minLength="1" onChange={event => onChange(event)}>{text}</textarea>
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
