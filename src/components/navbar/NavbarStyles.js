import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
	menuList: {
		padding: "7.2rem 7rem",
		backgroundColor: "#E5E5E5",
		height: "100%",
		"&:active": {
			border: "none"
		}
	},
	menuItem: {
		padding: "0",
		marginBottom: "3.1rem",
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	menuTitle: {
		marginBottom: "3rem",
	},
	menuText: {
		marginLeft: "1.3rem",
		transition: "0.2s linear",
		"&:hover": {
			fontWeight: "900",
		}
	}
}));

const NavbarStyles = () => {
	return useStyles();
};

export default NavbarStyles;