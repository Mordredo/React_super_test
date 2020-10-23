import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableBodyAuthor: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(3)
  },
  tableBodyViewCell: {
    width: 'auto !important'
  },
  tableViewStatus: {
    color: `${theme.palette.common.white}!important`,
    '&.error-status': {
      backgroundColor: theme.palette.error.main
    },
    '&.warning-status': {
      backgroundColor: theme.palette.warning.main
    },
    '&.success-status': {
      backgroundColor: theme.palette.success.main
    }
  }
}));

export default useStyles;
