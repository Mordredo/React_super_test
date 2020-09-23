import React from 'react';
import {
  createMuiTheme, ThemeProvider, Grid, makeStyles
} from '@material-ui/core';

import TableBlock from './components/table/Table';
import Header from './components/header/Header';
import NavbarMenu from './components/navbar/Navbar';
import PaginationControlled from './components/pagination/Pagination';

import CustomTheme from './Theme';
import Context from './Context';

const theme = CustomTheme;

const useStyles = makeStyles(({
  fullHeight: {
    minHeight: '100vh',
    marginTop: '8rem'
  }
}));

const infoList = [
  {
    id: 1,
    title: 'Design: A Survival Guide for Beginners1',
    subtitle: 'Posted 1 days ago',
    status: 'Published',
    views: '120',
    viewsStatus: 'up'
  },
  {
    id: 2,
    title: 'Design: A Survival Guide for Beginners2',
    subtitle: 'Posted 3 days ago',
    status: 'Draft',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 3,
    title: 'Design: A Survival Guide for Beginners3',
    subtitle: 'Posted 3 days ago',
    status: 'Published',
    views: '80',
    viewsStatus: 'down'
  },
  {
    id: 4,
    title: 'Design: A Survival Guide for Beginners4',
    subtitle: 'Posted 5 days ago',
    status: 'Scheduled',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 5,
    title: 'Design: A Survival Guide for Beginners5',
    subtitle: 'Posted 7 days ago',
    status: 'Published',
    views: '35',
    viewsStatus: 'up'
  },
  {
    id: 6,
    title: 'Design: A Survival Guide for Beginners6',
    subtitle: 'Posted 1 days ago',
    status: 'Published',
    views: '120',
    viewsStatus: 'up'
  },
  {
    id: 7,
    title: 'Design: A Survival Guide for Beginners7',
    subtitle: 'Posted 3 days ago',
    status: 'Draft',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 8,
    title: 'Design: A Survival Guide for Beginners8',
    subtitle: 'Posted 3 days ago',
    status: 'Published',
    views: '80',
    viewsStatus: 'down'
  },
  {
    id: 9,
    title: 'Design: A Survival Guide for Beginners9',
    subtitle: 'Posted 5 days ago',
    status: 'Scheduled',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 10,
    title: 'Design: A Survival Guide for Beginners10',
    subtitle: 'Posted 7 days ago',
    status: 'Published',
    views: '35',
    viewsStatus: 'up'
  },
  {
    id: 11,
    title: 'Design: A Survival Guide for Beginners11',
    subtitle: 'Posted 1 days ago',
    status: 'Published',
    views: '120',
    viewsStatus: 'up'
  },
  {
    id: 12,
    title: 'Design: A Survival Guide for Beginners12',
    subtitle: 'Posted 3 days ago',
    status: 'Draft',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 13,
    title: 'Design: A Survival Guide for Beginners13',
    subtitle: 'Posted 3 days ago',
    status: 'Published',
    views: '80',
    viewsStatus: 'down'
  },
  {
    id: 14,
    title: 'Design: A Survival Guide for Beginners14',
    subtitle: 'Posted 5 days ago',
    status: 'Scheduled',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 15,
    title: 'Design: A Survival Guide for Beginners15',
    subtitle: 'Posted 7 days ago',
    status: 'Published',
    views: '35',
    viewsStatus: 'up'
  },
  {
    id: 16,
    title: 'Design: A Survival Guide for Beginners16',
    subtitle: 'Posted 1 days ago',
    status: 'Published',
    views: '120',
    viewsStatus: 'up'
  },
  {
    id: 17,
    title: 'Design: A Survival Guide for Beginners17',
    subtitle: 'Posted 3 days ago',
    status: 'Draft',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 18,
    title: 'Design: A Survival Guide for Beginners18',
    subtitle: 'Posted 3 days ago',
    status: 'Published',
    views: '80',
    viewsStatus: 'down'
  },
  {
    id: 19,
    title: 'Design: A Survival Guide for Beginners19',
    subtitle: 'Posted 5 days ago',
    status: 'Scheduled',
    views: '0',
    viewsStatus: ''
  },
  {
    id: 20,
    title: 'Design: A Survival Guide for Beginners20',
    subtitle: 'Posted 7 days ago',
    status: 'Published',
    views: '35',
    viewsStatus: 'up'
  }
];

function App() {
  const classes = useStyles();
  const rowListLength = 5;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowListLength);
  const paginationCount = Math.ceil(infoList.length / rowListLength);

  const setNextPageRow = (page) => {
    setRowsPerPage(page * rowListLength);
    setPage((page - 1) * rowListLength);
  };

  return (
		<Context.Provider value={{setNextPageRow}}>
			<ThemeProvider theme={theme}>
				<Header/>
				<Grid container direction="row" justify="center" alignItems="stretch" className={classes.fullHeight}>
					<Grid item xs={2}>
						<NavbarMenu/>
					</Grid>
					<Grid item xs={10}>
						<TableBlock themeList={theme} curPage={page} pageList={rowsPerPage} content={infoList}/>
						<PaginationControlled curPage={page} pageList={rowsPerPage} count={paginationCount}/>
					</Grid>
				</Grid>
			</ThemeProvider>
		</Context.Provider>
  );
}

export default App;
