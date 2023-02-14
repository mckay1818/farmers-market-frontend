import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/login`, values)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e.response.data.message);
          setError(e.response.data.message);
          console.log(error);
        });
      // return redirect("/sellers");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      {error ? <span className="errors">{error}</span> : null}
      <label htmlFor="email">Email Address: </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="errors">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password: </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="errors">{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
