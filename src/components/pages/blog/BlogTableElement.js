import React from "react";
import { TableCell, TableRow, Typography, Grid } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import statusViewDetect from "../../../enums/statusView";
import statusDetect from "../../../enums/statusFormat";

import useTableStyles from "../PagesStyles";
import blogStyles from "./Styles";

const TableElem = (elem) => {
  const classes = useTableStyles(blogStyles);
  const viewStatus = statusViewDetect(elem.param.viewsStatus);
  const status = statusDetect(elem.param.status);

  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableBodyCell}>
        <Grid container>
          <Typography
            variant="body1"
            className={classes.tableTitle}
            color="primary"
          >
            {elem.param.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {elem.param.subtitle}
          </Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={` ${status} ${classes.tableStatus}`}
        >
          <Typography variant="subtitle1">{elem.param.status}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center">
          <Typography
            variant="body2"
            className={classes.tableStatsNum}
            color="primary"
          >
            {elem.param.views}
          </Typography>
          <Typography
            variant="body2"
            className={classes.tableStatsText}
            color="textSecondary"
          >
            views
          </Typography>
          {viewStatus}
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="flex-end">
          <MoreHorizIcon color="primary" />
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default TableElem;
