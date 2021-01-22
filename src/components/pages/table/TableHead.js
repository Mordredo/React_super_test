import React from "react";
import {
  Grid,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import TableStyles from "../PagesStyles";
import ButtonItem from "../../multiple/Button";

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
            <ButtonItem
              text="Add new"
              styles={classes.tableBtn}
              icon={
                <params.headBtnImg
                  color={"#FFFCFE"}
                  width={"2rem"}
                  height={"2rem"}
                />
              }
            ></ButtonItem>
          </Grid>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComp;
