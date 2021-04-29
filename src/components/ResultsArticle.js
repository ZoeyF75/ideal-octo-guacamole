import React, { Component } from 'react'

class ResultsArticle extends Component {
  onTrigger = (event) => {
    this.props.clicked(`${this.props.title} (${this.props.release})`);
    event.preventDefault();
  }

  render() {
    return (
      <>
      <div className="article">
        <div className="info">
          <span>{this.props.title}</span>
          <span>{this.props.release}</span>
        </div>
        <button onClick={this.onTrigger}>Nominate</button>
      </div>
      </>
    )
  }
  
}

export default ResultsArticle
