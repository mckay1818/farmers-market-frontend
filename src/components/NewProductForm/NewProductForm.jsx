import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./NewProductForm.css";

const NewProductForm = () => {
  const [error, setError] = useState(null);
  const [creationConfirmed, setCreationConfirmed] = useState(null);
  const { currentUser, username } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      description: "",
      // img: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").max(20, "max 20 characters"),
      price: Yup.number()
        .required("Required")
        .min(1, "Items must be priced at 1 token minimum"),
      quantity: Yup.number().required("Required").min(1, "Required"),
      description: Yup.string().required("Required"),
      // img:
    }),
    onSubmit: (values) => {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/sellers/${username}/products`,
          values,
          {
            headers: { Authorization: `Bearer ${currentUser}` },
          }
        )
        .then((response) => {
          setError(null);
          setCreationConfirmed(response.data);
        })
        .catch((e) => {
          console.log(e);
          setError(e.response.data.message);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form" id="new-product-form">
      {error ? <span className="errors">{error}</span> : null}
      {creationConfirmed ? (
        <span className="conf-msg">{creationConfirmed}</span>
      ) : null}

      <div className="form-fields">
        <label htmlFor="name">Product Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          className="new-product-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="price">Price: </label>
        <input
          id="price"
          name="price"
          type="number"
          className="new-product-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="errors">{formik.errors.price}</div>
        ) : null}

        <label htmlFor="quantity">Quantity: </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          className="new-product-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.quantity}
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <div className="errors">{formik.errors.quantity}</div>
        ) : null}

        <label htmlFor="description">Product description: </label>
        <input
          id="description"
          name="description"
          type="text"
          className="new-product-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="errors">{formik.errors.description}</div>
        ) : null}
      </div>

      <button type="submit" id="new-product-btn">
        Add product to store
      </button>
    </form>
  );
};

export default NewProductForm;
