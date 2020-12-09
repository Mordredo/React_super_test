import { useFormik } from "formik";

const FormikLogin = () => {
  const token = Math.random().toString(36).substr(2);

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: () => {
      sessionStorage.setItem("token", token + token);
      window.location.href = "/";
    },
  });

  return formik;
};
export default FormikLogin;
