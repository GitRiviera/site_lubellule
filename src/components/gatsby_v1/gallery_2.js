import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import displayImage from '../components/utils'



export default function GalleryTwo(){
  const query = useStaticQuery(graphql`{
    allFile(filter: { sourceInstanceName: { eq: "gallery_2" } })
    {
      edges{
        node{
          childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }`)

    return(
      <div>
        {query.allFile.edges.map(displayImage)}
      </div>
    )
}
