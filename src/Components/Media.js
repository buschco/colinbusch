import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import Loader from './Loader'

const Media = (props) => {


  const Video = (props) => {
    return <video loop id="video-background" muted plays-inline>
      <source src={props.src} type="video/mp4" />
    </video>
  }

  return (
    <div className="project-media">
      {{
       'svg': (
          <SVG
            src={props.src}
            onLoad={props.onLoad}
            preloader={<Loader />}
          />
       ),
       'video': (
         <Video src={props.src}/>
       ),
       'image': (
          <img
            onLoad={props.onLoad}
            className="project-image"
            src={props.src}
            alt={<Loader />}
          />
       ),
       default: (
         <h1>Error</h1>
       )
     }[props.type]}
    </div>
  )
}

Media.propTypes = {
  type: PropTypes.oneOf(['video', 'image', 'youtube', 'svg']),
  src: PropTypes.string,
  onLoad: PropTypes.func
}

export default Media
