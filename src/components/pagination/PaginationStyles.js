import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(({
  paginItem: {
    '&:hover': {
      backgroundColor: '#2A4365 !important',
      color: '#F7FAFC !important'
    }
  },
  selected: {
    color: '#F7FAFC'
  }
}));

const PaginationStyles = () => useStyles();

export default PaginationStyles;
