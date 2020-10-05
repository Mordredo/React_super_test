import React from 'react';
import {SvgIcon, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(({
  svg: {
    '& > *': {
      fill: 'transparent'
    }
  }
}));

const DrowIcon = ({ color, width, height, strokeWidth }) => {
  const classes = useStyles();

  return (
		<SvgIcon viewBox="0 0 20 20" width={width} height={height} strokeWidth={strokeWidth} htmlColor="none" className={classes.svg}>
			<path d="M10 15.8333L15.8333 10L18.3333 12.5L12.5 18.3333L10 15.8333Z" stroke={color}
				  strokeLinecap="round" strokeLinecap="round"/>
			<path d="M15 10.8333L13.75 4.58329L1.66663 1.66663L4.58329 13.75L10.8333 15L15 10.8333Z" stroke={color}
				  strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M1.66663 1.66663L7.98829 7.98829" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
			<path
				d="M9.16667 10.8333C10.0871 10.8333 10.8333 10.0871 10.8333 9.16667C10.8333 8.24619 10.0871 7.5 9.16667 7.5C8.24619 7.5 7.5 8.24619 7.5 9.16667C7.5 10.0871 8.24619 10.8333 9.16667 10.8333Z"
        stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
		</SvgIcon>
  );
};

export default DrowIcon;
