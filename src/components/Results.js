import React, { Component } from 'react';
import Nominations from './Nominations';
import ResultsArticle from './ResultsArticle';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
        nominated: []
    }
  }

  clicked = (childData) =>{
    this.setState({nominated: [...this.state.nominated, childData]});
  }
  
  render() {
    return (
      <div className="results-nom-container">
      <div className="results-container">
        {!this.props.term ? <h5>Results for ...</h5> : <h5>Results for {this.props.term}</h5>}
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
      <div className="nominations-container">
        <Nominations
          title={this.state.nominated} />
      </div>
      </div>
    )
  }
}

export default Results
