import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GridList from  '@material-ui/core/GridList'

import { displayImage } from '../../components/utils'

export default function GalleryTwo(props){
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
     <GridList
        cellHeight={300}
        className={props.galleryStyles.gridList}
        cols={3}
    >
        {query.allFile.edges.map(displayImage)}
     </GridList>
  )

}
