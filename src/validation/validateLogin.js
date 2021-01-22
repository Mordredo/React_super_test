import * as Yup from "yup";

import schema from "./validateSchemaText";

const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/;

export default Yup.object().shape({
  password: Yup.string()
    .max(15, schema.passMax)
    .min(8, schema.passMin)
    .required(schema.required)
    .matches(passRegex, schema.passRegex),
  email: Yup.string().email(schema.email).required(schema.required),
});
