import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
	table: {
		padding: "0 3.8rem 4.7rem 4.7rem",
		borderCollapse: 'separate',
		borderSpacing: '0 2rem'
	},
	tableBodyCell: {
		padding: "3rem 0",
	},
	tableBodyCellTitle: {
		paddingLeft: "3rem",
		width: '45%'
	},
	tableBodyCellLast: {
		paddingRight: "5rem"
	},
	tableCellHead: {
		padding: '1.6rem 0'
	},
	tableHeadTitle: {
		color: "#2C5282",
		fontWeight: 'bold',
	},
	tableRow: {
		backgroundColor: "#F7FAFC",
		margin: "1rem 0",
		border: "none",
		'& > *': {
			borderBottom: 'unset',
			margin: '1rem 0'
		}
	},
	tableStatus: {
		width: "12rem",
		height: "3.2rem",
		borderRadius: "5rem",
		"&.error-status": {
			border: "0.2rem solid #FC8181",
			color: "#FC8181"
		},
		"&.warning-status": {
			border: "0.2rem solid #FBD38D",
			color: "#FBD38D"
		},
		"&.success-status": {
			border: "0.2rem solid #9AE6B4",
			color: "#9AE6B4"
		}
	},
	tableStatsNum: {
		fontSize: "2rem",
		lineHeight: "2.3rem",
		fontWeight: "bold"
	},
	tableStatsText: {
		margin: "0 0.7rem"
	},
	tableTitle: {
		fontWeight: "bold",
		marginBottom: "0.4rem"
	},
	tableBtn: {
		width: "13.5rem",
		height: "4.2rem",
		'&:hover': {
			backgroundColor: '#2C5282'
		}
	},
	tableBtnImg: {
		marginRight: "1.4rem"
	}
}));

const TableStyles = () => {
	return useStyles();
};

export default TableStyles;