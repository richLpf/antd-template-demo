import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";

function Test() {
  return (
    <>
      <Formik
        initialValues={{ email: "", name: "" }}
        validate={(values) => {
          console.log("values", values);
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Test;
