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
      width: (props) => (props.bodyCellWidth ? props.bodyCellWidth : 'auto')
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
    color: (props) => props.statusColor,
    '&.error-status': {
      border: (props) => (props.errorColor ? `0.2rem solid ${props.errorColor}` : 'none'),
      color: (props) => (props.errorColor ? props.errorColor : 'none'),
      backgroundColor: (props) => (props.errorBg ? props.errorBg : 'transparent')
    },
    '&.warning-status': {
      color: (props) => (props.warningColor ? props.warningColor : 'none'),
      border: (props) => (props.warningColor ? `0.2rem solid ${props.warningColor}` : 'none'),
      backgroundColor: (props) => (props.warningBg ? props.warningBg : 'transparent')
    },
    '&.success-status': {
      border: (props) => (props.successColor ? `0.2rem solid ${props.successColor}` : 'none'),
      color: (props) => (props.successColor ? props.successColor : 'none'),
      backgroundColor: (props) => props.successBg
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
  },
  tableBodyAuthor: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(3)
  }
}));

export default useStyles;
