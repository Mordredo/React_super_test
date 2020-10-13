import React from 'react';
import {
  TableCell, TableRow, Typography, Grid
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TableStyles from './Styles';
import TableData from './table.mock';
import * as viewStatusConst from '../../constants/viewDataStatus';
import * as statuses from '../../enums/statusFormat';

const DetectViews = (viewStatus) => {
  if (viewStatusConst[viewStatus] !== undefined) {
    return TableData.viewData[viewStatus];
  }
  return '';
};

const statusImg = (f) => new Proxy(f, {
  apply(target, thisArg, args) {
    return target.apply(thisArg, args);
  }
});

const TableElem = (tableElem) => {
  const classes = TableStyles();
  // const handleClick = () => {};
  // const handleClose = () => {};
  const newFun = statusImg(DetectViews);
  const viewStatus = newFun(tableElem.param.viewsStatus);
  const status = tableElem.param.status;
  console.log();
  return (
    <TableRow className={classes.tableRow} >
      <TableCell className={classes.tableBodyCell}>
        <Grid container >
          <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.param.title}</Typography>
          <Typography variant="body2" color="textSecondary">{tableElem.param.subtitle}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="center" className={` ${statuses.statusNew[status]}  ${classes.tableStatus}`}>
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
          {/* <Menu id="fade-menu" keepMounted onClose={handleClose} TransitionComponent={Fade}> */}
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          {/* </Menu> */}
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default TableElem;
