/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 13:54:37
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { Fragment, useState } from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import CardItem from "./card-item";
import UploadBox from "../../../components/upload";
import MessageBack from "../../../components/MessageBack";
import BoxButton from "../../../components/BoxButton";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const categoryList = [
  {
    label: "游戏",
    value: "1",
  },
  {
    label: "汽车",
    value: "2",
  },
  {
    label: "物流",
    value: "3",
  },
];

const templateTypeList = [
  {
    label: "单卡",
    value: "1",
  },
  {
    label: "多卡",
    value: "2",
  },
  {
    label: "文件",
    value: "3",
  },
  {
    label: "文本",
    value: "4",
  },
];

function AddTemplate(props) {
  const { callback, footerButton } = props;

  const initialValues = {
    name: undefined,
    type: "1",
    style: "1",
    templateType: "1",
    cardList: [
      {
        title: `卡片1`,
        media: {
          name: "",
          url: "",
          type: "img",
        },
        height: 1,
        desc: "卡片信息描述内容",
        buttonList: [],
      },
    ],
    backMessage: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [cardList, setCardList] = useState([]);

  const onFinish = (values) => {
    setFormData({ ...values });
    values.cardList = cardList;
    callback(values);
  };

  const onValuesChange = (_, allField) => {
    allField.cardList = cardList;
    setFormData({ ...allField });
    callback(allField);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const changeCard = (val) => {
    setCardList(val.cardList);
    callback({ ...formData, ...val });
  };

  return (
    <Fragment>
      <Form
        {...formItemLayout}
        name="basic"
        initialValues={initialValues}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="small"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="模版名称"
              name="name"
              labelCol={{ span: 6 }}
              rules={[{ required: true, message: "模版名称必填!" }]}
            >
              <Input style={{ maxWidth: 200 }} placeholder="模版名称必填" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="业务类型"
              name="type"
              labelCol={{ span: 6 }}
              rules={[{ required: true, message: "请选择业务类型!" }]}
            >
              <Select
                showSearch
                style={{ maxWidth: 200 }}
                placeholder="请选择业务类型"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {categoryList.map((item) => {
                  return (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="模版类型"
              name="templateType"
              labelCol={{ span: 6 }}
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="请选择业务类型"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {templateTypeList.map((item) => {
                  return (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="关键词" name="keyword" labelCol={{ span: 6 }}>
              <Input style={{ width: 200 }} placeholder="请输入关键词" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="卡片样式"
          name="style"
          rules={[{ required: true, message: "请选择卡片样式!" }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value={"1"}>垂直</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="模版封面"
          name="imageUrl"
          rules={[{ required: true, message: "请选择模版封面!" }]}
        >
          <UploadBox />
        </Form.Item>
        <Form.Item label="选择卡片">
          <CardItem onChange={changeCard} />
        </Form.Item>
        <Form.Item label="悬浮按钮" name="footerButtonList">
          <BoxButton onChange={footerButton} maxCount={11} />
        </Form.Item>
        <Form.Item
          label="消息回落"
          name="backMessage"
          rules={[{ required: true, message: "是否消息回落!" }]}
        >
          <MessageBack
            rows={3}
            style={{ width: 300 }}
            showCount
            maxLength={120}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default AddTemplate;
