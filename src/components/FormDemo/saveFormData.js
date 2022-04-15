import React, { useState } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: "Username is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);

CustomizedForm.propTypes = {
  onChange: PropTypes.object,
  fields: PropTypes.object,
};

const Demo = () => {
  const [fields, setFields] = useState([
    {
      name: ["username"],
      value: "Ant Design",
    },
  ]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <pre className="language-bash" style={{ textAlign: "left" }}>
        {JSON.stringify(fields, null, 2)}
      </pre>
    </>
  );
};

export default Demo;
