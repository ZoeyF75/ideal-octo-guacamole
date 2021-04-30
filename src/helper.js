import { animated, useSpring } from 'react-spring';

const Fade = ({ item }) => {
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

export default Fade


