import React from 'react';
import {Typography, MenuList, MenuItem} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import NavbarStyles from './Styles';
import menuContent from './navbar.mock';
import * as types from '../../constants/navTypes';

const NavbarMenu = () => {
  const classes = NavbarStyles();

  return (
    <MenuList className={classes.menuList}>
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Manage</Typography>
			{
        menuContent.map((menuItem) => {
				  if (menuItem.type === types.manageType) {
				    return (
							<MenuItem key={menuItem.id} className={classes.menuItem} disableGutters={true} disableTouchRipple={true}>
								{menuItem.img}
                <NavLink to={`/${menuItem.link}/page=1`} className={classes.navLink} activeClassName="selected">
                  <Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
                </NavLink>
							</MenuItem>
				    );
				  }
        })
			}
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Pro features</Typography>
			{
        menuContent.map((menuItem) => {
				  if (menuItem.type === types.featuresType) {
				    return (
							<MenuItem key={menuItem.id} className={classes.menuItem} disableGutters={true} disableTouchRipple={true}>
								{menuItem.img}
                <NavLink to={`/${menuItem.link}/page=1`} className={classes.navLink} activeClassName="selected">
                  <Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
                </NavLink>
							</MenuItem>
				    );
				  }
        })
			}
		</MenuList>
  );
};

export default NavbarMenu;
