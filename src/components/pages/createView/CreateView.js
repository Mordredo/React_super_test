import React from 'react';
import Box from '@material-ui/core/Box';

import TableBlock from './table/CreateViewTable';
import PaginationControlled from '../../pagination/Pagination';

import infoList from './createView.mock';

const CreateView = () => (
    <Box>
      <TableBlock content={infoList}/>
      <PaginationControlled/>
    </Box>
);

export default CreateView;
