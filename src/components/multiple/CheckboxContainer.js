import React from "react";
import {
  FormControlLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import FormStyles from "../pages/FormStyles";

const CheckboxContainer = ({ field, form: { touched, errors }, text }) => {
  const classes = FormStyles();
  const type = field.name;

  return (
    <FormGroup className={classes.FormCheckbox}>
      <FormControlLabel control={<Checkbox name={type} />} label={text} />
      {touched[type] && errors[type] ? (
        <FormHelperText className={classes.FormErrorLabel}>
          {errors[type]}
        </FormHelperText>
      ) : null}
    </FormGroup>
  );
};

export default CheckboxContainer;
