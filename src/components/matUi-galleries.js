import React from "react";

import GridList from  '@material-ui/core/GridList'
import GridListTile from  '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles';

import GalleryOne from '../components/gallery_queries/galleryOne'
import GalleryTwo from '../components/gallery_queries/galleryTwo'

// styles of gallery here
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    border: '1px solid red',
  },
});

export default function MatUiGalleries(props){
    const classes = useStyles();
    switch(props.index){
        case 0:
            return(
              <GalleryOne galleryStyles={classes}/>
            )
        break;
        case 1:
            return(
              <GalleryTwo galleryStyles={classes}/>
            )
        break;
        case 2:
            return(
              <GalleryOne galleryStyles={classes}/>
            )
        break;
    }
}
