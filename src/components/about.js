import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import clothIllustration from '../images/cloth.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  aboutGrid: {
      border: '1px solid green'
  },
});



export default function About(){
    const query = graphql`
        query {
            file( relativePath : {eq : "images/cloth.jpg"}){
                childImageSharp{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `
    // console.log("GRAPHQL")
    //
    // console.log(query.file)

    const classes = useStyles();

    return(
        <Grid container className={classes.aboutGrid}>
            <Grid item xs={6}>
                <h1>A propos de moi</h1>
            </Grid>
            <Grid item xs={6}>
                <img src={clothIllustration} alt=""/>
            </Grid>
        </Grid>
    )
}
