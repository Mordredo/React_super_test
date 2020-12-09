import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Field, Form, Formik } from "formik";

import EmailIcon from "../../../icons/EmailIcon";
import PassIcon from "../../../icons/PassIcon";
import UserIcon from "../../../icons/UserIcon";
import BigLogoIcon from "../../../icons/BigLogoIcon";
import ButtonItem from "../../multiple/Button";
import validate from "../../../validation/FormikReg";
import InputContainer from "../../multiple/InputContainer";
import InputCheckbox from "../../multiple/CheckboxContainer";
import sheme from "../../../validation/validateReg";

import FormStyles from "../FormStyles";

const Login = () => {
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
        <Formik
          validationSchema={sheme}
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
        >
          {(props) => (
            <Form
              noValidate
              onSubmit={props.handleSubmit}
              className={classes.Form}
              autoComplete="off"
            >
              <Field
                name="name"
                type="name"
                icon={<UserIcon />}
                text="Full name"
                component={InputContainer}
              />
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
              <Field
                name="rePass"
                type="password"
                icon={<PassIcon />}
                text="Repeat password"
                component={InputContainer}
              />
              <Field
                name="politics"
                text="Politics"
                component={InputCheckbox}
              />

              <Grid container justify="flex-end" alignItems="center">
                <ButtonItem
                  variant="contained"
                  type="submit"
                  text="Register"
                  styles={classes.FormSendBtn}
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
