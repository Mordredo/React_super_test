import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
  headerBtn: {
    color: '#fff',
    backgroundColor: '#D53F8C',
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
    width: '8.2rem',
    height: '3.2rem',
    marginRight: theme.spacing(4),
    '&:hover': {
      backgroundColor: '#ED64A6'
    }
  }
}));

export default useStyles;
