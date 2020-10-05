import React from 'react';
import Grid from '@material-ui/core/Grid';

import TableBlock from '../../components/table/Table';
import NavbarMenu from '../../components/navbar/Navbar';
import PaginationControlled from '../../components/pagination/Pagination';

import AppStyles from '../../AppStyles';
import infoList from './blog.mock';

function Blog() {
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
}

export default Blog;
