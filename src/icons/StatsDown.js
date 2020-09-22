import React from "react";
import {SvgIcon, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
	svg: {
		width: '2.2rem',
		height: '2.2rem',
		fill: 'none'
	}
}));

const StatsDown = () => {
	const classes = useStyles();

	return (
		<SvgIcon viewBox="0 0 22 22" htmlColor="none" className={classes.svg}>
			<path
				d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
				stroke="#FC8181" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round"/>
			<path d="M7 11L11 15L15 11" stroke="#FC8181" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round"/>
			<path d="M11 7L11 15" stroke="#FC8181" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round"/>
		</SvgIcon>
	)
};

export default StatsDown