import React from 'react'
import {useEffect, useState} from 'react'

export default function Test() {
  const [timer, setTimer] = useState('waiting')

  useEffect(() => {
    var t = setTimeout(() => {
      setTimer('finished')
    },2000)
    return (
      () => clearTimeout(t)
    )
  })

  return(
    <div>{timer}</div>
  )
}
