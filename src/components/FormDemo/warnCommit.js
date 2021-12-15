import React from "react";
import { Form, Input, message, Button, Space } from "antd";

const WarnCommitForm = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
            },
            {
              type: "url",
              warningOnly: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
      </div>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default WarnCommitForm;
