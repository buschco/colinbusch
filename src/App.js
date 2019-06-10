import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Index from './Routes/Index';
import About from './Routes/About';

import Github from './Components/svg/Github';
import Email from './Components/svg/Email';
import Twitter from './Components/svg/Twitter';
import { colors } from './Colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      index: 0,
    };
  }

  componentDidMount() {
    fetch('images.json')
      .then(res => res.json())
      .then(data => {
        const index = Math.floor(Math.random() * data.length);
        this.setState({
          image: data[index],
          index,
        });
      });
  }

  render() {
    const themedColors = colors[this.state.index];
    const styles = getStyles(themedColors);
    return (
      <Router>
        <div className="App">
          <div style={styles.header}>
            <NavLink
              exact
              activeClassName="active"
              activeStyle={styles.navLinkActive}
              style={styles.navLink}
              to="/"
            >
              index
            </NavLink>
            <NavLink
              activeClassName="active"
              activeStyle={styles.navLinkActive}
              style={styles.navLink}
              to="/about"
            >
              about
            </NavLink>
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <Index colors={themedColors} image={this.state.image} />
            )}
          />
          <Route path="/about" render={() => <About colors={themedColors} />} />
          <div className="bottom">
            <div style={styles.spacerSmall} className="chroma" />
            <div className="notsobigtext middle-text">
              <p>I am looking forward to hearing from you</p>
            </div>
            <div style={styles.footer}>
              <span className="contact">
                <a className="contact-link" href="https://github.com/buschco">
                  <Github />
                </a>
              </span>
              <span className="contact">
                <a
                  className="contact-link"
                  href="https://twitter.com/buschco98"
                >
                  <Twitter />
                </a>
              </span>
              <span className="contact">
                <a
                  className="contact-link"
                  href="mailto:me@colinbusch.de?subject=Feedback"
                >
                  <Email />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const getStyles = themedColors => {
  return {
    navLink: {
      marginLeft: '0.6em',
      color: themedColors.inactive,
    },
    navLinkActive: {
      color: themedColors.active,
    },
    header: {
      backgroundColor: themedColors.grey,
      height: '53px',
      textAlign: 'center',
      lineHeight: '60px',
      fontSize: '20pt',
    },
    spacerSmall: {
      backgroundColor: themedColors.grey,
      height: '9px',
      margin: '10px',
    },
    footer: {
      width: '100%',
      textAlign: 'center',
    },
  };
};

export default App;
