import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
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

const pageQuery = {
  limit: 10,
  offset: 0,
};

function User() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [editInfo, setEditInfo] = useState({});
  const [FilterParams, setFilterParams] = useState({});
  const tableRef = useRef();

  const getRole = useCallback(() => {
    GetRoleList(pageQuery)
      .then((res) => {
        const { Data } = res;
        setRoleList(Data || []);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    getRole();
  }, [getRole]);

  const handleEdit = (record) => {
    setEditInfo(record);
    setVisible(true);
  };

  const HandleCreateUser = (params) => {
    CreateUser(params)
      .then((res) => {
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
    setConfirmLoading(true);
    if (editInfo && Object.keys(editInfo).length) {
      HandleUpdateUser({ ...val, id: editInfo.id });
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
        role_ids: data?.roles?.map((item) => item.role_id),
      };
    }
  };

  const handleDelete = (record) => {
    DeleteUser({ UserID: record.ID }).then(() => {
      tableRef.current && tableRef.current.fetchData();
    });
  };

  const onSearch = (value) => {
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
        rowKey="id"
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
          itemOption={itemOption({ roleList, editInfo })}
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
