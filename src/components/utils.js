import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GridListTile from  '@material-ui/core/GridListTile'
// import GridList from  '@material-ui/core/GridList'

// conditionnal col number, alt, title
export function displayImage(edge){
    console.log(edge)
  return(
      <GridListTile key={edge.node.childImageSharp.fluid.src} cols={1}>
        <img src={edge.node.childImageSharp.fluid.src} alt='toto' />
      </GridListTile>
  )
}
