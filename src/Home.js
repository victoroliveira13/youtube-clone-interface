import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';

import './Home.css';

import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import ContentVideos from './components/ContentVideos.js';

export default function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Box display='flex'>
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ContentVideos darkMode={darkMode} setDarkMode={setDarkMode} />
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 28,
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
}));