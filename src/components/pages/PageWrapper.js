import React from "react";
import { Grid, Box } from "@material-ui/core";

import { Switch, Route } from "react-router-dom";
import NavbarMenu from "../navbar/Navbar";

import AppStyles from "../../AppStyles";
import Header from "../header/Header";
import Blog from "./blog/Blog";
import CreateView from "./createView/CreateView";
import routes from "../../Routes";

const PageWrapper = () => {
  const classes = AppStyles();

  return (
    <Box>
      <Header />
      <Grid
        container
        justify="center"
        alignItems="stretch"
        className={classes.fullHeight}
      >
        <Grid item xs={2}>
          <NavbarMenu />
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route exact path={routes.private.view} component={CreateView} />
            <Route
              path={[routes.private.blog, routes.private.index]}
              component={Blog}
            />
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageWrapper;
