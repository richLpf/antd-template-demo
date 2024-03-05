import React from "react";
import { Space, Button, Popconfirm } from "antd";
import { formatTime } from "src/utils/common";

const Columns = ({ handleEdit, handleDelete }) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "权限标识",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "权限描述",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    key: "created_at",
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
          <Popconfirm
            title="删除后，将无法恢复，确定删除吗？"
            onConfirm={() => handleDelete(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger size="small">
              删除
            </Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];

export default Columns;
