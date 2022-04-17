import React, { Fragment, useEffect, useState, useRef } from "react";
import { Button, Space } from "antd";
import UTable from "src/components/UTable";
import * as Api from "../../api";

function TableBase() {
  const [Data, setData] = useState([]);
  const tableRef = useRef();

  useEffect(() => {
    getList({ id: 1 });
  }, []);

  document.title = "test";

  const columns = [
    {
      title: "姓名名字名字名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      sorter: true,
      render: (val) => `${val}岁`,
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  const getList = (data) => {
    Api.GetList(data).then((res) => {
      const { Data } = JSON.parse(JSON.stringify(res));
      setData(Data);
    });
  };

  const handleAdd = () => {
    tableRef.current.fetchData();
    const result = tableRef.current.data;
    console.log("result", result);
  };

  const leftAction = (
    <Space>
      <Button type="primary" onClick={handleAdd}>
        添加
      </Button>
    </Space>
  );

  return (
    <Fragment>
      <UTable
        ref={tableRef}
        rowKey="key"
        storeKey="base-table"
        download={{
          limit: 10000,
          exportData: (row) => {
            return {
              fields: columns
                .filter((item) => item.key !== "actions")
                .map(({ title, key }) => ({
                  label: title,
                  value: key,
                })),
              data: row.map((item) => ({
                ...item,
                age: `${item.age}岁`,
              })),
            };
          },
        }}
        leftAction={leftAction}
        query={Api.GetList}
        dataSource={Data}
        columns={columns}
      />
    </Fragment>
  );
}

export default TableBase;
