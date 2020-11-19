import React from "react";
import { Grid, Avatar, AppBar } from "@material-ui/core";

import avatar from "../../images/avatar.png";
import HeaderStyles from "./Styles";
import LogoIcon from "../../icons/LogoIcon";
import ButtonItem from "../multiple/Button";

const Header = () => {
  const classes = HeaderStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Grid container>
        <Grid xs={6} container item justify="flex-start" alignItems="center">
          <LogoIcon />
        </Grid>
        <Grid xs={6} container item justify="flex-end" alignItems="center">
          <ButtonItem text="Pro plan" styles={classes.headerBtn}></ButtonItem>
          <Avatar src={avatar} alt="avatar" className={classes.avatar} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
