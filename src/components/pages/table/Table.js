import React from 'react';
import {Table, TableBody, TableContainer} from '@material-ui/core';
import {useParams} from 'react-router-dom';

import TableStyles from '../PagesStyles';

import TableHeadComp from './TableHead';

const TableBlock = (params) => {
  const [newList] = React.useState(params.content);
  const classes = TableStyles();
  const tableCount = 5;
  const curTable = useParams().id;
  const slicedList = newList.filter((elem, index) => curTable * tableCount > index && index >= (curTable - 1) * tableCount);

  return (
    <TableContainer>
      <Table className={classes.table}>
      <TableHeadComp headTitle={params.headTitle} headBtnImg={params.headBtnImg} />
        <TableBody>
           {
            slicedList.map((newTableElem) => (
              <params.element key={newTableElem.id} param={newTableElem}/>
            ))
           }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
