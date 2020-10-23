import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Grid
} from '@material-ui/core';

import AddNewIcon from '../../../../icons/AddNewIcon';
import TableStyles from '../../tableAllStyles';
import TableElem from './CreateViewTableElement';

const TableBlock = (params) => {
  const [newList] = React.useState(params.content);
  const classes = TableStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Page title</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Created</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Status</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Author</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
                <Grid container alignItems="center" justify="flex-end">
					        <Button variant="contained" color="primary" className={classes.tableBtn} startIcon={<AddNewIcon color={'#FFFCFE'} width={'2rem'} height={'2rem'} />}>
                    Add new
					        </Button>
                </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            newList.map((tableElem) => (
              <TableElem key={tableElem.id} param={tableElem} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
