/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-16 21:32:24
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React, { useState } from "react";
import { Switch, Input, Space } from "antd";

const { TextArea } = Input;

function MessageBack(props) {
  const {
    value,
    onChange,
    maxLength,
    showCount = false,
    rows = 3,
    ...rest
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [message, setMessage] = useState("");

  const triggerChange = (changedValue) => {
    onChange?.({
      isSelected,
      ...value,
      ...changedValue,
    });
  };

  const handleSelected = (val) => {
    setIsSelected(val);
    triggerChange({ isSelected: val });
  };

  const handleMessage = (val) => {
    setMessage(val.target.value);
    triggerChange({ message: val.target.value });
  };

  return (
    <Space direction="vertical">
      <Switch
        onChange={handleSelected}
        checked={value?.isSelected || isSelected}
      ></Switch>
      {value?.isSelected || isSelected ? (
        <TextArea
          rows={rows}
          value={value.message || message}
          showCount={showCount}
          maxLength={maxLength}
          onChange={handleMessage}
          {...rest}
        ></TextArea>
      ) : null}
    </Space>
  );
}

export default MessageBack;
