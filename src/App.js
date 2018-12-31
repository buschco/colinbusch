import React, { Component } from 'react'
import './App.css'
import styles from './Colors'

import Index from './Routes/Index'
import About from './Routes/About'
import Stuff from './Routes/Stuff'

import Github from './Components/svg/Github'
import Email from './Components/svg/Email'
import Twitter from './Components/svg/Twitter'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null,
      index: 0
    }
  }


  componentDidMount() {
    fetch('images.json')
    .then(res => res.json())
    .then(data => {
      var index = Math.floor(Math.random() * data.length)
      this.setState({
        data: data,
        index: index
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="header" style={styles(this.state.index).header}>
            <NavLink exact activeClassName="active" className="nav-link" activeStyle={styles(this.state.index).active} style={styles(this.state.index).a} to="/">index</NavLink>
            <NavLink activeClassName="active" className="nav-link" activeStyle={styles(this.state.index).active} style={styles(this.state.index).a} to="/about">about</NavLink>
            <NavLink activeClassName="active" className="nav-link" activeStyle={styles(this.state.index).active} style={styles(this.state.index).a} to="/stuff">stuff</NavLink>
          </div>
          <Route exact path="/" render={() => <Index index={this.state.index} images={this.state.data} />} />
          <Route path="/about" render={() => <About index={this.state.index} images={this.state.data} />} />
          <Route path="/stuff" component={Stuff} />
          <div className="bottom">
            <div style={styles(this.state.index).spacerSmall} className="spacer-small chroma"></div>
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
