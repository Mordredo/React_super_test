import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[100],
  },
  FormContainer: {
    maxWidth: "43.6rem",
    width: "100%",
  },
  Form: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(4, 5),
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    width: "100%",
  },
  FormLabel: {
    fontSize: "2rem",
    color: theme.palette.primary.main,
    lineHeight: "2.3rem",
    position: "relative",
    transform: "inherit",
  },
  FormInputContainer: {
    position: "relative",
    width: "100%",
  },
  FormInput: {
    backgroundColor: theme.palette.grey[200],
    margin: theme.spacing(3, 0),
    height: "7rem",
    borderRadius: "1rem",
    fontSize: "2rem",
    paddingLeft: theme.spacing(2),
    color: theme.palette.primary.main,
    border: "none",
  },
  FormSendBtn: {
    marginTop: theme.spacing(2),
    fontSize: "2rem",
    lineHeight: "2.3rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: "7rem",
    width: "45%",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  FormForgotPassBtn: {
    marginTop: theme.spacing(2),
    fontSize: "2rem",
    lineHeight: "2.3rem",
    color: theme.palette.lightBlue.main,
    textDecoration: "none",
    height: "7rem",
    width: "45%",
  },
  FormNewAccountBtn: {
    border: `0.2rem solid ${theme.palette.primary.main}`,
    width: "100%",
    fontSize: "2rem",
    lineHeight: "2.3rem",
    height: "7rem",
    marginTop: theme.spacing(5),
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  FormErrorLabel: {
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    position: "absolute",
    color: theme.palette.error.main,
    bottom: "0.6rem",
    right: "0",
  },
  FormCheckbox: {
    width: "100%",
    position: "relative",
  },
}));

export default useStyles;
