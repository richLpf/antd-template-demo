import React, { Fragment, useEffect, useState, useRef } from "react";
import { Button } from "antd"
import TableWrap from './component/table-wrap'
import * as Api from '../../api'
// import { Table } from "antd";

function TableBase() {

  const [Data, setData] = useState([])

  const tableRef = useRef()

  console.log("tableRef", tableRef.current)

  useEffect(() => {

    getList()

  }, [])

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  const getList = (data) => {
    Api.GetList(data).then(res => {
      const { Data } = JSON.parse(JSON.stringify(res))
      setData(Data)
    })
  }

  const handleAdd = () => {
    tableRef.current.fetchData()
    const result = tableRef.current.data;
    console.log("result", result)
  }

  const leftAction = <Button type="primary" onClick={handleAdd}>添加</Button>

  return (
    <Fragment>
      <TableWrap 
        ref={tableRef}
        rowKey="key"
        leftAction={leftAction}
        query={Api.GetList} 
        dataSource={Data} 
        columns={columns} 
      />
    </Fragment>
  );
}

export default TableBase;
