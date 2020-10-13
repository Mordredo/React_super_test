import React from 'react';
import {
  Button, Grid, Avatar, AppBar
} from '@material-ui/core';

import avatar from '../../images/avatar.png';
import logo from '../../images/logo.svg';
import HeaderStyles from './Styles';

const Header = () => {
  const classes = HeaderStyles();

  return (
		<AppBar position="fixed" color="primary">
			<Grid container>
				<Grid xs={6} container item justify="flex-start" alignItems="center">
					<img src={logo} alt="logo"/>
				</Grid>
				<Grid xs={6} container item justify="flex-end" alignItems="center">
					<Button size="medium" className={classes.headerBtn}>Pro plan</Button>
					<Avatar src={avatar} alt="avatar" className={classes.avatar}/>
				</Grid>
			</Grid>
		</AppBar>
  );
};

export default Header;
