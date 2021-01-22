import React from "react";
import {
  InputLabel,
  Input,
  FormHelperText,
  FormControl,
} from "@material-ui/core";

import FormStyles from "../pages/FormStyles";

const InputContainer = ({
  field,
  form: { touched, errors },
  icon,
  ...settings
}) => {
  const classes = FormStyles();
  const type = field.name;

  return (
    <FormControl className={classes.FormInputContainer}>
      <InputLabel className={classes.FormLabel} htmlFor={type} shrink>
        {icon === undefined ? "" : icon}
        {settings.text}
      </InputLabel>
      <Input {...field} {...settings} id={type} className={classes.FormInput} />
      {touched[type] && errors[type] ? (
        <FormHelperText className={classes.FormErrorLabel}>
          {errors[type]}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default InputContainer;
