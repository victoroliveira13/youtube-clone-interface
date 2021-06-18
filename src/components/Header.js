import React from 'react';
import {
  makeStyles,
  Toolbar,
  AppBar,
  Button,
  IconButton,
  Switch,
} from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import {
  Apps,
  MoreVert,
  AccountCircle,
} from '@material-ui/icons/';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';


export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuIcon}
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <img
          src={
            theme.palette.type === 'dark'
              ? '/images/branco.png'
              : '/images/preto.png'
          }
          alt='logo'
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button
          startIcon={<AccountCircle />}
          variant='outlined'
          color='secondary'
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
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