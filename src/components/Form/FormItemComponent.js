import React from "react";
import { Input, InputNumber, Select, DatePicker, Radio } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

/**
 *  表单弹窗 
 * @param ItemOptions 表单配置
 * ItemOptions = {
    label: "标题",
    name: "字段名",
    required: "必填-boolean",
    content: "表单",
    hidden: "隐藏-boolean",
    title: "作为文本标题展示-boolean"
 * }
 * @param initialValues 表单整体的默认值，不再使用单个表单默认值
 * */
export default function FormItemComponent(field) {
  // 选项的类型：Input-输入框，NumberInput-数字输入框，Select-下拉框，SelectMultiple-下拉框多选，
  // Date-日期，DateRange-日期范围，DateRangeButton-日期范围按钮
  const filterItem = {
    Input: (
      <Input
        style={{ width: "100%" }}
        placeholder={field.placeholder || field.label}
        disabled={field.disabled}
      />
    ),
    TextArea: (
      <Input.TextArea
        style={{ width: "100%" }}
        placeholder={field.label}
        {...field.option}
      />
    ),
    NumberInput: (
      <InputNumber style={{ width: "100%" }} placeholder={field.label} />
    ),
    Select: (
      <Select
        style={{ width: "100%" }}
        placeholder={field.label}
        showSearch={true}
        allowClear={true}
        disabled={field.disabled || false}
        filterOption={(input, option) => {
          try {
            return (
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
          } catch {
            return option.props.children.indexOf(input) >= 0;
          }
        }}
      >
        {field.options
          ? field.options.map((item, index) => {
              return (
                <Option key={index} value={item.value}>
                  {item.name || item.label}
                </Option>
              );
            })
          : null}
      </Select>
    ),
    SelectMultiple: (
      <Select
        style={{ width: "100%" }}
        mode="multiple"
        allowClear={true}
        placeholder={field.label}
        filterOption={(input, option) => {
          try {
            return (
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
          } catch {
            return option.props.children.indexOf(input) >= 0;
          }
        }}
      >
        {field.options
          ? field.options.map((item, index) => {
              return (
                <Option key={index} value={item.value}>
                  {item.name || item.label}
                </Option>
              );
            })
          : null}
      </Select>
    ),
    Radio: (
      <Radio.Group
        options={field.options}
        optionType="button"
        buttonStyle="solid"
        {...field.option}
      />
    ),
    Date: <DatePicker {...field.option} />,
    DateRange: <RangePicker {...field.option} />,
    Content: field.content,
  };

  return field.content || filterItem[field.type];
}
