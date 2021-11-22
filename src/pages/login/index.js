/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-19 16:30:25
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { Fragment, useState, useEffect } from "react";
import { Form, Input, Button, Card, PageHeader, Row, Col } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FieldNumberOutlined,
} from "@ant-design/icons";
import loginBg from "../../assets/images/test.jpg";
import code from "../../assets/images/code.png";
// import * as Api from "../../api"
// import * as Action from "src/store/Action";
// import { connect } from "react-redux";
// import { saveStorage, clearStorage } from "src/storages"

function Login() {
  const bgStyle = {
    overflow: "hidden",
    background: `url(${loginBg}) no-repeat`,
    backgroundSize: "100% 100%",
    height: "100vh",
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 清空session和store
    // clearStorage("userInfo")
    // eslint-disable-next-line
  }, []);

  const onFinish = (values) => {
    delete values.remember;
    toLogin(values);
  };

  const toLogin = (data) => {
    console.log("data", data)
    sessionStorage.setItem("username", data.username)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 1000);
    // Api.Login(data).then(res => {
    // const { RetCode, Message } = res
    // if(RetCode !== 0){
    // setLoading(false)
    // message.error(Message)
    // }else{
    // setLoading(false)
    // message.success("登陆成功")
    // saveStorage("userInfo", {...Data})
    // message.success("登陆成功")
    // ChangeLoginState({userInfo: {...Data}})
    // const search = window.location.search
    // if(search){
    // window.location.href = search.split("=")[1]
    // return
    // }
    // window.location.href = "/"
    // }
    // }).catch(err => {
    // message.error(String(err))
    // setLoading(false)
    // })
  };

  const toRegister = () => {};

  return (
    <Fragment>
      <div style={bgStyle}>
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
            <div style={{ textAlign: "center", fontSize: 20 }}>
              5G 消息平台登陆
            </div>
          }
          style={{ width: 400, margin: "220px auto" }}
          bordered={false}
        >
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名或手机号,不得超过20个字符", whitespace: true, max: 20 }]}
            >
              <Input prefix={<UserOutlined />} placeholder="用户名/手机号" />
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
                placeholder="请输入登录密码"
              />
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={16}>
                  <Form.Item
                    name="code"
                    noStyle
                    rules={[{ required: true, message: "请输入验证码", whitespace: true }]}
                    
                  >
                    <Input
                      prefix={<FieldNumberOutlined />}
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
      </div>
    </Fragment>
  );
}

export default Login;
