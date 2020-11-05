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
        d="M12 19L19 12L22 15L15 22L12 19Z"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L9.586 9.586"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default DrowIcon;
