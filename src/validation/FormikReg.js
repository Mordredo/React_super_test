import { useFormik } from "formik";

const FormikLogin = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      rePass: "",
      politics: "",
      password: "",
      email: "",
    },
  });

  return formik;
};
export default FormikLogin;
