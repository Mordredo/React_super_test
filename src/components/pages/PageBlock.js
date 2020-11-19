import React from "react";
import { Grid, Box } from "@material-ui/core";

import NavbarMenu from "../navbar/Navbar";

import AppStyles from "../../AppStyles";
import Header from "../header/Header";

const PageBlock = (curPage) => {
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
          <curPage.page />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageBlock;
