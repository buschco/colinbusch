import React from 'react';
// import { useEffect, useState } from 'react'
import Bricks from 'bricks.js';
import ContentLoader from 'react-content-loader';
import Project from '../Components/Project';

// let instance = {}

const MyLoader = () => {
  return (
    <ContentLoader
      height={300}
      width={400}
      speed={5}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="9.5" y="10" rx="0" ry="0" width="455.83" height="164" />
      <rect x="197.33" y="93" rx="0" ry="0" width="34" height="20" />
      <rect x="217.33" y="19" rx="0" ry="0" width="30" height="43" />
      <rect x="357.33" y="135" rx="0" ry="0" width="0" height="0" />
      <rect x="8.33" y="182" rx="0" ry="0" width="391" height="111" />
    </ContentLoader>
  );
};

export class Stuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  async componentWillMount() {
    const response = await fetch('projects.json');
    const data = await response.json();
    this.setState({ projects: data });
  }

  componentDidMount() {
    console.log('finish');
    this.instance = Bricks({
      container: '.masonry',
      packed: 'packed',
      sizes: [
        { columns: 3, gutter: 10 },
        { mq: '768px', columns: 3, gutter: 20 },
        { mq: '1024px', columns: 4, gutter: 20 },
      ],
    })
      .pack()
      .resize(true);
  }
  // const [projects, setProjects] = useState(null)
  // useEffect(async () => {
  //   const response = await fetch('projects.json')
  //   const data = await response.json()
  //   setProjects(data)
  // }, [])
  //
  // useEffect(() => {
  //   document.title = 'stuff ✖ colinbusch.de'
  // })
  //
  // useEffect(() => {
  //   instance = Bricks({
  //     container: '.masonry',
  //     packed: 'packed',
  //     sizes: [
  //       { columns: 3, gutter: 10 },
  //       { mq: '768px', columns: 3, gutter: 20 },
  //       { mq: '1024px', columns: 4, gutter: 20 }
  //     ]
  //   }).pack().resize(true)
  // },[projects])
  //

  render() {
    return (
      <div
        style={{ height: '50vh', width: '200px' }}
        className="content animated fadeIn masonry"
      >
        {this.projects === null ? (
          <MyLoader />
        ) : (
          this.state.projects.map(project => {
            return (
              <Project
                ready={() => {
                  console.log('ready');
                }}
                key={project.id}
                title={project.name}
                description={project.description}
                links={project.links}
                media={project.media}
              />
            );
          })
        )}
      </div>
    );
  }
}
export default Stuff;
