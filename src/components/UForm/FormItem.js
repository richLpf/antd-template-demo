import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

function FormItem(field) {
  const { content, label, option, render, ...rest } = field;

  const filterItem = {
    Input: <Input placeholder="请输入" />,
    Textarea: (
      <Input.TextArea
        style={{ width: "100%" }}
        placeholder={label}
        {...option}
      />
    ),
    Select: (
      <Select
        showSearch
        {...rest}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {option && option.list
          ? option.list.map((item, index) => {
              const label = Array.isArray(option.label)
                ? `${item[option.label[0]]}（${item[option.label[1]]}）`
                : item[option.label];
              return (
                <Option key={index} value={item[option.value]} label={label}>
                  {label}
                </Option>
              );
            })
          : null}
      </Select>
    ),
    SelectNew: (
      <Select
        showSearch
        style={{ width: 200 }}
        {...rest}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {option && option.list
          ? option.list.map((item, index) => {
              return (
                <Option key={index} value={item.value} label={item.label}>
                  {item.label}
                </Option>
              );
            })
          : null}
      </Select>
    ),
  };
  return render || filterItem[content];
}

export default FormItem;
