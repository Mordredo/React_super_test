import React from 'react';
import {
  TableCell, TableRow, Typography, Grid, Chip
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TableStyles from '../../tableAllStyles';
import viewsStyles from './Styles';
import statusDetect from '../../../../enums/statusFormat';

const TableElem = (tableElem) => {
  const classes = Object.assign(TableStyles(), viewsStyles());
  const status = statusDetect(tableElem.param.status);

  return (
    <TableRow className={classes.tableRow} >
      <TableCell className={`${classes.tableBodyViewCell} ${classes.tableBodyCell}`}>
        <Grid container >
          <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.param.title}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container >
          <Typography variant="body2" className={classes.tableText} color="primary">{tableElem.param.created}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="center" className={`${status} ${classes.tableStatus} ${classes.tableViewStatus}`}>
          <Typography variant="subtitle1">{tableElem.param.status}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center">
          <Typography variant="body2" color="primary">{tableElem.param.author}</Typography>
          <Chip label={`${tableElem.param.authorStatus}`} className={classes.tableBodyAuthor} color="secondary"/>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="flex-end">
          <MoreHorizIcon aria-controls="fade-menu" aria-haspopup="true" color="primary"/>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default TableElem;
