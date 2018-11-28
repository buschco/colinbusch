import React from 'react'
import Typer from '../Components/Typer'
import { useEffect } from 'react'
import Test from '../Components/Test'

export default function Index() {
  useEffect(() => {
    document.title = 'home ✖ colinbusch.de'
  })
  return (
    <div className="content animated fadeIn">
      <div className="textbyimage mainscreen">
        <div className="bigtext right-text">
          <Typer strings={['Hello,^200 my name is Colin']} />
        </div>
        <div className="image">
          <img className="welcome-img" src="/images/flug.jpg" alt="main" />
        </div>
      </div>
        <div style={{marginTop: '10vh'}} className="notsobigtext middle-text">
          I<svg id="heart" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142" clipRule="evenodd" viewBox="0 0 48 44"><path fill="red" d="M23.593 10.43C21.704 5.825 17.149-.236 10.773.007 5.966.19 1.228 2.929.11 10.43c-1.98 13.28 23.483 33.549 23.483 33.549S49.056 23.71 47.076 10.43C45.957 2.929 41.22.19 36.412.007c-6.376-.243-10.93 5.818-12.819 10.423"/></svg>
          coding, designing and solving problems. <Test />
        </div>
    </div>
  )
}
