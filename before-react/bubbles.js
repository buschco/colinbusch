var data = [
  {
    "name": "PHP",
    "cat": "Lang",
    "size": 0.5
  },
  {
    "name": "Java",
    "cat": "Lang",
    "size": 0.9
  },
  {
    "name": "Javacript",
    "cat": "Lang",
    "size": 0.9
  },
  {
    "name": "Node.js",
    "cat": "Tech",
    "size": 0.8
  },
  {
    "name": "d3",
    "cat": "Tech",
    "size": 0.5
  },
  {
    "name": "reactJS",
    "cat": "Tech",
    "size": 0.8
  },
  {
    "name": "React Native",
    "cat": "Tech",
    "size": 0.8
  },
  {
    "name": "HTML",
    "cat": "Tech",
    "size": 0.6
  },
  {
    "name": "AWS",
    "cat": "Tool",
    "size": 0.5
  },
  {
    "name": "expressjs",
    "cat": "Tech",
    "size": 0.8
  },
  {
    "name": "Bootstrap",
    "cat": "Tech",
    "size": 0.6
  },
  {
    "name": "C",
    "cat": "Lang",
    "size": 0.5
  },
  {
    "name": "CSS",
    "cat": "Tech",
    "size": 0.6
  },
  {
    "name": "git",
    "cat": "Tool",
    "size": 0.6
  },
  {
    "name": "TeX",
    "cat": "Tech",
    "size": 0.7
  },
  {
    "name": "Unix Shell",
    "cat": "Tool",
    "size": 0.7
  },
  {
    "name": "SVG",
    "cat": "Tech",
    "size": 0.8
  },
  {
    "name": "electron",
    "cat": "Tech",
    "size": 0.4
  },
  {
    "name": "npm",
    "cat": "Tool",
    "size": 0.8
  }
]
var data2 = []
var h = window.innerHeight;
var w = window.innerWidth;
var s = w<=h ? (w/h)* window.innerWidth/6 : (h/w)*window.innerHeight/6;

document.getElementById("bub").onclick = handler

var svg = d3.select("#bubbleChart")
  .append("svg")
  .attr("height", w<=h ? h/2 : h-3*s)
  .attr("width", screen.width-s);

var sim = d3.forceSimulation()
sim.force("x", d3.forceX(0).strength(0.004))
sim.force("y", d3.forceY(0).strength(0.004))
sim.force("collide", d3.forceCollide(function(d) {
  return d.size*s+s/55
}).strength(1))

svg
  .append("text")
  .attr("alignment-baseline", "central")
  .attr("font-size", s/2)
  .attr("y",s)
  .text("I worked with...")

svg = svg.append("g").attr("id","group").style("transform", "translate(50%, 50%)")
// var bubbles = svg
//   .selectAll(".bubble")
//   .data(data.splice(0,1))
//   .enter()
//   .append("circle")
//   .attr("class", "bubble")
//   .attr("r", function(d) {return d.size*s})
//   .attr("fill", function(d) {
//     if(d.cat==="Lang") return "#3454D1"
//     if(d.cat==="Tech") return "#34D1BF"
//     if(d.cat==="Tool") return "#AEADF0"
//     else return "red"
//   })

// var labels = svg
// 	.selectAll(".labels")
//   .data(data.splice(0,1))
//   .enter()
//   .append("text")
//   .attr("alignment-baseline", "central")
//   .attr("text-anchor", "middle")
//   .attr("font-size", function(d) {
//     return d.size*s / 3
//   })
// 	.text(function(d) {
//     return d.name
//   })
var bubbles
function update() {
  // labels.attr("x", function(d) {return d.x})
  // .attr("y", function(d) {return d.y+d.size*s/6})
  bubbles.attr("cx", function(d) {return d.x})
  .attr("cy", function(d) {return d.y})
}
handler()
function handler(){
  getData()
  bubbles =
    svg
      .selectAll(".bubble")
      .data(data2)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("r", function(d) {return d.size*s})
      .attr("fill", function(d) {
        if(d.cat==="Lang") return "#3454D1"
        if(d.cat==="Tech") return "#34D1BF"
        if(d.cat==="Tool") return "#AEADF0"
        else return "red"
      })
  sim.nodes(data2).on("tick", update)
  sim.restart()
}

function getData() {
  var next = data.splice(0,1)[0]
  data2.push(next)
  return next
}

// setTimeout(function () {
//   sim.stop()
// }, 2000);
