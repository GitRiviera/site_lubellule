import React from "react";

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    upperFooter:{
        height: '200px',
        backgroundColor:'#FAFAFA',
        textAlign:'center',
        marginTop:'100px',

    },
    lowerFooter:{
        backgroundColor:'#000',
        color: '#fff',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',

    },
    footerRow:{
        border:'1px solid green',
    },
    footerIcons:{
        border: '1px solid #E1E1E1',
    }
}
));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


export default function Footer(){
    const classes = useStyles();
    const theme = useTheme();

  return(
        <Grid container
            className={classes.upperFooter}
        >

            <Grid item
                xs={12}
                className={classes.footerRow}
                >
                <h2>
                Des suggestions ?
                </h2>
                <div>
                   contact@lulu-couture.fr
                </div>
                <Container>
                    <IconButton
                        className={classes.footerIcons}
                    >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton
                        className={classes.footerIcons}
                    >
                        <InstagramIcon/>
                    </IconButton>


                </Container>
            </Grid>

            <Grid item
                xs={12}
                className={classes.lowerFooter}
                >
                <div>
                  CREE PAR UNBLURSTUDIO
                </div>
                <ScrollTop>
                   <Fab  size="small" aria-label="scroll back to top">
                     <KeyboardArrowUpIcon />
                   </Fab>
                 </ScrollTop>
            </Grid>
        </Grid>
  )
}
