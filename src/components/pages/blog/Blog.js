import React from 'react';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import TableBlock from './table/BlogTable';
import PaginationControlled from '../../pagination/Pagination';

import infoList from './blog.mock';

const Blog = () => (
    <Box>
      <TableBlock content={infoList}/>
      <PaginationControlled/>
    </Box>
);

export default Blog;
