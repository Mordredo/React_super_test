import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Menu, MenuItem, Grid, Fade  } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import DrowIcon from "../../icons/DrowIcon";
import StatsUp from "../../icons/StatsUp";
import StatsDown from "../../icons/StatsDown";
import TableStyles from './TableStyles'

const DetectStatus = (status) => {
  switch(status){
    case "Published":
      return "success-status";
    case "Draft":
      return "error-status";
    case "Scheduled":
      return "warning-status";
    default:
  }
};

const DetectViewsStatus = (viewStatus) => {
  switch(viewStatus){
    case "up":
      return (
		  <StatsUp />
      );
    case "":
      return "";
    case "down":
      return (
        <StatsDown />
      );

    default:
  }
};

function TableBlock(params){
    const [newList] = React.useState(params.content);
    const classes = TableStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

    const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    	setAnchorEl(null);
    };

  return(
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
                <Grid container direction="row" alignItems="center" justify="flex-end">
					<Button variant="contained" color="primary" className={classes.tableBtn} startIcon={<DrowIcon />}>
						Add new
					</Button>
                </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              newList.slice(params.curPage ,params.pageList).map( (tableElem) => {
                return (
                  <TableRow key={tableElem.id} className={classes.tableRow} >
                    <TableCell className={classes.tableBodyCell + ' ' + classes.tableBodyCellTitle}>
                      <Grid container direction="column" >
						  <Typography variant="body1" className={classes.tableTitle} color="primary">{tableElem.title}</Typography>
						  <Typography variant="body2" color="textSecondary">{tableElem.subtitle}</Typography>
                      </Grid>
                    </TableCell>
                    <TableCell className={classes.tableBodyCell}>
                        <Grid container direction="row" alignItems="center" justify="center" className={DetectStatus(tableElem.status) + " " + classes.tableStatus}>
							<Typography variant="subtitle1">{tableElem.status}</Typography>
                        </Grid>
                    </TableCell>
                    <TableCell className={classes.tableBodyCell}>
                        <Grid container direction="row" alignItems="center">
							<Typography variant="body2" className={classes.tableStatsNum} color="primary">{tableElem.views}</Typography>
							<Typography variant="body2" className={classes.tableStatsText} color="textSecondary" >views</Typography>
							{DetectViewsStatus(tableElem.viewsStatus)}
                        </Grid>
                    </TableCell>
                    <TableCell className={classes.tableBodyCell + ' ' + classes.tableBodyCellLast}>
                       <Grid container direction="row" alignItems="center" justify="flex-end">
						   <MoreHorizIcon aria-controls="fade-menu" aria-haspopup="true" color="primary" onClick={handleClick}/>
						   <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
							   <MenuItem onClick={handleClose}>Profile</MenuItem>
							   <MenuItem onClick={handleClose}>My account</MenuItem>
							   <MenuItem onClick={handleClose}>Logout</MenuItem>
						   </Menu>
                       </Grid>
                    </TableCell>
                  </TableRow>
                )
              })
            }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBlock;