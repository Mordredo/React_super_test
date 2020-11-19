import React from "react";
import { Grid, Box } from "@material-ui/core";

import EmailIcon from "../../../icons/EmailIcon";
import PassIcon from "../../../icons/PassIcon";
import BigLogoIcon from "../../../icons/BigLogoIcon";
import ButtonItem from "../../multiple/Button";
import validate from "../../../validation/validate";
import InputContainer from "../../multiple/InputContainer";

import FormStyles from "../FormStyles";

const SignupForm = () => {
  const classes = FormStyles();
  const formik = validate();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Box
        className={classes.FormContainer}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <BigLogoIcon />
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className={classes.Form}
        >
          <InputContainer
            type="email"
            icon={<EmailIcon />}
            text="Email Address"
            validate={formik}
          />
          <InputContainer
            type="password"
            icon={<PassIcon />}
            text="Password"
            validate={formik}
          />
          <Grid container justify="space-between" alignItems="center">
            <ButtonItem
              variant="text"
              text="Forgot password?"
              styles={classes.FormForgotPassBtn}
              link="/new-pass"
            />
            <ButtonItem
              variant="contained"
              type="submit"
              text="Sign in"
              styles={classes.FormSignInBtn}
            />
          </Grid>
          <Grid container>
            <ButtonItem
              variant="outlined"
              text="Don’t have & account?"
              styles={classes.FormNewAccountBtn}
              link="/registration"
            />
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};
export default SignupForm;
