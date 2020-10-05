import React from 'react';
import {Grid} from '@material-ui/core';
import {Pagination, PaginationItem} from '@material-ui/lab';
import PaginationStyles from './Styles';

const PaginationControlled = () => {
  const classes = PaginationStyles();

  return (
		<Grid container justify="center">
			<Pagination count={3} hideNextButton={true} hidePrevButton={true} page={1} renderItem={(item) => (
				<PaginationItem className={classes.paginItem} classes={{selected: classes.selected}} to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`} {...item}/>)}/>
		</Grid>
  );
};

export default PaginationControlled;
