import { useFormik } from "formik";

const FormikLogin = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
  });

  return formik;
};
export default FormikLogin;
