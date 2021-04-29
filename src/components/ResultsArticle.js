import React, { Component } from 'react'

class ResultsArticle extends Component {
  onTrigger = (event) => {
    this.props.clicked(`${this.props.title} (${this.props.release})`);
    event.preventDefault();
  }

  render() {
    return (
      <>
      <div className={this.props.faded}>
        <div className="info">
          <span>{this.props.title}</span>
          <span>{this.props.release}</span>
        </div>
      {this.props.buttonDisabled ? 
        <button disabled>Nominate</button>
          : 
        <button class="success" onClick={this.onTrigger}>Nominate</button> }
      </div>
      </>
    )
  }
  
}

export default ResultsArticle
