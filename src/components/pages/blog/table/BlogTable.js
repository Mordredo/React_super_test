import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Grid
} from '@material-ui/core';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation
} from 'react-router-dom';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DrowIcon from '../../../../icons/DrowIcon';
import TableStyles from '../../tableAllStyles';
import TableElem from './BlogTableElement';

const TableBlock = (params) => {
  const [newList] = React.useState(params.content);
  const classes = TableStyles();
  const match = useRouteMatch();
  const location = useLocation();
  const tableCount = 5;
  const curTable = location.pathname.slice(location.pathname.length - 1);
  const slicedList = newList.filter((elem, index) => curTable * tableCount > index && index >= (curTable - 1) * tableCount);

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Title</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Status</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
              <Typography variant="subtitle1" className={classes.tableHeadTitle}>Stats</Typography>
            </TableCell>
            <TableCell className={classes.tableCellHead}>
                <Grid container alignItems="center" justify="flex-end">
					        <Button variant="contained" color="primary" className={classes.tableBtn} startIcon={<DrowIcon color={'#FFFCFE'} width={'2rem'} height={'2rem'} />}>
					        	Add new
					        </Button>
                </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Switch>
            <Route key={curTable} path={`${match.url}/page=${curTable}`}>
            {
              slicedList.map((newTableElem) => (
                <TableElem key={newTableElem.id} param={newTableElem} />
              ))
            }
            </Route>
          </Switch>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
