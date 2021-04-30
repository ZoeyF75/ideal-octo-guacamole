import React, { Component } from 'react'
import { animated, useSpring } from 'react-spring';

const Fade = ({ item })=> {
  const props = useSpring( { 
    from: { opacity: 0 }, 
    to: { opacity: 1 },
    config: { delay: 1000, duration: 2500 } 
  })

  return (
    <animated.div style={props}>
      {item}
    </animated.div>
  )
}

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