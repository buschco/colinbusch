import React from 'react'
import { useState, useEffect } from 'react'
import CountUp from 'countup.js'
import PropTypes from 'prop-types'

export default function Counter(props) {
  const [running, setRunning] = useState(0)
  const [current, setCurrent] = useState(props.end)
  const node =  React.createRef()

  useEffect(() => {
    var timeout = setTimeout(() => {
      setRunning(1)
    }, props.delay)
    return () => {
      clearTimeout(timeout)
    }
  })

  useEffect(() => {
    var c
    var interval
    if(running===1) {
      c = new CountUp(node.current, props.start, props.end)
      if (!c.error) {
        c.start(setRunning(2))
      } else {
        console.error(c.error)
      }
    }
    if(running===2){
      interval = setInterval(() => {
        var next = current + 1
        setCurrent(next)
      }, 1000)
    }
    return () => {
      if(c!==undefined) c.pauseResume()
      clearInterval(interval)
    }
  },[running])

  return (
    <div>{running===1 ? <span ref={node}></span> : <span>{current}</span>}</div>
  )
}

Counter.propTypes = {
  end: PropTypes.number,
  start: PropTypes.number,
  delay: PropTypes.number
}
