import React, { Component } from 'react';
import ResultsArticle from './ResultsArticle';

class Results extends Component {
  
  clicked = e => console.log(e);
  
  render() {
    return (
      <div className="results-container">
        {!this.props.term ? 'Results for ...' : `Results for "${this.props.term}"`}
        {!this.props.data ? 
            !this.props.term ? console.log("nothing entered") : <div>no results found</div>
          :
          this.props.data.map((movie, index) => (
            <ResultsArticle 
              key={index}
              title={movie.Title}
              release={movie.Year}
              clicked={this.clicked}
            />
          ))
          }
      </div>
    )
  }
}

export default Results
