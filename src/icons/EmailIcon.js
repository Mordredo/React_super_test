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
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default DrowIcon;
