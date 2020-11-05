import React from "react";
import {
  Button,
  Grid,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import TableStyles from "../PagesStyles";

const TableHeadComp = (params) => {
  const classes = TableStyles();

  return (
    <TableHead>
      <TableRow>
        {params.headTitle.map((tableTitle, index) => (
          <TableCell key={index} className={classes.tableCellHead}>
            <Typography variant="subtitle1" className={classes.tableHeadTitle}>
              {tableTitle}
            </Typography>
          </TableCell>
        ))}
        <TableCell className={classes.tableCellHead}>
          <Grid container alignItems="center" justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              className={classes.tableBtn}
              startIcon={
                <params.headBtnImg
                  color={"#FFFCFE"}
                  width={"2rem"}
                  height={"2rem"}
                />
              }
            >
              Add new
            </Button>
          </Grid>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComp;
