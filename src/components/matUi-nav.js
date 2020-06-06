import React from "react";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
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


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


function TemporaryDrawer(){

  const classes = useStyles();
  const theme = useTheme();
  // create variable open and initialize it to false
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return(
    <div className={classes.root}>
    {
      // collapsible part of the navbar
    }
      <Drawer
         anchor="right"
         variant="persistent"
         open={open}
         classes={{
          paper: classes.drawerPaper,
        }}
        >
        <List>
          <ListItem button>
            <ListItemText>A propos</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Projets</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      {
        // non-collapsible  part of the navbar
      }
      <Drawer
        variant="permanent"
        anchor="right"
      >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {[classes.hide]:open})}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButton, {[classes.hide]:!open})}
            >
              <CloseIcon />
            </IconButton>
         </Toolbar>

       </Drawer>
    </div>
  )
}


export default function MatUi_Navbar(){
  return(
    <Container >
      <TemporaryDrawer/>
    </Container>
  )
}
