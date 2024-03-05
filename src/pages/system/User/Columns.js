import React from "react";
import { Space, Button, Popconfirm } from "antd";
import { formatTime } from "src/utils/common";
import TagsMore from "src/components/TagsMore";

const Columns = ({ handleEdit, handleDelete }) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "中文名",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "用户名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "角色名称",
    dataIndex: "roles",
    key: "roles",
    render: (val) =>
      val && val.length ? (
        <TagsMore list={val.map((item) => item.role_name)} />
      ) : (
        ""
      ),
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    key: "created_at",
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
