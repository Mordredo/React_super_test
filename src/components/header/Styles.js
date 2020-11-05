import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerBtn: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.headerBtnBg.main,
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    width: "8.2rem",
    height: "3.2rem",
    marginRight: theme.spacing(4),
    "&:hover": {
      backgroundColor: theme.palette.headerBtnBg.light,
    },
  },
}));

export default useStyles;
