import { useFormik } from "formik";

const FormikLogin = () => {
  const token = Math.random().toString(36).substr(2);

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
  });

  return formik;
};
export default FormikLogin;
