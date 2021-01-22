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
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="#2C5282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default DrowIcon;
