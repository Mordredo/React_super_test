import React from "react";
import Box from "@material-ui/core/Box";
import { useRouteMatch } from "react-router-dom";

import TableBlock from "../table/Table";
import ViewTableElement from "./CreateViewTableElement";
import PaginationControlled from "../../pagination/Pagination";
import AddNewIcon from "../../../icons/AddNewIcon";

import headTableContent from "../table/tableHead.mock";
import infoList from "./createView.mock";

const CreateView = () => {
  const paginationCount = Math.ceil(infoList.length / 5);
  const headTitles = headTableContent.tableHeadTitle.viewsTitles;
  const path = useRouteMatch();

  return (
    <Box>
      <TableBlock
        content={infoList}
        element={ViewTableElement}
        headTitle={headTitles}
        headBtnImg={AddNewIcon}
      />
      <PaginationControlled count={paginationCount} pagePath={path} />
    </Box>
  );
};

export default CreateView;
