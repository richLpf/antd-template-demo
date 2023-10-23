import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";

import { Formik, Form, useField, Field, FieldArray } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const initialValues = {
  user: {
    name: "",
    email: "",
  },
  items: [],
};

// And now we can use these
function DynamicForm() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div style={{ marginBottom: "16px" }}>
              <Field
                name="user.name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
              />
              {touched.user?.name && errors.user?.name && (
                <div>{errors.user.name}</div>
              )}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Field
                name="user.email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
              />
              {touched.user?.email && errors.user?.email && (
                <div>{errors.user.email}</div>
              )}
            </div>
            <FieldArray name="items">
              {({ insert, remove, push }) => (
                <>
                  {values.items.length > 0 &&
                    values.items.map((item, index) => {
                      console.log("item", item);
                      return (
                        <div key={index}>
                          <Field
                            name={`items.${index}`}
                            as={TextField}
                            label={`Item ${index + 1}`}
                            variant="outlined"
                            style={{
                              marginBottom: "16px",
                              marginRight: "20px",
                            }}
                          />
                          {touched.items?.[index] && errors.items?.[index] && (
                            <div>{errors.items[index]}</div>
                          )}
                          <Button
                            type="button"
                            variant="contained"
                            color="secondary"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </Button>
                          <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            onClick={() => insert(index, "")}
                          >
                            Add Insert
                          </Button>
                        </div>
                      );
                    })}
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => push("")}
                  >
                    Add Item
                  </Button>
                </>
              )}
            </FieldArray>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

MyTextInput.propTypes = {
  label: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.string,
};

export default DynamicForm;
