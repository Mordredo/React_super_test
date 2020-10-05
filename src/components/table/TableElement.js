import React from 'react';
import {TableCell, TableRow, Typography, Menu, MenuItem, Grid, Fade} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TableStyles from './Styles';
import TableData from './table.mock';
import * as statuses from '../../constants/statuses';
import * as viewStatusConst from '../../constants/viewDataStatus';

const DetectStatus = (status) => {
  if(status !== undefined){
    return status
  }else{
    console.error('Status element undefined');
  }
};

const DetectViews = (viewStatus) => {
  if(viewStatusConst[viewStatus] !== undefined){
    return TableData.viewData[viewStatus]
  }else{
    return '';
  }
};

const newStatus = DetectStatus(statuses);

const statusImg = (f) => {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      return target.apply(thisArg, args);
    }
  });
};

function TableElem(tableElem) {
  const classes = TableStyles();
  const status = newStatus[tableElem.param.status];
  const handleClick = () => {};
  const handleClose = () => {};
  const newFun = statusImg(DetectViews);
  const viewStatus = newFun(tableElem.param.viewsStatus);

  return (
    <TableRow className={classes.tableRow} >
      <TableCell className={classes.tableBodyCell}>
        <Grid container >
          <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.param.title}</Typography>
          <Typography variant="body2" color="textSecondary">{tableElem.param.subtitle}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="center" className={` ${TableData.statusData[status]} ${classes.tableStatus}`}>
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
          <MoreHorizIcon aria-controls="fade-menu" aria-haspopup="true" color="primary" onClick={handleClick}/>
          <Menu id="fade-menu" keepMounted onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
      </TableCell>
    </TableRow>
  );
}

export default TableElem;
