// function template(
//   { template },
//   opts,
//   { componentName, jsx },
// ) {
//   return template.ast`
//     gallery.push(function ${componentName} () {
//       return (
//         ${jsx}
//       )
//     }
//   `
// }
//
// module.exports = template
function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  return template.ast`
    gallery.push(function ${componentName}() {
      return (
        ${jsx}
      )
    })
  `
}

module.exports = template
