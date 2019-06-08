import React, { Component } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

class Typer extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      typeSpeed: 80,
      startDelay: 20,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

Typer.defaultProps = {
  strings: [''],
};

Typer.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
};

export default Typer;
