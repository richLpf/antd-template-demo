import React from "react";
import { Space, Button, Popconfirm } from "antd";
import { formatTime } from "src/utils/common";
import TagsMore from "src/components/TagsMore";

const Columns = ({ handleEdit, handleDelete }) => [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "中文名",
    dataIndex: "ChName",
    key: "ChName",
  },
  {
    title: "用户名",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "角色名称",
    dataIndex: "RoleInfo",
    key: "RoleInfo",
    render: (val) =>
      val && val.length ? (
        <TagsMore list={val.map((item) => item.RoleName)} />
      ) : (
        ""
      ),
  },
  {
    title: "邮箱",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "创建时间",
    dataIndex: "CreateTime",
    key: "CreateTime",
    sorter: true,
    render: (val) => formatTime(val),
  },
  {
    title: "操作",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => {
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
