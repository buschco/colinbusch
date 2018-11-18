import React from 'react'
import {useState} from 'react'

import Gallery from './svg/Gallery'

export default function SVGViewer() {
  const [active, setActive] = useState(0)
  return (
    <div>
      <button className='btn' onClick={() => setActive(active === 0 ? Gallery.length-1 : active - 1)}>{'<'}</button>
      <button className='btn' onClick={() => setActive(active === Gallery.length-1 ? 0 : active + 1)}>{'>'}</button>
      <div className='svg-viewer'>{Gallery[active]()}</div>
    </div>
  )
}
