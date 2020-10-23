import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Switch, Route, Redirect} from 'react-router-dom';

import Blog from './blog/Blog';
import CreateView from './createView/CreateView';
import NavbarMenu from '../navbar/Navbar';

import AppStyles from '../../AppStyles';

const Pages = () => {
  const classes = AppStyles();

  return (
    <Grid container justify="center" alignItems="stretch" className={classes.fullHeight}>
      <Grid item xs={2}>
        <NavbarMenu/>
      </Grid>
      <Grid item xs={10}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/blog/page=1" />
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/createView">
            <CreateView/>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Pages;
