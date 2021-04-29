import React from 'react';

const Results = ({ term, data }) => {
  if (data) data.map((movie) => (console.log(movie)));
    
  return (
    <div className="results-container">
      {!term ? 'Results for ...' : `Results for "${term}"` }

    </div>
  )
}

export default Results
