import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

import * as constants from "../../../store/storeConstants";

const Registration = () => {
  const classes = FormStyles();
  const formik = validate();
  const dispatch = useDispatch();
  const userLength = useSelector((state) => state.userList).length;
  const onSubmit = (values) => {
    const userList = {
      id: userLength + 1,
      fullName: values.name,
      userMail: values.email,
      pass: values.password,
      isAdmin: false,
      sessionToken: "",
    };

    if (Object.keys(userList).length > 0) {
      dispatch({ type: constants.SET_USER, payload: userList });
    }

    window.location.href = "/login";

    return userList;
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
                name="name"
                type="name"
                icon={<UserIcon />}
                text="Full name"
                onChange={props.handleChange}
                component={InputContainer}
              />
              <Field
                name="email"
                type="email"
                icon={<EmailIcon />}
                text="Email address"
                onChange={props.handleChange}
                component={InputContainer}
              />
              <Field
                name="password"
                type="password"
                icon={<PassIcon />}
                text="Password"
                onChange={props.handleChange}
                component={InputContainer}
              />
              <Field
                name="rePass"
                type="password"
                icon={<PassIcon />}
                text="Repeat password"
                onChange={props.handleChange}
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
export default Registration;
