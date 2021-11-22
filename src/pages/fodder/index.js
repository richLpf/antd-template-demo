import React, { Fragment, useState } from "react";
import { Card, Button } from "antd";
// import { SearchOutlined } from "@ant-design/icons"
import TableFilter, { resetObjectSelect } from "../../components/TableFilter";
import AddForm from "./modal/addForm"
import { fodderCheckType, fodderType } from "../../utils/const"
import List from "./list"


function Fodder() {
  
  const [visible, setVisible] = useState(false)
  const [confirmLoading, ] = useState(false)

  const onSearch = () => {};

  const filterFields = [
    {
      label: "文件分类",
      key: "FileType",
      type: "Select",
      options: resetObjectSelect(fodderType)
    },
    {
      label: "审核状态",
      key: "Status",
      type: "Select",
      options: resetObjectSelect(fodderCheckType)
    }
  ];

  const handleAdd = () => {
    setVisible(true)
  }

  const handleOk = () => {

  }

  const handleSelect = () => {
    
  }

  return (
    <Fragment>
      <Card size="small" style={{marginBottom: 10, paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
        <TableFilter
            onSearch={onSearch}
            leftActions={[
              <Button size="small" type="primary" onClick={handleAdd}>
                新增
              </Button>,
            ]}
            fields={filterFields}
            rowCount={3}
          />
      </Card>
      <List handleSelect={handleSelect} />
      {visible?<AddForm 
        visible={visible}
        setVisible={setVisible}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
      />:null}
    </Fragment>
  );
}

export default Fodder;
