import React from "react";
import { Row, Col, Card } from "antd";
import Form from "./form";
import Field from "./field";
import UseFormik from "./useFormik";
import YupDemo from "./yup";
import CustomForm from "./customForm";
import DynamicForm from "./DynamicForm";
import DynamicForm1 from "./DynamicForm1";

function Test() {
  const items = [
    {
      key: "1",
      label: "useFormik",
      children: <UseFormik />,
    },
    {
      key: "2",
      label: "form",
      children: <Form />,
    },
    {
      key: "3",
      label: "field",
      children: <Field />,
    },
    {
      key: "4",
      label: "yup",
      children: <YupDemo />,
    },
    {
      key: "5",
      label: "自定义表单",
      children: <CustomForm />,
    },
    {
      key: "6",
      label: "自定义表单: 添加一个数组表单",
      children: <DynamicForm />,
    },
    {
      key: "7",
      label: "自定义表单: 对象表单",
      children: <DynamicForm1 />,
    },
  ];

  return (
    <Row gutter={16}>
      {items.map((item) => {
        return (
          <Col key={item.key} span={24}>
            <Card
              title={item.label}
              style={{
                minHeight: "300px",
                marginBottom: "20px",
              }}
            >
              {item.children}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Test;
