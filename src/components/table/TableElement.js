import React from 'react';
import {TableCell, TableRow, Typography, Menu, MenuItem, Grid, Fade} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TableStyles from './Styles';
import TableData from './StatusData';

const DetectStatus = (status) => {
  switch (status) {
    case TableData.statusData.published.status:
      return TableData.statusData.published.response;
    case TableData.statusData.draft.status:
      return TableData.statusData.draft.response;
    case TableData.statusData.scheduled.status:
      return TableData.statusData.scheduled.response;
    default:
  }
};

const statusImg = new Proxy(TableData.viewData, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return '';
    }
  }
});

function TableElem(tableElem) {
  const classes = TableStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow className={classes.tableRow} >
      <TableCell className={classes.tableBodyCell}>
        <Grid container >
          <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.param.title}</Typography>
          <Typography variant="body2" color="textSecondary">{tableElem.param.subtitle}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="center" className={`${DetectStatus(tableElem.param.status)} ${classes.tableStatus}`}>
          <Typography variant="subtitle1">{tableElem.param.status}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center">
          <Typography variant="body2" className={classes.tableStatsNum} color="primary">{tableElem.param.views}</Typography>
          <Typography variant="body2" className={classes.tableStatsText} color="textSecondary" >views</Typography>
          {statusImg[tableElem.param.viewsStatus]}
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="flex-end">
          <MoreHorizIcon aria-controls="fade-menu" aria-haspopup="true" color="primary" onClick={handleClick}/>
          <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
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
