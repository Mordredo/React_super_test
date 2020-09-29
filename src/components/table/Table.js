import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Grid
} from '@material-ui/core';

import DrowIcon from '../../icons/DrowIcon';
import TableStyles from './Styles';
import TableElem from './TableElement';

function TableBlock(params) {
  const [newList] = React.useState(params.content);
  const classes = TableStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Title</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Status</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Stats</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
                <Grid container alignItems="center" justify="flex-end">
					        <Button variant="contained" color="primary" className={classes.tableBtn} startIcon={<DrowIcon color={'#FFFCFE'} width={'2rem'} height={'2rem'} />}>
					        	Add new
					        </Button>
                </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              newList.slice(params.curPage, params.pageList).map((tableElem) => (
                <TableElem key={tableElem.id} param={tableElem} />
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableBlock;
