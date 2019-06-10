import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typer from '../Components/Typer';

export default function Index(props) {
  useEffect(() => {
    document.title = 'home ✖ colinbusch.de';
  });

  const styles = getStyles(props.colors);

  return (
    <div style={styles.content} className="animated fadeIn">
      <div className="textbyimage mainscreen">
        <div style={{ ...styles.bigtext, ...styles.rightText }}>
          <Typer strings={['Hello,^200 my name is Colin']} />
        </div>
        <div style={styles.image}>
          {props.image == null ? null : (
            <img style={styles.welcomeImg} src={props.image.src} alt="error" />
          )}
        </div>
      </div>
      <div style={styles.notsobigtext}>
        I
        <svg
          id="heart"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.4142"
          clipRule="evenodd"
          viewBox="0 0 48 44"
        >
          <path
            fill="red"
            // eslint-disable-next-line
            d="M23.593 10.43C21.704 5.825 17.149-.236 10.773.007 5.966.19 1.228 2.929.11 10.43c-1.98 13.28 23.483 33.549 23.483 33.549S49.056 23.71 47.076 10.43C45.957 2.929 41.22.19 36.412.007c-6.376-.243-10.93 5.818-12.819 10.423"
          />
        </svg>
        coding, designing and solving problems.
      </div>
    </div>
  );
}

const getStyles = themedColors => {
  return {
    content: {
      margin: '30px',
      marginTop: '10px',
    },
    notsobigtext: {
      fontSize: '18pt',
      marginTop: '10vh',
      textAlign: 'center',
    },
    bigtext: {
      margin: '5px',
      fontSize: '23pt',
      display: 'block',
      width: '140px',
    },
    rightText: {
      textAlign: 'right',
    },
    image: {
      width: '100px',
      height: '100px',
      backgroundColor: 'orange',
    },
    welcomeImg: {
      height: '100%',
      width: '100%',
    },
  };
};

Index.defaultProps = {
  image: null,
  colors: {},
};

Index.propTypes = {
  image: PropTypes.objectOf,
  colors: PropTypes.objectOf,
};
