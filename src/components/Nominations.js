import React, { Component } from 'react'
import Fade from '../helper';

export default class Nominations extends Component {
  onTrigger = (title) => {
    this.props.delete(title);
  }
  
  render() {
    return (
      <>
        {this.props.banner ? <Fade item={<div class="alert alert-success" role="alert">Hooray! You've made 5 nominations</div>} /> : null }
        <h5>Nominations</h5>
        <>{this.props.title.map((title,index) => <div class="nom-info" key={index}>
          <span> <Fade item={title}/> </span>
          <span> <Fade item={<button class="delete" onClick={event => this.onTrigger(title)}><span>&#10005;</span></button>} /> </span>
          </div>)}
        </>
      </>
    )
  }
}