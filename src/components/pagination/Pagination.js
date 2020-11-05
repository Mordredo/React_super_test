import React from "react";
import { Grid } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import PaginationStyles from "./Styles";

const PaginationControlled = (params) => {
  const classes = PaginationStyles();

  if (params.count > 1) {
    return (
      <Grid container justify="center">
        <Pagination
          count={params.count}
          hideNextButton={true}
          hidePrevButton={true}
          page={1}
          renderItem={(item) => (
            <PaginationItem
              className={classes.paginItem}
              classes={{ selected: classes.selected }}
              component={Link}
              to={`${params.pagePath.path}?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Grid>
    );
  }
  return "";
};

export default PaginationControlled;
