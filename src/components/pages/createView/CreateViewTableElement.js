import React from "react";
import { TableCell, TableRow, Typography, Grid, Chip } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useTableStyles from "../PagesStyles";
import viewsStyles from "./Styles";

import statusDetect from "../../../enums/statusFormat";

const TableElem = (elem) => {
  const classes = useTableStyles(viewsStyles);
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
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container>
          <Typography
            variant="body2"
            className={classes.tableText}
            color="primary"
          >
            {elem.param.created}
          </Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={`${status} ${classes.tableStatus}`}
        >
          <Typography variant="subtitle1">{elem.param.status}</Typography>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center">
          <Typography variant="body2" color="primary">
            {elem.param.author}
          </Typography>
          <Chip
            label={`${elem.param.authorStatus}`}
            className={classes.tableBodyAuthor}
            color="secondary"
          />
        </Grid>
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        <Grid container alignItems="center" justify="flex-end">
          <MoreHorizIcon
            aria-controls="fade-menu"
            aria-haspopup="true"
            color="primary"
          />
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default TableElem;
