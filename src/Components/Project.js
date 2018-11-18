import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

import Media from './Media'

const Project = (props) => {
  const [flipped, setFlipped] = useState(true)
  return (
    <div key={props.title} className="project">
      {flipped ?
        <Media onLoad={props.onLoad} onClick={()=>setFlipped(!flipped)} type={props.media.type} src={props.media.url} />
        :
        <div onClick={()=>setFlipped(!flipped)} className="project-information">
          <div className="project-title">{props.title}</div>
          <p className="project-description">{props.description}</p>
        </div>
      }
    </div>)
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  media: PropTypes.object,
  onLoad: PropTypes.func
   // ({
  //   type: PropTypes.oneOf(['video', 'image']),
  //   src: PropTypes.string
  // })
}

export default Project
