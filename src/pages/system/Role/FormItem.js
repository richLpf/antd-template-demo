import React from "react";
import { Transfer } from "antd";

export const filterInitialValues = {};
export const itemOption = ({
  rewritePermissions,
  targetKeys,
  handleChange,
}) => [
  {
    name: "nameCn",
    label: "角色名称",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "name",
    label: "角色标识",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "describe",
    label: "描述",
    content: "Textarea",
  },
  {
    name: "resourceIds",
    label: "资源",
    rules: {
      required: true,
    },
    render: (
      <Transfer
        dataSource={rewritePermissions}
        titles={["待赋权列表", "已赋权列表"]}
        targetKeys={targetKeys}
        render={(item) => item.name}
        showSearch
        onChange={handleChange}
        listStyle={{
          width: 250,
          height: 250,
        }}
      />
    ),
  },
];
