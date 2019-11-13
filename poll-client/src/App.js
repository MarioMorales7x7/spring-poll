import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#41b8a8e1",
    marginLeft: theme.spacing(2),
  },
}));

function App() {
   const classes = useStyles();
  return (
    <div className="App">
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h3" align="left" className={classes.title}>
            Spring-Poll
          </Typography>
          <Button color="inherit" href="/login" size="large">Login</Button>
          <Button color="inherit" href="/signup" size="large">Sign-up</Button>
        </Toolbar>
      </AppBar>
    </div>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
