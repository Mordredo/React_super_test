import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
	paginItem: {
		"&:hover": {
			backgroundColor: "#2A4365",
			color: "#F7FAFC"
		}
	},
	selected: {
		color: "#F7FAFC"
	}
}));

const PaginationStyles = () => {
	const classes = useStyles();

	return classes;
};

export default PaginationStyles;