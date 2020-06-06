import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import MatUiGalleries from '../components/matUi-galleries'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function GalleryTabs(){
  const classes = useStyles();
  // const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return(
    <>
        <Tabs
        value={value}
        onChange={handleChange}
        classes={classes.root}
        centered
        >
            <Tab label="Sous-vêtements" />
            <Tab label="Pantalons" />
            <Tab label="Jupes" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <MatUiGalleries index={0}/>
        </TabPanel>
        <TabPanel  value={value} index={1}>
            <MatUiGalleries index={1}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <MatUiGalleries index={2}/>
        </TabPanel>
    </>
  )
}
