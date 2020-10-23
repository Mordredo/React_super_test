import React from 'react';
import {Grid, TableRow} from '@material-ui/core';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link, useRouteMatch} from 'react-router-dom';
import PaginationStyles from './Styles';

const PaginationControlled = () => {
  const classes = PaginationStyles();
  const match = useRouteMatch();

  return (
		<Grid container justify="center">
			<Pagination count={3} hideNextButton={true} hidePrevButton={true} page={1} renderItem={(item) => (
				<PaginationItem className={classes.paginItem} classes={{selected: classes.selected}} component={Link} to={`${match.url}/page=${item.page}`} {...item}/>)}/>
		</Grid>
  );
};

export default PaginationControlled;
