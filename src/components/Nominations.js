import React, { Component } from 'react'

export default class Nominations extends Component {
  render() {
    return (
      <>
        <h5>Nominations</h5>
        <span>{this.props.title.map((title,index) => <div key={index}>{title}</div>)}</span>
      </>
    )
  }
}

