import React from "react";
import { Table, TableBody, TableContainer } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import TableStyles from "../PagesStyles";

import TableHeadComp from "./TableHead";

const useQuery = () => new URLSearchParams(useLocation().search);

const TableBlock = (params) => {
  const classes = TableStyles();
  const query = useQuery();
  const curPage = query.get("page") == null ? 1 : query.get("page");

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHeadComp
          headTitle={params.headTitle}
          headBtnImg={params.headBtnImg}
        />
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <params.element
              key={params.content[(+curPage - 1) * 5 + index].id}
              param={params.content[(+curPage - 1) * 5 + index]}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
