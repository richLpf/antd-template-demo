import React from "react";
import { useFormik } from "formik";

// useFormik
const initialValues = { name: "", email: "", phone: "" };
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9]{2,15}$/i.test(values.email)) {
    errors.email = "Must be 15 characters or less";
  }
  return errors;
};

function Test() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      console.log("value", value);
    },
  });

  console.log("formik", formik.getFieldProps("name"));

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">name </label>
          <input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="email">email </label>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="phone">phone </label>
          <input id="phone" name="phone" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Test;
