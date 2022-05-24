import React, { Fragment, useEffect, useState, useRef } from "react";
import UTable from "src/components/UTable";
import Columns from "./Columns";
import FormModal from "src/components/UForm/FormModal";
import { Button, message, Card } from "antd";
import {
  GetResources,
  CreateResource,
  UpdateResource,
  DeleteResource,
} from "src/api/acl";
import { itemOption, filterInitialValues } from "./FormItem";
import TableFilter from "src/components/TableFilter";
import Filter from "./Filter";

function Resource() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [isNew, setIsNew] = useState(true);

  const tableRef = useRef();

  useEffect(() => {}, []);

  const resourceAdd = (data) => {
    setConfirmLoading(true);
    CreateResource(data).then(() => {
      setConfirmLoading(false);
      message.success("add success");
      setVisible(false);
      tableRef.current && tableRef.current.fetchData();
    });
  };

  const resourceUpdate = (data) => {
    setConfirmLoading(true);
    UpdateResource(data).then(() => {
      setConfirmLoading(false);
      setVisible(false);
      message.success("update success");
      tableRef.current && tableRef.current.fetchData();
    });
  };

  const handleEdit = (val) => {
    setIsNew(false);
    setVisible(true);
    setInitialValues(val);
  };

  const handleClick = () => {
    setIsNew(true);
    setVisible(true);
  };
  const handleOk = (val) => {
    console.log("val", val);
    if (isNew) {
      resourceAdd(val);
    } else {
      resourceUpdate({
        ...val,
      });
    }
  };

  const handleDelete = (record) => {
    console.log("delete", record);
    DeleteResource({ ResourceID: record.ID }).then((res) => {
      console.log("delete", res);
      tableRef.current && tableRef.current.fetchData();
    });
  };

  const onSearch = () => {};

  return (
    <Fragment>
      <Card className="m-b-10">
        <TableFilter
          onSearch={onSearch}
          fields={Filter()}
          rowCount={3}
          defaultValue={filterInitialValues}
        />
      </Card>
      <UTable
        rowKey="ID"
        ref={tableRef}
        leftAction={
          <Button type="primary" onClick={handleClick}>
            添加资源
          </Button>
        }
        useBackendPagination
        columns={Columns({ handleEdit, handleDelete })}
        query={GetResources}
        useReloadButton
      />
      <FormModal
        itemOption={itemOption()}
        visible={visible}
        cancel={() => setVisible(false)}
        handleOk={handleOk}
        title={isNew ? "新增" : "编辑"}
        confirmLoading={confirmLoading}
        initialValues={initialValues}
      />
    </Fragment>
  );
}

export default Resource;
