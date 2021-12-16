import React, { Fragment, useEffect, useState } from "react";
import { Button } from "antd"
import TableWrap from './component/table-wrap'
import * as Api from '../../api'
// import { Table } from "antd";

function TableBase() {

  const [Data, setData] = useState([])

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

  const getList = () => {
    Api.GetList().then(res => {
      // console.log("response", JSON.parse(JSON.stringify(res)))
      const { RetCode, Data, Message } = JSON.parse(JSON.stringify(res))
      console.log("RetCode", RetCode, Data)
      setData(Data)
    })
  }
  
  console.log("Data", Data)

  const leftAction = <Button type="primary">添加</Button>

  return (
    <Fragment>
      <TableWrap 
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
