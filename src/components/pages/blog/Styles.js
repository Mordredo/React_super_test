import { makeStyles } from "@material-ui/core";
import CustomTheme from "../../../theme/Theme";
//
// const useStyles = makeStyles((theme) => ({
//   errorColor: theme.palette.error.main,
//   warningColor: theme.palette.error.main,
//   successColor: theme.palette.success.main,
//   bodyCellWidth: "45%",
// }));
//
// export default useStyles;

const theme = CustomTheme;

const useStyles = {
  errorColor: theme.palette.error.main,
  warningColor: theme.palette.error.main,
  successColor: theme.palette.success.main,
  bodyCellWidth: "45%",
};

export default useStyles;
