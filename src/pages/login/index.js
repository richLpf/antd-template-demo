import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import Cookies from "js-cookie";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Login as LoginApi } from "../../api";

function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    delete values.remember;
    toLogin(values);
  };

  const toLogin = (data) => {
    sessionStorage.setItem("username", data.username);
    setLoading(true);
    LoginApi({
      name: data.username,
      password: data.password,
    })
      .then((res) => {
        if (res.code === 0) {
          Cookies.set("jwtToken", res.data.token, { expires: 1 });
          Cookies.set("userId", res.data.id, { expires: 1 });
          window.location.href = "/";
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  return (
    <>
      <Card
        title={<div style={{ textAlign: "center", fontSize: 20 }}>登陆</div>}
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
          {/* <Form.Item>
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
          </Form.Item> */}
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
