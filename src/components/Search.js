import React from 'react';
import { useState } from 'react';
import Results from './Results';
import Nominations from './Nominations'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <div className="search-container">
      Movie Title
      <div className="search">
        <i className="fa fa-search"></i>
        <textarea placeholder="Search for a movie title" required minLength="1" onChange={event => {setSearchTerm(event.target.value)}}></textarea>
      </div>
    </div>
    <div className="results-nom-container">
    <Results
      term={searchTerm} />
    <Nominations />
   </div>
   </>
  )
}

export default Search
