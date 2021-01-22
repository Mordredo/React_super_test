import * as Yup from "yup";

import schema from "./validateSchemaText";

const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/;
const nameRegex = /^[A-Za-z]+$/;

export default Yup.object().shape({
  password: Yup.string()
    .max(15, schema.passMax)
    .min(8, schema.passMin)
    .required(schema.required)
    .matches(passRegex, schema.passRegex),
  rePass: Yup.string()
    .oneOf([Yup.ref("password"), null], schema.rePass)
    .required(schema.required),
  email: Yup.string().email(schema.email).required(schema.required),
  politics: Yup.boolean().oneOf([true], schema.politics),
  name: Yup.string()
    .required(schema.required)
    .matches(nameRegex, schema.name)
    .max(20, schema.nameMax)
    .min(2, schema.nameMax),
});
