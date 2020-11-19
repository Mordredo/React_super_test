import { useFormik } from "formik";

const SignupForm = () => {
  const Yup = require("yup");
  const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/;
  const token = Math.random().toString(36).substr(2);

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(8, "Must be at least 8 characters")
        .required("Required field")
        .matches(
          passRegex,
          "Must be one number, uppercase and lowercase letter"
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required field"),
    }),
    onSubmit: () => {
      sessionStorage.setItem("token", token + token);
      window.location.href = "/";
    },
  });

  return formik;
};
export default SignupForm;
