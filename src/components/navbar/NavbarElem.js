import {MenuItem, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import React from 'react';

import NavbarStyles from './Styles';

const NavbarElem = (menuItem) => {
  const classes = NavbarStyles();
  const item = menuItem.params;

  return (
    <MenuItem className={classes.menuItem} disableGutters={true} disableTouchRipple={true}>
      {item.img}
      <NavLink to={`/${item.link}/page=1`} className={classes.navLink} activeClassName="selected">
        <Typography className={classes.menuText} color="primary" variant="body1">{item.title}</Typography>
      </NavLink>
    </MenuItem>
  );
};

export default NavbarElem;
