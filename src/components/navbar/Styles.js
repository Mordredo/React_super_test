import {makeStyles} from '@material-ui/core';

export default makeStyles( (theme) => ({
  menuList: {
    padding: theme.spacing(9),
    backgroundColor: '#E5E5E5',
    height: '100%'
  },
  menuItem: {
    marginBottom: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  menuTitle: {
    marginBottom: theme.spacing(3),
  },
  menuText: {
    marginLeft: theme.spacing(2),
    transition: '0.2s linear',
    '&:hover': {
      fontWeight: '900'
    }
  }
}));

