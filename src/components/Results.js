import React from 'react';
import ResultsArticle from './ResultsArticle';

const Results = ({ term, data }) => {
  return (
    <div className="results-container">
      {!term ? 'Results for ...' : `Results for "${term}"`}
      {!data ? 
          !term ? console.log("nothing entered") : <div>no results found</div>
        :
        data.map((movie, index) => (
          <ResultsArticle 
            key={index} 
            title={movie.Title}
            release={movie.Year}
          />
        ))
        }
    </div>
  )
}

export default Results
