import React from "react";
import { Typography, MenuList, MenuItem } from "@material-ui/core";

import ViewIcon from "../../icons/ViewIcon";
import CreateIcon from "../../icons/CreateIcon";
import BlogIcon from "../../icons/BlogIcon";
import FilesIcon from "../../icons/FilesIcon";
import UserIcon from "../../icons/UserIcon";
import SubIcon from "../../icons/SubIcon";
import ArchiveIcon from "../../icons/ArchiveIcon";
import ThemeIcon from "../../icons/ThemeIcon";
import PluginIcon from '../../icons/PluginIcon';
import UpgradeIcon from '../../icons/UpgradeIcon';

import NavbarStyles from './NavbarStyles';

const menuContent = [
	{id: 1, title: 'View site', type:"manage", img: <ViewIcon />},
	{id: 2, title: 'Create page', type:"manage", img: <CreateIcon />},
	{id: 3, title: 'Blog articles', type:"manage", img: <BlogIcon />},
	{id: 4, title: 'Files', type:"manage", img: <FilesIcon />},
	{id: 5, title: 'Users', type:"manage", img: <UserIcon />},
	{id: 6, title: 'Subscription', type:"manage", img: <SubIcon />},
	{id: 7, title: 'Archive pages', type:"manage", img: <ArchiveIcon />},
	{id: 8, title: 'Themes', type:"features", img: <ThemeIcon />},
	{id: 9, title: 'Plugin', type:"features", img: <PluginIcon />},
	{id: 10, title: 'Upgrade plans', type:"features", img: <UpgradeIcon />}
];

function NavbarMenu(){
	const classes = NavbarStyles();
	const [menuContentList] = React.useState(menuContent);

	return (
		<MenuList className={classes.menuList}>
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Manage</Typography>
			{
				menuContentList.map( (menuItem) => {
					if(menuItem.type === 'manage'){
						return (
							<MenuItem key={menuItem.id} className={classes.menuItem}>
								{menuItem.img}
								<Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
							</MenuItem>
						)
					}
				})
			}
			<Typography variant="h6" className={classes.menuTitle} color="textPrimary">Pro features</Typography>
			{
				menuContentList.map( (menuItem) => {
					if(menuItem.type === 'features'){
						return (
							<MenuItem key={menuItem.id} className={classes.menuItem}>
								{menuItem.img}
								<Typography className={classes.menuText} color="primary" variant="body1">{menuItem.title}</Typography>
							</MenuItem>
						)
					}
				})
			}
		</MenuList>
	)
}

export default NavbarMenu;