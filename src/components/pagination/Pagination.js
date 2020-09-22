import React, {useContext} from "react";
import {Grid} from "@material-ui/core";
import {Pagination, PaginationItem} from "@material-ui/lab";

import Context from "../../Context"
import PaginationStyles from './PaginationStyles'

const PaginationControlled = (params) => {
	var [curPage, setPage] = React.useState(params.curPage);
	const classes = PaginationStyles();
	const {setNextPageRow} = useContext(Context);
	const handleChange = (event, value) => {
		setPage(value);
		setNextPageRow(+event.target.textContent);
	};

	if (curPage === 0) {
		curPage = 1
	}

	return (
		<Grid container direction="row" justify="center">
			<Pagination count={params.count} hideNextButton={true} hidePrevButton={true} page={curPage}
						onChange={handleChange}
						renderItem={(item) => {
							return (
								<PaginationItem className={classes.paginItem} classes={{selected: classes.selected}}
												to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`} {...item}/>
							)
						}}
			/>
		</Grid>
	);
}

export default PaginationControlled;