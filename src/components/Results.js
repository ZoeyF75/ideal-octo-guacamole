import React, { Component } from 'react';
import Nominations from './Nominations';
import ResultsArticle from './ResultsArticle';
import Fade from '../helper';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
        nominated: [],
        banner: false,
        tooMany: false
    }
  }

  errorBanner = () => {
    this.setState({tooMany: true});
    // timer that removes error banner after 5 seconds
    setTimeout(() => {
      this.setState({tooMany: false});
    },5000)
  }

  //runs when button from results article is clicked, childData = title and year of movie selected
  clicked = (childData) => {
    this.state.nominated.length === 5 ? this.errorBanner() : this.setState({nominated: [...this.state.nominated, childData]});
    if (this.state.nominated.length === 4) this.setState({banner: true});
  }

  delete = (childData) => {
    this.setState({nominated: this.state.nominated.filter(function(movie) {
      return movie != childData;
    })});
    //removes banner if a nomination is deleted
    if(this.state.nominated.length <= 5) {
      this.setState({banner: false});
    } 
  }
  
  render() {
    return (
      <div className="results-nom-container">
        <div className="results-container">
        {this.state.tooMany ? <Fade item={<div class="alert alert-danger" role="alert">You have already made 5 nominations!</div>} /> : null}
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
            buttonDisabled={this.state.nominated.includes(`${movie.Title} (${movie.Year})`)}
            faded={this.state.nominated.includes(`${movie.Title} (${movie.Year})`)? "article-disabled" : "article"}
          />
          ))
        }
        </div>
        <div className="nominations-container">
          <Nominations
            title={this.state.nominated}
            banner={this.state.banner}
            delete={this.delete} />
        </div>
      </div>
    )
  }
}

export default Results
