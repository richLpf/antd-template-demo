import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, FieldArray } from "formik";

// TODO: 1、增加useFormik的使用 2、如何显示错误校验和如何校验潜逃字段

export const FriendList = () => (
  <div>
    <Formik
      initialValues={{
        friends: [
          {
            age: 9,
            name: "123",
          },
        ],
      }}
      onSubmit={(values) =>
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
        }, 500)
      }
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values.friends.map((friend, index) => (
                  <div key={index}>
                    {/** both these conventions do the same */}
                    <Field
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                      label="name"
                      as={TextField}
                      name={`friends[${index}].name`}
                    />
                    <Field
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                      label="age"
                      as={TextField}
                      name={`friends.${index}.age`}
                    />
                    <Button onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() => arrayHelpers.push({ name: "", age: "" })}
                >
                  Add
                </Button>
              </div>
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

FriendList.propTypes = {
  label: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.string,
};

export default FriendList;
