import React from 'react';
import {Typography, MenuList, MenuItem} from '@material-ui/core';

import NavbarStyles from './Styles';
import menuContent from './navbar.mock';

const NavbarMenu = () => {
  const classes = NavbarStyles();
  const manageType = 'manage';
  const featuresType = 'features';

  return (
    <MenuList className={classes.menuList}>
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Manage</Typography>
			{
        menuContent.map((menuItem) => {
				  if (menuItem.type === manageType) {
				    return (
							<MenuItem key={menuItem.id} className={classes.menuItem} disableGutters={true} disableTouchRipple={true}>
								{menuItem.img}
								<Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
							</MenuItem>
				    );
				  }
        })
			}
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Pro features</Typography>
			{
        menuContent.map((menuItem) => {
				  if (menuItem.type === featuresType) {
				    return (
							<MenuItem key={menuItem.id} className={classes.menuItem} disableGutters={true} disableTouchRipple={true}>
								{menuItem.img}
								<Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
							</MenuItem>
				    );
				  }
        })
			}
		</MenuList>
  );
};

export default NavbarMenu;
