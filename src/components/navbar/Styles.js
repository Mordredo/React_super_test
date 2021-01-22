import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  menuList: {
    padding: theme.spacing(9),
    backgroundColor: theme.palette.navBg.main,
    height: "100%",
  },
  menuItem: {
    marginBottom: theme.spacing(3),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& > a": {
      textDecoration: "none",
    },
  },
  navLink: {
    "&.selected > *": {
      fontWeight: "bold",
    },
  },
  menuTitle: {
    marginBottom: theme.spacing(3),
  },
  menuText: {
    marginLeft: theme.spacing(2),
    transition: "0.2s linear",
    "&:hover": {
      fontWeight: "900",
    },
  },
}));
