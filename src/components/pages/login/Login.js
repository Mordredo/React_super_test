import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Field, Form, Formik } from "formik";

import { useSelector } from "react-redux";

import EmailIcon from "../../../icons/EmailIcon";
import PassIcon from "../../../icons/PassIcon";
import BigLogoIcon from "../../../icons/BigLogoIcon";
import ButtonItem from "../../multiple/Button";
import validate from "../../../validation/FormikLogin";
import InputContainer from "../../multiple/InputContainer";
import sheme from "../../../validation/validateLogin";
import detectUser from "../../../enums/detectUser";

import FormStyles from "../FormStyles";

const Login = () => {
  const classes = FormStyles();
  const formik = validate();
  const userList = useSelector((state) => state.userList);

  const onSubmit = (values) => {
    if (detectUser(values, userList)) {
      console.log("redirect");
    }

    return values;
  };

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
        <Formik
          validationSchema={sheme}
          initialValues={formik.initialValues}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form
              noValidate
              onSubmit={props.handleSubmit}
              className={classes.Form}
              autoComplete="off"
            >
              <Field
                name="email"
                type="email"
                icon={<EmailIcon />}
                text="Email address"
                component={InputContainer}
              />
              <Field
                name="password"
                type="password"
                icon={<PassIcon />}
                text="Password"
                component={InputContainer}
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
                  styles={classes.FormSendBtn}
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
            </Form>
          )}
        </Formik>
      </Box>
    </Grid>
  );
};
export default Login;
