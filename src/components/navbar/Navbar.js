import React from "react";
import { Typography, MenuList, MenuItem } from "@material-ui/core";

import viewIcon from '../../images/home-icon.svg';
import createIcon from '../../images/create-icon.svg';
import blogIcon from '../../images/blog-icon.svg';
import fileIcon from '../../images/files-icon.svg';
import userIcon from '../../images/users-icon.svg';
import subIcon from '../../images/subscriptions-icon.svg';
import archiveIcon from '../../images/archive-icon.svg';
import themeIcon from '../../images/themes-icon.svg';
import pluginIcon from '../../images/plugins-icon.svg';
import upgradeIcon from '../../images/upgrade-icon.svg';

import NavbarStyles from './NavbarStyles'

const menuContent = [
	{id: 1, title: 'View site', type:"manage", img: viewIcon},
	{id: 2, title: 'Create page', type:"manage", img: createIcon},
	{id: 3, title: 'Blog articles', type:"manage", img: blogIcon},
	{id: 4, title: 'Files', type:"manage", img: fileIcon},
	{id: 5, title: 'Users', type:"manage", img: userIcon},
	{id: 6, title: 'Subscription', type:"manage", img: subIcon},
	{id: 7, title: 'Archive pages', type:"manage", img: archiveIcon},
	{id: 8, title: 'Themes', type:"features", img: themeIcon},
	{id: 9, title: 'Plugin', type:"features", img: pluginIcon},
	{id: 10, title: 'Upgrade plans', type:"features", img: upgradeIcon}
];

function NavbarMenu(){
	const classes = NavbarStyles();
	const [menuContentList] = React.useState(menuContent);

	return (
		<MenuList className={classes.menuList}>
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Manage</Typography>
			{
				menuContentList.map( (elem) => {
					if(elem.type === 'manage'){
						return (
							<MenuItem key={elem.id} className={classes.menuItem}>
								<img className={classes.menuImg} src={elem.img} alt="logo"/>
								<Typography className={classes.menuText} color="primary" variant="body1">{elem.title}</Typography>
							</MenuItem>
						)
					}
				})
			}
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Pro features</Typography>
			{
				menuContentList.map( (elem) => {
					if(elem.type === 'features'){
						return (
							<MenuItem key={elem.id} className={classes.menuItem}>
								<img className={classes.menuImg} src={elem.img} alt="logo"/>
								<Typography className={classes.menuText} color="primary" variant="body1">{elem.title}</Typography>
							</MenuItem>
						)
					}
				})
			}
		</MenuList>
	)
}

export default NavbarMenu;