import { useFormik } from "formik";
import * as Yup from "yup";

const NewProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").max(20, "max 20 characters"),
      price: Yup.number()
        .required("Required")
        .min(1, "Items must be priced at 1 token minimum"),
      quantity: Yup.number().required("Required").min(1, "Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-fields">
        <label htmlFor="name">Product Name: </label>
        <input
          id="name"
          name="name"
          type="text"
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="errors">{formik.errors.description}</div>
        ) : null}
      </div>

      {/* <button type="submit">Add product to store</button> */}
    </form>
  );
};

export default NewProductForm;
