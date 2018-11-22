import React, { Component } from 'react'
import './App.css'

import Index from './Routes/Index'
import About from './Routes/About'
import Stuff from './Routes/Stuff'

import Github from './Components/svg/Github'
import Email from './Components/svg/Email'
import Twitter from './Components/svg/Twitter'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <NavLink exact activeClassName="active" className="nav-link" to="/">index</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/about">about</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/stuff">stuff</NavLink>
          </div>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/stuff" component={Stuff} />
          <div className="bottom">
            <div className="spacer-small chroma"></div>
            <div className="notsobigtext middle-text">
              I am looking forward to hearing from you
            </div>
            <div className="footer">
              <span className="contact">
                <a className="contact-link" href="https://github.com/buschco">
                  <Github />
                </a>
              </span>
              <span className="contact">
                <a className="contact-link" href="https://twitter.com/buschco98">
                  <Twitter />
                </a>
              </span>
              <span className="contact">
                <a className="contact-link"  href="mailto:me@colinbusch.de?subject=Feedback">
                  <Email />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
