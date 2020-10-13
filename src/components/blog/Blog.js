import React from 'react';
import Grid from '@material-ui/core/Grid';

import TableBlock from '../table/Table';
import NavbarMenu from '../navbar/Navbar';
import PaginationControlled from '../pagination/Pagination';

import AppStyles from '../../AppStyles';
import infoList from './blog.mock';

const Blog = () => {
  const classes = AppStyles();

  return (
      <Grid container justify="center" alignItems="stretch" className={classes.fullHeight}>
        <Grid item xs={2}>
          <NavbarMenu/>
        </Grid>
        <Grid item xs={10}>
          <TableBlock content={infoList}/>
          <PaginationControlled/>
        </Grid>
      </Grid>
  );
};

export default Blog;
