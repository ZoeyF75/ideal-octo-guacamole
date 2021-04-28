import React from 'react'

const Search = () => {
  return (
    <div className="search-container">
      Movie Title
      <div className="search">
        <i class="fa fa-search"></i>
        <textarea placeholder="Search for a movie title" required minLength="1"></textarea>
      </div>
    </div>
  )
}

export default Search
