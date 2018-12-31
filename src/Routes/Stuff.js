import React from 'react'
import { useEffect, useState } from 'react'
import Bricks from 'bricks.js'
import Project from '../Components/Project'

let instance = {}

export default function Stuff() {
  const [projects, setProjects] = useState(null)
  const fetchData = async () => {
    const response = await fetch('projects.json')
    const data = await response.json()
    setProjects(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    document.title = 'stuff ✖ colinbusch.de'
  })

  useEffect(() => {
    instance = Bricks({
      container: '.masonry',
      packed: 'packed',
      sizes: [
        { columns: 1, gutter: 10 },
        { mq: '950px', columns: 3, gutter: 20 },
        { mq: '1260px', columns: 4, gutter: 20 }
      ]
    }).resize(true)
  },[projects])

  const fixLayout = () => {
    instance.pack()
  }

  return (
    <div>
      <div className="notsobigtext middle-text animated fadeIn">
        This area is currently under heavy work. In the future it should showcase some projects I worked on or I will work on.
      </div>
      <div style={{height: '50vh', width: '200px'}} className="content animated fadeIn masonry">
        {projects===null ? 'Loading...' : projects.map((project, i) =>{
          return <Project onLoad={fixLayout} key={i} title={project.name} description={project.description} links={project.links} media={project.media} />
        })}
      </div>
    </div>
  )
}
