import React, { Fragment, useState, useEffect, useRef } from "react";
import { Button, message, Space, Card } from "antd";
import Columns from "./Columns";
import UTable from "src/components/UTable";
import FormModal from "src/components/UForm/FormModal";
import {
  GetUserList,
  GetRoleList,
  CreateUser,
  DeleteUser,
  UpdateUser,
} from "src/api/acl";
import TableFilter from "src/components/TableFilter";
import Filter from "./Filter";
import { itemOption } from "./FormItem";

function User() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [editInfo, setEditInfo] = useState({});
  const [FilterParams, setFilterParams] = useState({});
  const tableRef = useRef();

  useEffect(() => {
    getRole();
  }, []);

  const handleEdit = (record) => {
    setEditInfo(record);
    setVisible(true);
  };

  const getRole = () => {
    GetRoleList()
      .then((res) => {
        const { Data } = res;
        setRoleList(Data || []);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const HandleCreateUser = (params) => {
    CreateUser(params)
      .then((res) => {
        console.log("res", res);
        setConfirmLoading(false);
        message.success("新增成功");
        setVisible(false);
        setEditInfo({});
        tableRef.current && tableRef.current.fetchData();
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  };

  const HandleUpdateUser = (params) => {
    UpdateUser(params)
      .then((res) => {
        console.log("res", res);
        setConfirmLoading(false);
        setVisible(false);
        setEditInfo({});
        tableRef.current && tableRef.current.fetchData();
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  };

  const handleOk = (val) => {
    console.log("val", val);
    setConfirmLoading(true);
    if (editInfo && Object.keys(editInfo).length) {
      HandleUpdateUser({ ...val, UserID: editInfo.ID });
    } else {
      HandleCreateUser(val);
    }
  };

  const createUser = () => {
    setVisible(true);
  };

  const initialValues = (data) => {
    if (data && Object.keys(data).length) {
      return {
        ...data,
        RoleID: data?.RoleInfo?.map((item) => item.RoleID),
      };
    }
  };

  const handleDelete = (record) => {
    DeleteUser({ UserID: record.ID }).then(() => {
      tableRef.current && tableRef.current.fetchData();
    });
  };

  const onSearch = (value) => {
    console.log("value", value);
    setFilterParams(value);
  };

  const filterInitialValues = {};

  return (
    <Fragment>
      <Card className="m-b-10">
        <TableFilter
          onSearch={onSearch}
          fields={Filter({ roleList })}
          rowCount={3}
          defaultValue={filterInitialValues}
        />
      </Card>
      <UTable
        rowKey="ID"
        ref={tableRef}
        columns={Columns({ handleEdit, handleDelete })}
        useReloadButton
        useBackendPagination
        query={GetUserList}
        filterParams={FilterParams}
        leftAction={
          <Space>
            <Button type="primary" onClick={createUser}>
              创建用户
            </Button>
            <Button>批量上传</Button>
          </Space>
        }
      />
      {visible ? (
        <FormModal
          initialValues={initialValues(editInfo)}
          itemOption={itemOption({ roleList })}
          visible={visible}
          cancel={() => setVisible(false)}
          handleOk={handleOk}
          editInfo={editInfo}
          confirmLoading={confirmLoading}
        />
      ) : null}
    </Fragment>
  );
}

export default User;
