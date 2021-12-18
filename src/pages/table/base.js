import React, { Fragment, useEffect, useState, useRef } from "react";
import { Button } from "antd"
import TableWrap from './component/table-wrap'
import * as Api from '../../api'

function TableBase() {

  const [Data, setData] = useState([])
  const tableRef = useRef()

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
      sorter: true,
      render: val => `${val}岁`
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
        download={{
          limit: 10000,
          exportData: row => {
            return {
              fields: columns.filter(item => item.key !== "actions").map(({title, key}) => ({
                label: title,
                value: key
              })),
              data: row.map(item => ({
                ...item,
                age: `${item.age}岁`
              })),
            }
          }}
        }
        leftAction={leftAction}
        query={Api.GetList} 
        dataSource={Data} 
        columns={columns} 
      />
    </Fragment>
  );
}

export default TableBase;
