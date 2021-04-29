import React from 'react'

const ResultsArticle = ({ title, release }) => {
  return (
    <div className="article">
      <span>{title}</span>
      <span>{release}</span>
      <button>Nominate</button>
    </div>
  )
}

export default ResultsArticle
