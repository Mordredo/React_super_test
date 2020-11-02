import React from 'react';
import {
  TableCell, TableRow, Typography, Grid
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import * as viewStatusConst from '../../../constants/viewDataStatus';
import statusViewDetect from '../../../enums/statusView';
import statusDetect from '../../../enums/statusFormat';

import TableStyles from '../PagesStyles';
import blogStyles from './Styles';

import TableData from '../table/table.mock';

const TableElem = (tableElem) => {
  const classes = TableStyles(blogStyles);
  const viewStatus = statusViewDetect(tableElem.param.viewsStatus);
  const status = statusDetect(tableElem.param.status);

  return (
    <TableRow className={classes.tableRow} >
      <TableCell className={classes.tableBodyCell}>
        <Grid container >
          <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.param.title}</Typography>
          <Typography variant="body2" color="textSecondary">{tableElem.param.subtitle}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="center" className={` ${status} ${classes.tableStatus}`}>
          <Typography variant="subtitle1">{tableElem.param.status}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center">
          <Typography variant="body2" className={classes.tableStatsNum} color="primary">{tableElem.param.views}</Typography>
          <Typography variant="body2" className={classes.tableStatsText} color="textSecondary" >views</Typography>
          {viewStatus}
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
