import React from 'react'

const Results = ({ term }) => {
  return (
    <div className="results-container">
      {!term ? 'Results for ...' : "Results for " + term }
    </div>
  )
}

export default Results
