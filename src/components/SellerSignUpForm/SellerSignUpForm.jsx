import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./SellerSignUpForm.css";

const transformRequest = (values) => {
  const {
    firstName: first_name,
    lastName: last_name,
    email,
    password,
    storeName: store_name,
    storeDescription: store_description,
    address1: address_1,
    city,
    region,
    postalCode: postal_code,
  } = values;
  return {
    first_name,
    last_name,
    email,
    password,
    store_name,
    store_description,
    address_1,
    city,
    region,
    postal_code,
  };
};

const SellerSignUpForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      storeName: "",
      storeDescription: "",
      address1: "",
      city: "",
      region: "",
      postalCode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required").max(20, "max 20 characters"),
      lastName: Yup.string().required("Required").max(20, "max 20 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max(80, "max 80 characters"),
      password: Yup.string().required("Required"),
      storeName: Yup.string().required("Required").max(80, "max 80 characters"),
      storeDescription: Yup.string().required("Required"),
      address1: Yup.string().required("Required").max(80, "max 80 characters"),
      city: Yup.string().required("Required").max(80, "max 80 characters"),
      region: Yup.string().required("Required").max(80, "max 80 characters"),
      postalCode: Yup.string()
        .required("Required")
        .min(5, "Must be exactly 5 digits")
        .max(5, "Must be exactly 5 digits"),
    }),
    onSubmit: (values) => {
      const requestBody = transformRequest(values);
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/sellers/signup`,
          requestBody
        )
        .then((response) => {
          console.log(response);
          alert("user created! returning to sign in page");
          navigate("/login");
        })
        .catch((e) => {
          console.log(e);
          setError(e.response.data.message);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      {error ? <span className="errors">{error}</span> : null}

      <div className="form-fields">
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="errors">{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="errors">{formik.errors.lastName}</div>
        ) : null}

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

        <label htmlFor="storeName">Store Name: </label>
        <input
          id="storeName"
          name="storeName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.storeName}
        />
        {formik.touched.storeName && formik.errors.storeName ? (
          <div className="errors">{formik.errors.storeName}</div>
        ) : null}

        <label htmlFor="storeDescription">Store Description: </label>
        <input
          id="storeDescription"
          name="storeDescription"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.storeDescription}
        />
        {formik.touched.storeDescription && formik.errors.storeDescription ? (
          <div className="errors">{formik.errors.storeDescription}</div>
        ) : null}

        <label htmlFor="address1">Street Address:</label>
        <input
          id="address1"
          name="address1"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address1}
        />
        {formik.touched.address1 && formik.errors.address1 ? (
          <div className="errors">{formik.errors.address1}</div>
        ) : null}

        <label htmlFor="city">City: </label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="errors">{formik.errors.city}</div>
        ) : null}

        <label htmlFor="region">Region: </label>
        <input
          id="region"
          name="region"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.region}
        />
        {formik.touched.region && formik.errors.region ? (
          <div className="errors">{formik.errors.region}</div>
        ) : null}

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div className="errors">{formik.errors.postalCode}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SellerSignUpForm;
