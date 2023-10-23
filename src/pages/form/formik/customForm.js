import React from "react";
import PropTypes from "prop-types";
import { useFormik, Field } from "formik";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";

const options = ["Ten", "Twenty", "Thirty"];

const MyTextInput = ({ options, formik, ...props }) => {
  return (
    <>
      <FormControl sx={{ mr: 1 }}>
        <InputLabel id="name">name</InputLabel>
        <Field
          as={Select}
          id="name"
          name={props.name["key"]}
          label="Name"
          value={formik.values.customValue.key}
          // onChange={formik.handleChange}
          sx={{ width: 200 }}
        >
          {options.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Field>
      </FormControl>
      <FormControl>
        <Field
          as={TextField}
          type="text"
          name={props.name["value"]}
          // onChange={formik.handleChange}
          value={formik.values.customValue.value}
          // name={field}
          label="Email"
        />
      </FormControl>
    </>
  );
};

MyTextInput.propTypes = {
  options: PropTypes.any,
  formik: PropTypes.any,
  props: PropTypes.any,
  name: PropTypes.string,
};

function CustomForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      customValue: {
        key: "",
        value: "",
      },
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* <MyTextInput 
                name="customValue"
                options={options}
                formik={formik}
            /> */}
        <Button
          sx={{ mt: 2 }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default CustomForm;
