import React from "react";
import { Typography, MenuList, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import NavbarStyles from "./Styles";
import * as types from "../../constants/navTypes";
import NavbarElem from "./NavbarElem";

import menuContent from "./navbar.mock";

const NavbarMenu = () => {
  const classes = NavbarStyles();
  const manageList = menuContent.filter(
    (elem, index) => elem.type === types.manageType
  );
  const featuresList = menuContent.filter(
    (elem, index) => elem.type === types.featuresType
  );

  return (
    <MenuList className={classes.menuList}>
      <Typography
        variant="h6"
        className={classes.menuTitle}
        color="textPrimary"
      >
        Manage
      </Typography>
      {manageList.map((menuItem, index) => (
        <NavbarElem key={index} params={menuItem} />
      ))}
      <Typography
        variant="h6"
        className={classes.menuTitle}
        color="textPrimary"
      >
        Pro features
      </Typography>
      {featuresList.map((menuItem, index) => (
        <NavbarElem key={index} params={menuItem} />
      ))}
    </MenuList>
  );
};

export default NavbarMenu;
