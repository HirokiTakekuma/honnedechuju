import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Questions from './Questions';
import Header from './Header';
import MenuIcon from '@mui/icons-material/Menu';

import Signup from './Signup';



const useStyle = makeStyles( () => ({

  conatiner: {
    height: "100vh"
  },

  home: {
    height: "90vh"
  }

}));


const App = () => {
  const classes = useStyle();
  return (
    <Router>
      <Grid container className={classes.container} direction="column" justifyContent="space-between">
        <Grid item contaimer>
          <Header />
        </Grid>
        <Grid item container className={classes.home}>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              {/* <Route path="/" strict>
                <Questions />
              </Route> */}
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </Router>
  )
}

export default App;
