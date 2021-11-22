/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-19 18:06:12
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { Fragment, useState } from "react";
import { Form, Input, Button, Row, Col, Select, Drawer } from "antd";
import CardItem from "./card-item";
import UploadBox from "../../../components/upload";
import MessageBack from "../../../components/MessageBack";
import BoxButton from "../../../components/BoxButton";
import FodderList from "../../fodder/list"
import { formItemLayout, categoryList, templateTypeList } from "../../../utils/const"

const { Option } = Select;
const { TextArea } = Input

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
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
          type: "img",
        },
        height: 1,
        desc: "卡片信息描述内容",
        buttonList: [],
      }
    ],
    backMessage: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [cardList, setCardList] = useState([{
    title: `卡片1`,
    media: {
      name: "",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
      type: "img",
    },
    height: 1,
    desc: "卡片信息描述内容",
    buttonList: [],
  }]);

  const [fodderVisible, setFodderVisible] = useState(false)

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

  const handleSelect = (val) => {
    console.log("val", val)
    setFodderVisible(false)
  }

  const handleSelectFodder = (val, index) => {
    console.log("val", val, index)
    setFodderVisible(true)
  }

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
          rules={[{ required: true, message: "请上传模版封面!" }]}
        >
          <UploadBox />
        </Form.Item>
        {formData.templateType === "3"?<Form.Item 
          label="媒体文件"
        >
          <Row gutter={6}>
            <Col span={12}>
              <Form.Item name="MediaFile" rules={[{ required: true, message: "请上传媒体文件!" }]} noStyle>
                <Input placeholder="请选择媒体文件" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={()=>setFodderVisible(true)}>选择</Button>
            </Col>
          </Row>
        </Form.Item>:null}
        {formData.templateType === "4"?<Form.Item 
          label="文本内容" 
          name="text" 
          rules={[{ required: true, message: "请输入文本内容!" }]}
        >
          <TextArea rows={3} style={{width: 360}} maxLength={120} showCount placeholder="请输入文本内容"/>
        </Form.Item>:null}
        {["1", "2"].includes(formData.templateType)?<Form.Item label="选择卡片">
          <CardItem onChange={changeCard} formData={formData} handleSelectFodder={handleSelectFodder} />
        </Form.Item>:null}
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
      <Drawer
        title="我的素材"
        width={"70%"}
        onClose={()=>setFodderVisible(false)}
        visible={fodderVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <FodderList handleSelect={handleSelect}/>
      </Drawer>
    </Fragment>
  );
}

export default AddTemplate;
