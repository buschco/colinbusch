import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { styles } from '../Colors';

let svg = {};
let bubbles = {};
let labels = {};
let sim = {};

export default function Bubbles(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [active, setActive] = useState(true);
  const scale = useScreenSize();

  const fetchData = async () => {
    const response = await fetch('knowledge.json');
    const fetchedData = await response.json();
    setData(fetchedData);
  };

  const initSVG = () => {
    svg = d3
      .select('#bubbleChart')
      .append('div')
      .classed('svg-container', true)
      .append('svg')
      .attr('height', 9 * scale.s)
      .attr('width', '100%');
    svg = svg
      .append('g')
      .attr('id', 'group')
      .style('transform', 'translate(50%, 50%)');
    initBubbles();
    initSimulation();
    setLoading(false);
  };

  const initBubbles = () => {
    bubbles = svg
      .selectAll('.bubble')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', d => {
        return d.size * scale.s;
      })
      .attr('fill', d => {
        if (d.cat === 'Lang') {
          return styles(props.theme).lang;
        }
        if (d.cat === 'Tech') {
          return styles(props.theme).tech;
        }
        if (d.cat === 'Tool') {
          return styles(props.theme).tool;
        }
        return 'red';
      })
      .call(
        d3
          .drag()
          .on('start', dragStarted)
          .on('drag', dragged)
          .on('end', dragEnded)
      );
    labels = svg
      .selectAll('.labels')
      .data(data)
      .enter()
      .append('text')
      .attr('alignment-baseline', 'central')
      .attr('text-anchor', 'middle')
      .attr('font-size', d => {
        return (d.size * scale.s) / 3;
      })
      .text(d => {
        return d.name;
      })
      .call(
        d3
          .drag()
          .on('start', dragStarted)
          .on('drag', dragged)
          .on('end', dragEnded)
      );
  };

  const dragStarted = () => {
    if (!d3.event.active) {
      sim.alphaTarget(0.3).restart();
    }
    d3.event.subject.fx = d3.event.subject.x;
    d3.event.subject.fy = d3.event.subject.y;
  };

  const dragged = () => {
    d3.event.subject.fx = d3.event.x;
    d3.event.subject.fy = d3.event.y;
  };

  const dragEnded = () => {
    if (!d3.event.active) {
      sim.alphaTarget(0);
    }
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
    setActive(true);
  };

  const initSimulation = () => {
    const updateForce = () => {
      labels
        .attr('x', d => {
          return d.x;
        })
        .attr('y', d => {
          return d.y + (d.size * scale.s) / 6;
        });
      bubbles
        .attr('cx', d => {
          return d.x;
        })
        .attr('cy', d => {
          return d.y;
        });
    };
    sim = d3.forceSimulation();
    sim.force('x', d3.forceX(0).strength(0.05));
    sim.force('y', d3.forceY(0).strength(0.05));
    sim.force(
      'collide',
      d3
        .forceCollide(d => {
          return d.size * scale.s + 1000;
        })
        .strength(1)
    );
    sim.nodes(data).on('tick', updateForce);
    setActive(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      initSVG();
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const t = setTimeout(() => {
      sim.stop();
    }, 2000);
    setActive(false);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (loading === false) {
      svg.attr('height', 9 * scale.s);
      labels.attr('font-size', d => {
        return (d.size * scale.s) / 3;
      });
      bubbles.attr('r', d => {
        return d.size * scale.s;
      });
      sim.force(
        'collide',
        d3
          .forceCollide(d => {
            return d.size * scale.s + scale.s / 55;
          })
          .strength(1)
      );
      sim.alpha(1).restart();
      setActive(true);
    }
  }, [loading, scale.s]);

  return <div>{loading ? <Loader /> : null}</div>;
}

// Stop sim que

const useScreenSize = () => {
  const calcScale = (w, h) => {
    if (w > 800) {
      return (w / h) * 40;
    }
    return w < h ? (w / h) * (w / 6) : (h / w) * (w / 6);
  };
  const [w, setWidth] = useState(window.innerWidth);
  const [h, setHeight] = useState(window.innerHeight);
  const [s, setScale] = useState(
    calcScale(window.innerWidth, window.innerHeight)
  );
  useEffect(() => {
    const handleResize = () => {
      if (w === window.innerWidth) {
        return;
      }
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setScale(calcScale(window.innerWidth, window.innerHeight));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return { w, h, s };
};

Bubbles.defaultProps = {
  theme: 0,
};

Bubbles.propTypes = {
  theme: PropTypes.number,
};
