import React from "react";
import { SvgIcon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  svg: {
    width: "2.4rem",
    height: "2.4rem",
    fill: "none",
  },
});

const DrowIcon = () => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox="0 0 24 24" htmlColor="none" className={classes.svg}>
      <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12H15V22"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default DrowIcon;
