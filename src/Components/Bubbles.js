import React, { Component } from 'react'
import * as d3 from "d3"

class Bubbles extends Component {
  constructor(props){
    super(props)
    this.state={
      h: 0,
      w: 0,
      s: 1,
      data: [],
      loading: true
    }
    this.sim = {}
    this.labels = {}
    this.bubbles = {}
    this.svg = {}
  }

  componentDidMount(){
    this.updateScale(true)
    window.addEventListener('resize', this.updateScale.bind(this))
    fetch('public/knowledge.json')
    .then(res => {
      return res.json();
    })
    .then(json => {
      this.setState({
        data: json,
        loading: false
      })
      this.createSimulation()
      this.createBubbles()
    })
  }

  createBubbles() {
    this.svg = d3.select("#bubbleChart")
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox","0 0 " + this.state.w/1.5 + " " + this.state.h/1.5)
      .classed("svg-content-responsive", true);
        // .append("svg")
        // .attr("height", this.state.w<=this.state.h ? this.state.h/2 : this.state.h-3*this.state.s)
        // .attr("width", this.state.w-this.state.s)
    this.svg
      .append("text")
      .attr("alignment-baseline", "central")
      .attr("font-size", this.state.s/2)
      .attr("y", this.state.s)
      .text("I worked with...")
    this.svg = this.svg.append("g").attr("id","group").style("transform", "translate(50%, 50%)")
    this.bubbles = this.svg
      .selectAll(".bubble")
      .data(this.state.data)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("r", d => {return d.size*this.state.s})
      .attr("fill", d => {
        if(d.cat==="Lang") return "#3454D1"
        if(d.cat==="Tech") return "#34D1BF"
        if(d.cat==="Tool") return "#AEADF0"
        else return "red"
      })
    this.labels = this.svg
    	.selectAll(".labels")
      .data(this.state.data)
      .enter()
      .append("text")
      .attr("alignment-baseline", "central")
      .attr("text-anchor", "middle")
      .attr("font-size", d => {
        return d.size*this.state.s / 3
      })
    	.text(d => {
        return d.name
      })
  }

  createSimulation(){
    this.sim = d3.forceSimulation()
    this.sim.force("x", d3.forceX(0).strength(0.004))
    this.sim.force("y", d3.forceY(0).strength(0.004))
    this.sim.force("collide", d3.forceCollide(d => {
      return d.size*this.state.s+this.state.s/55
    }).strength(1))
    this.sim.nodes(this.state.data).on("tick", this.updateForce.bind(this))
  }

  updateScale(g){
    var h = window.innerHeight
    var w = window.innerWidth
    if(this.state.w===w) return
    var s = w<=h ? (w/h)* window.innerWidth/7 : (h/w)*window.innerHeight/7
    this.setState({ h: h, w: w, s: s })
    if(g!==true){
      this.labels
        .attr("font-size", d => {return d.size*this.state.s / 3})
      this.bubbles
        .attr("r", d => {return d.size*this.state.s})
      this.sim.force("collide", d3.forceCollide(d => {
        return d.size*this.state.s+this.state.s/55
      }).strength(1))
      this.sim.alpha(1).restart()
    }
  }

  updateForce() {
    this.labels
      .attr("x", d => {return d.x})
      .attr("y", d => {return d.y+d.size*this.state.s/6})
    this.bubbles
      .attr("cx", d => {return d.x})
      .attr("cy", d => {return d.y})
  }

  componentWillUnmount() {
    this.sim.stop()
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <div id='bubbleChart'>
      </div>
    );
  }
}

export default Bubbles;
