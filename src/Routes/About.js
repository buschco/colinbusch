import React from 'react'
import Bubbles from '../Components/BubblesHooks'
import Gallery from '../Components/Gallery'
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
// import Counter from '../Components/Counter'
import PropTypes from 'prop-types'

const birthday = new Date(1998,1,21,13,36)

export default function About(props) {
  const [information, setInformation] = useState('loading..')
  const [link, setLink] = useState('.')
  const [age, setAge] = useState(0)
  const [counting, setCounting] = useState(false)

  const fetchData = async () => {
    const response = await fetch('information.json')
    const data = await response.json()
    setInformation(data[0].text)
    setLink(data[0].link)
  }

  useEffect(() => {
    fetchData()
    setAge(getAge(birthday))
    setCounting(true)
  }, [])

  useEffect(() => {
    document.title = 'about ✖ colinbusch.de'
  })

  useEffect(() => {
    if (counting===true) return
    let interval = setInterval(() => {
      setAge(getAge(birthday))
    }, 100)
    return () => {
      clearInterval(interval)
    }
  },[counting])

  return (
    <div className="animated fadeIn">
      <div className="notsobigtext middle-text">
        <div className="notsobigtext">I worked with:</div>
        <div id="bubbleChart" className="animated fadeIn">
          <Bubbles theme={props.index} />
        </div>
      </div>
      <div className="notsobigtext middle-text animated fadeIn">
        Currently I am <span> {counting===true ? <CountUp
          start={0}
          end={age+4}
          delay={1}
          duration={2}
          onEnd={()=> {setCounting(false)}}
        /> : age }</span> seconds old and 
        { ` ${information}` } <a href={link.url} > { link.name } </a>
      </div>
      <div className="notsobigtext middle-text animated fadeIn">
        Apart from coding I like to create vector graphics
      </div>
      <Gallery />
    </div>
  )
}


About.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

const getAge = (b) => {
  var dif = Date.now() - b.getTime()
  var difDate = new Date(dif) // miliseconds from epoch
  return Math.abs(Math.floor(difDate.getTime()/1000))
}
