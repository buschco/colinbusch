import React from 'react'
import { useEffect, useState } from 'react'

export default function TitleImage() {
  const [data, setData] = useState(null)
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if(data!==null) setIndex(calcIndex(data.length))
  }, [data])

  const calcIndex = (max) => {
    return Math.floor(Math.random() * max)
  }

  const fetchData = async () => {
    const response = await fetch('titleimage.json')
    const data = await response.json()
    setData(data)
  }

  return (
    <div className="image">
      {data === null ? 'loading' : <img className="welcome-img" src={data[index].src} alt="main" />}
    </div>
  )
}
