import React, { Component } from 'react'

export default class Nominations extends Component {
  render() {
    return (
      <>
        <h5>Nominations</h5>
        <>{this.props.title.map((title,index) => <div class="nom-info" key={index}>
          <span>{title}</span>
      
          <span><button class="delete"><span>&#10005;</span></button></span>
          </div>)}
        
        </>
      </>
    )
  }
}