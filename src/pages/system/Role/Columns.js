import React from "react";
import { Space, Button } from "antd";
import { formatTime } from "src/utils/common";

const Columns = ({ handleEdit }) => [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "名称",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "标识",
    dataIndex: "Role",
    key: "Role",
  },
  {
    title: "说明",
    dataIndex: "Description",
    key: "Description",
  },
  {
    title: "创建人",
    dataIndex: "createdBy",
    key: "createdBy",
    render: (val) => (val ? val : "-"),
  },
  {
    title: "创建时间",
    dataIndex: "CreateTime",
    key: "CreateTime",
    render: (val) => formatTime(val),
  },
  {
    title: "操作",
    render: (record) => {
      return (
        <Space>
          <Button type="link" size="small" onClick={() => handleEdit(record)}>
            编辑
          </Button>
        </Space>
      );
    },
  },
];

export default Columns;
