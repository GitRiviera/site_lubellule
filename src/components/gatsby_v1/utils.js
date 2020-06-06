import React from "react"

import Img from "gatsby-image"

// Function piped to map() to generate individual thumbnails



export default function displayImage(edge){
  return(
    <Img className="grid-item green-bd"
      fixed={edge.node.childImageSharp.fluid}
      alt="Gatsby Docs are awesome"
    />
  )
}
