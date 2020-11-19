import React from "react";
import { Grid, InputLabel, InputBase, Box } from "@material-ui/core";

import FormStyles from "../pages/FormStyles";

const InputContainer = (settings) => {
  const classes = FormStyles();
  const type = settings.type;
  const formik = settings.validate;

  return (
    <Grid container direction="column" className={classes.FormInputContainer}>
      <InputLabel className={classes.FormLabel} htmlFor={type}>
        {settings.icon === undefined ? "" : settings.icon}
        {settings.text}
      </InputLabel>
      <InputBase
        id={type}
        name={type}
        type={type}
        onChange={formik.handleChange}
        value={formik.values[type]}
        className={classes.FormInput}
      />
      {formik.touched[type] && formik.errors[type] ? (
        <Box className={classes.FormErrorLabel}>{formik.errors[type]}</Box>
      ) : null}
    </Grid>
  );
};

export default InputContainer;
