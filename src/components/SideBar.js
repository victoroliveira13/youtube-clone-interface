import React from 'react';
import {
  Button,
  List,
  ListItemIcon,
  ListItem,
  Divider,
  Drawer,
  ListItemText,
  ListSubheader,
  Hidden,
  Typography,
  Box,
  Toolbar,
  makeStyles,
} from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import {
  AccountCircle,
} from '@material-ui/icons/';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import QueueIcon from '@material-ui/icons/Queue';
import RestoreIcon from '@material-ui/icons/Restore';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function SideBar({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Início'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Explorar'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Inscrições'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<QueueIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Biblioteca'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<RestoreIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Histórico'} />
            </ListItem>
          </List>

          <Divider />

          <Box p={5} pt={2} pb={2}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
              <Box mt={2}>
                <Button
                  startIcon={<AccountCircle />}
                  variant="outlined"
                  color="secondary"
                >Fazer Login</Button>
              </Box>
            </Typography>
          </Box>

          <Divider />

          <List
            component='nav'
            aria-labelledby='nester-list-subheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subHeader}
              >
                O melhor do youtube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Música'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Esporte'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Jogos'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Filmes'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Notícias'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Ao vivo'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }} primary={'Aprender'} />
            </ListItem>
          </List>

        </div>
      </Drawer>
    </Hidden>
  )
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
    border: 'none',
  },
  listItem: {
    paddingTop: 7,
    paddingBottom: 7,
  },
  listItemText: {
    fontSize: 14,
  },
  subHeader: {
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  paper: {
    boxShadow: '0px 0px 0px 1px rgba(195,195,206,0.8)',
    width: '100vh',
  },
}));