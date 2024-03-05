import React from "react";
import { Space, Button } from "antd";
import { formatTime } from "src/utils/common";

const Columns = ({ handleEdit }) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "说明",
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
        </Space>
      );
    },
  },
];

export default Columns;
