import React from 'react'
import Bubbles from '../Components/BubblesHooks'
import Gallery from '../Components/Gallery'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'about ✖ colinbusch.de'
  })

  return (
    <div className="animated fadeIn">
      <div className="notsobigtext middle-text">
        <div className="notsobigtext">I worked with:</div>
        <div id="bubbleChart" className="animated fadeIn">
          <Bubbles />
        </div>
      </div>
      <div className="notsobigtext middle-text animated fadeIn">
        Currently I am 20 years old and studying Computer
        Science at the FAU Erlangen-Nürnberg.
      </div>
      <div className="notsobigtext middle-text animated fadeIn">
        Apart from coding I like to create vector graphics
      </div>
      <Gallery />
    </div>
  )
}
