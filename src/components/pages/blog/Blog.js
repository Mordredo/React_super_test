import React from 'react';
import Box from '@material-ui/core/Box';
import {
  Route, Switch, useLocation, useRouteMatch
} from 'react-router-dom';

import TableBlock from '../table/Table';
import PaginationControlled from '../../pagination/Pagination';
import BlogTableElement from './BlogTableElement';
import DrowIcon from '../../../icons/DrowIcon';

import infoList from './blog.mock';
import headTableContent from '../table/tableHead.mock';

const Blog = () => {
  const paginationCount = Math.ceil(infoList.length / 5);
  const headTitles = headTableContent.tableHeadTitle.blogTitles;
  const path = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route path="/blog/page=:id">
          <TableBlock content={infoList} element={BlogTableElement} headTitle={headTitles} headBtnImg={DrowIcon}/>
          <PaginationControlled count={paginationCount} pagePath={path}/>
        </Route>
      </Switch>
    </Box>
  );
};

export default Blog;
