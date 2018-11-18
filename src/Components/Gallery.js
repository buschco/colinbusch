import React from 'react'
import { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import Loader from './Loader'

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [data, setData] = useState(null)
  useEffect(async () => {
    const response = await fetch('gallery.json')
    const data = await response.json()
    setData(data)
  }, [])

  return (
    <div>
      <button className='btn' onClick={() => setActive(active === 0 ? data.length-1 : active - 1)}>{'<'}</button>
      <button className='btn' onClick={() => setActive(active === data.length-1 ? 0 : active + 1)}>{'>'}</button>
      <div className="svg-viewer">
        {data===null ? 'Loading...' : <SVG
          src={'svg/' + data[active].file}
          preloader={<Loader />}
        />}
      </div>
    </div>
  )
}
