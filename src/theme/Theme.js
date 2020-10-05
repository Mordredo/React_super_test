import {createMuiTheme} from '@material-ui/core';

import breakpoints from './breakpoints';
import overrides from './overrides';
import props from './props';
import typography  from './typography';
import palette  from './palette';

const theme = createMuiTheme({
  breakpoints: breakpoints,
  overrides: overrides,
  props: props,
  typography: typography,
  palette : palette
});

export default theme;
