import React from 'react';
import {Grid} from '@material-ui/core';

import TableBlock from '../../components/table/Table';
import NavbarMenu from '../../components/navbar/Navbar';
import PaginationControlled from '../../components/pagination/Pagination';

import Context from '../../Context';
import AppStyles from '../../AppStyles';
import infoList from './BlogData';
import CustomTheme from '../../Theme';

const theme = CustomTheme;

function Blog() {
  const classes = AppStyles();
  const rowListLength = 5;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowListLength);
  const paginationCount = Math.ceil(infoList.length / rowListLength);

  const setNextPageRow = (page) => {
    setRowsPerPage(page * rowListLength);
    setPage((page - 1) * rowListLength);
  };

  return (
    <Context.Provider value={{setNextPageRow}}>
      <Grid container justify="center" alignItems="stretch" className={classes.fullHeight}>
        <Grid item xs={2}>
          <NavbarMenu/>
        </Grid>
        <Grid item xs={10}>
          <TableBlock themeList={theme} curPage={page} pageList={rowsPerPage} content={infoList}/>
          <PaginationControlled curPage={page} pageList={rowsPerPage} count={paginationCount}/>
        </Grid>
      </Grid>
    </Context.Provider>
  );
}

export default Blog;
