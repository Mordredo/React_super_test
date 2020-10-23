import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    padding: theme.spacing(0, 5, 6, 6),
    borderCollapse: 'separate',
    borderSpacing: theme.spacing(0, 2)
  },
  tableBodyCell: {
    padding: theme.spacing(4, 0),
    '&:last-of-type': {
      paddingRight: theme.spacing(6)
    },
    '&:first-of-type': {
      paddingLeft: theme.spacing(4),
      width: '45%'
    }
  },
  tableCellHead: {
    padding: theme.spacing(2, 0)
  },
  tableHeadTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  },
  tableRow: {
    backgroundColor: theme.palette.tableRowBg.main,
    margin: theme.spacing(1, 0),
    border: 'none',
    '& > *': {
      borderBottom: 'unset',
      margin: theme.spacing(1, 0)
    }
  },
  tableStatus: {
    width: '12rem',
    height: '3.2rem',
    borderRadius: '5rem',
    '&.error-status': {
      border: `0.2rem solid ${theme.palette.error.main}`,
      color: theme.palette.error.main
    },
    '&.warning-status': {
      border: `0.2rem solid ${theme.palette.warning.main}`,
      color: theme.palette.warning.main
    },
    '&.success-status': {
      border: `0.2rem solid ${theme.palette.success.main}`,
      color: theme.palette.success.main
    }
  },
  tableStatsNum: {
    fontSize: '2rem',
    lineHeight: '2.3rem',
    fontWeight: 'bold'
  },
  tableStatsText: {
    margin: theme.spacing(0, 1)
  },
  tableTitle: {
    fontWeight: 'bold',
    marginBottom: '0.4rem',
    display: 'block',
    width: '100%'
  },
  tableBtn: {
    width: '13.5rem',
    height: '4.2rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  tableBtnImg: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;
