/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-15 11:53:34
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { useState } from "react";
import { Form, Input } from "antd";

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
