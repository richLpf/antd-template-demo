import React, { useState, useEffect, Fragment } from "react";
import { Form, Button, Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import FormItemComponent from "../Form/FormItemComponent.js";

export const resetObjectSelect = (object) => {
  return Object.keys(object).map((item) => ({
    label: object[item],
    value: item,
  }));
};

/**
 * 表格过滤器封装
 * @param fields 过滤器配置
 * @param rowCount 首行展示过滤key数量
 * @param defaultValue 默认值，受控
 * @param leftActions 左浮按钮
 * @param rightActions 右浮按钮
 * @function onSearch 回调函数，点击搜索时触发
 */

function TableFilter(props) {
  const {
    fields,
    onSearch,
    rowCount,
    defaultValue,
    leftActions,
    rightActions,
    defaultExpand,
  } = props;

  const [form] = Form.useForm();

  const defaultCount = 4;
  const count = rowCount ? rowCount : defaultCount;

  const [expand, setExpand] = useState(() =>
    defaultExpand ? defaultExpand : false
  );

  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }
    // eslint-disable-next-line
  }, []);

  const getFields = () => {
    const showFields = expand ? fields : fields.slice(0, count);
    const children = [];
    showFields.forEach((item) => {
      if (!item.hidden) {
        children.push(
          <Col span={item.span ? item.span : 6} key={item.key}>
            <Form.Item
              name={item.key}
              label={item.label}
              required={item.required}
            >
              {FormItemComponent(item)}
            </Form.Item>
          </Col>
        );
      }
    });
    return children;
  };

  const onFinish = (values) => {
    // 剔除空数据、空数组、空对象
    const data = { ...values };
    Object.keys(data).forEach((item) => {
      if (
        data[item] === "" ||
        (Array.prototype.isPrototypeOf(data[item]) &&
          data[item].length === 0) ||
        (Object.prototype.isPrototypeOf(data[item]) &&
          Object.keys(data[item]).length === 0)
      ) {
        delete data[item];
      }
    });
    onSearch(data);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      style={{ marginBottom: 20 }}
      onFinish={onFinish}
    >
      {fields && fields.length > 0 && <Row gutter={24}>{getFields()}</Row>}
      <Row>
        <Col span={14}>
          {leftActions
            ? leftActions.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))
            : null}
        </Col>
        <Col span={10} style={{ textAlign: "right" }}>
          {fields && fields.length > 0 && (
            <span>
              <Button type="primary" size="small" htmlType="submit">
                搜索
              </Button>
              <Button
                style={{ margin: "0 8px" }}
                size="small"
                onClick={() => {
                  form.resetFields();
                  form.setFieldsValue(defaultValue);
                }}
              >
                重置
              </Button>
              {fields && fields.length > count ? (
                <Button
                  type="link"
                  size="small"
                  style={{ padding: "0 4px" }}
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  {expand ? <UpOutlined /> : <DownOutlined />} 更多
                </Button>
              ) : null}
            </span>
          )}
          {rightActions
            ? rightActions.map((item, index) => <span key={index}>{item}</span>)
            : null}
        </Col>
      </Row>
    </Form>
  );
}
export default TableFilter;
