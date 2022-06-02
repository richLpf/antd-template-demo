import React, { useState } from "react";
import { Form, Input, Button, Card, PageHeader, Row, Col } from "antd";
import {
  UserOutlined,
  LockOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import code from "../../assets/images/code.png";

function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    delete values.remember;
    toLogin(values);
  };

  const toLogin = (data) => {
    sessionStorage.setItem("username", data.username);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "#";
    }, 1000);
  };

  const toRegister = () => {};

  return (
    <>
      <div style={{ background: "#fff", display: "none" }}>
        <PageHeader
          style={{ width: "80%", margin: "0 auto" }}
          ghost={false}
          title="5G 信息"
          subTitle="5G 信息，不一样的短信"
          extra={[
            <Button
              key="1"
              type="primary"
              size="small"
              onClick={() => toRegister()}
            >
              注册
            </Button>,
          ]}
        ></PageHeader>
      </div>
      <Card
        title={
          <div style={{ textAlign: "center", fontSize: 20 }}>自动发布测试</div>
        }
        style={{ width: 400, margin: "220px auto" }}
      >
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名或手机号,不得超过20个字符",
                whitespace: true,
                max: 20,
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="admin" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "至少8位，必须同时包含数字、字母！",
                whitespace: true,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="admin"
            />
          </Form.Item>
          <Form.Item>
            <Row gutter={8}>
              <Col span={16}>
                <Form.Item
                  name="code"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "请输入验证码",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    prefix={<VerifiedOutlined />}
                    placeholder="请输入验证码"
                  />
                </Form.Item>
              </Col>
              <Col span={8} style={{ textAlign: "right", cursor: "pointer" }}>
                <img className="code-png" src={code} alt="验证码" />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              style={{ width: "100%" }}
              className="login-form-button"
            >
              {loading ? "登陆中..." : "登陆"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default React.memo(Login);
