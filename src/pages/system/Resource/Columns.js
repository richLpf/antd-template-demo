import React from "react";
import { Space, Button, Popconfirm } from "antd";
import { formatTime } from "src/utils/common";

const Columns = ({ handleEdit, handleDelete }) => [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "类型",
    dataIndex: "Category",
    key: "Category",
  },
  {
    title: "资源名称",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "资源标识",
    dataIndex: "Resource",
    key: "Resource",
  },
  {
    title: "描述",
    dataIndex: "Description",
    key: "Description",
  },
  {
    title: "创建人",
    dataIndex: "CreateBy",
    key: "CreateBy",
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
