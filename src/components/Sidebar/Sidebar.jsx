import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import './Sidebar.css'; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#8e44ad',
  },
  icon: {
    // No specific styles here as they're defined in CSS file
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon className="icon"><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="icon"><CategoryIcon /></ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="icon"><CreateIcon /></ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
