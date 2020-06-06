import React from "react";

import Img from "gatsby-image"

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';


import Interior11 from '../images/interior-11.jpg'


const useStyles = makeStyles((theme) => ({
  root:{
    height: '100vh',
    maxWidth: '100vw',
    margin: 0,
    padding: 0,
    border: '1px solid red',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBox:{
    width: '500px',
    border: '1px solid #000',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  heroButton:{
    color: '#fff',
    backgroundColor:'#000',
  },

}));





export default function MatUiHeader(){
  const classes = useStyles();
  const theme = useTheme();

  return(
    <Container id="back-to-top-anchor"
      className={classes.root}
    >
      <Box
        className={classes.heroBox}
      >
          <h1>
            La couture avec Lulu
          </h1>
          <div>
            Tutos, astuces et projets
          </div>
          <Button className={classes.heroButton}>Projets</Button>
      </Box>
    </Container>
  )
}
