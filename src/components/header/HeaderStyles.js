import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
	headerBtn: {
		color: "#fff",
		backgroundColor: "#D53F8C",
		fontSize: "1.5rem",
		lineHeight: "1.8rem",
		width: "8.2rem",
		height: "3.2rem",
		marginRight: "3rem",
		"&:hover": {
			backgroundColor: "#ED64A6"
		}
	},
}));

const HeaderStyles = () => {
	const classes = useStyles();

	return classes;
};

export default HeaderStyles;