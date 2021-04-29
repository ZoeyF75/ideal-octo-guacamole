import React, { Component } from 'react'

class ResultsArticle extends Component {

  render() {
    return (
      <>
      <div className="article">
        <div className="info">
          <span>{this.props.title}</span>
          <span>{this.props.release}</span>
        </div>
        <button onClick={this.props.clicked = this.props.title}>Nominate</button>
      </div>
      </>
    )
  }
  
}

export default ResultsArticle
