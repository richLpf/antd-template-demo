import React, { Fragment, useState } from "react";
import { Form, Button, Input, Space, Radio, DatePicker, Switch } from "antd";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};

function AddForm(props) {
  const { selectTemplate } = props;

  const [form] = Form.useForm();
  const [IsDelay, setIsDelay] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleSelectSend = (val) => {
    setIsDelay(val);
  };

  return (
    <Fragment>
      <Form
        form={form}
        name="basic"
        {...layout}
        initialValues={{ name: undefined, templateId: undefined, type: "0", IsDelay: true }}
        onFinish={onFinish}
        size="small"
      >
        <Form.Item
          label="任务名称"
          name="name"
          rules={[{ required: true, message: "请输入任务名称" }]}
        >
          <Input style={{ width: "280px" }} placeholder="请输入任务名称" />
        </Form.Item>
        <Form.Item
          label="发送模版"
          rules={[{ required: true, message: "请选择发送模版!" }]}
        >
          <Form.Item name="templateId" noStyle>
            <Input style={{ width: "280px", marginRight: 20 }} placeholder="请选择模版"/>
          </Form.Item>
          <Space>
            <Button size="small" type="primary" onClick={selectTemplate}>
              选择
            </Button>
            <Button size="small">新增</Button>
          </Space>
        </Form.Item>
        <Form.Item
          label="回落类型"
          name="type"
          rules={[{ required: true, message: "请选择是否回落!" }]}
        >
          <Radio.Group>
            <Radio.Button value="0">不回落</Radio.Button>
            <Radio.Button value="1">回落</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="定时发送"
          name="IsDelay"
          valuePropName="checked"
          rules={[{ required: true, message: "是否定时发送" }]}
        >
          <Switch value={IsDelay} onChange={handleSelectSend} />
        </Form.Item>
        {IsDelay ? (
          <Form.Item
            label="发送时间"
            name="sendTime"
            rules={[{ required: true, message: "选择发送时间!" }]}
          >
            <DatePicker showTime />
          </Form.Item>
        ) : null}
        <Form.Item
          label="发送号码"
          name="SendPhone"
          rules={[{ required: true, message: "输入发送号码" }]}
        >
          <TextArea row={3} style={{ width: "280px" }} placeholder="多个号码，请用英文逗号分开"/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 12,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "50%" }}
            size="small"
          >
            发送
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default AddForm;
