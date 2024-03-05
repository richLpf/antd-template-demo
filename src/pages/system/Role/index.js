import React, { Fragment, useState, useEffect, useRef } from "react";
import Columns from "./Columns";
import UTable from "src/components/UTable";
import FormModal from "src/components/UForm/FormModal";
import { Button, Card } from "antd";
import { GetRoleList, GetResources, CreateRole } from "src/api/acl";
import { itemOption, filterInitialValues } from "./FormItem";
import TableFilter from "src/components/TableFilter";
import Filter from "./Filter";

function Role() {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isNew, setIsNew] = useState(true);
  const [initialValues, setInitialValues] = useState({});

  const tableRef = useRef();

  useEffect(() => {
    getResource();
  }, []);

  useEffect(() => {
    if (visible) {
      setSelectedKeys([]);
    }
  }, [visible]);

  const handleEdit = async (record) => {
    try {
      const res = await getRoleById(record.id);
      const resourceIds = res.resourceList.map((item) => item.resourceId);
      setTargetKeys(resourceIds);
      // setSelectedKeys(resourceListId)
      setIsNew(false);
      setInitialValues({ ...record, resourceIds });
      setVisible(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getResource = () => {
    setLoading(true);
    GetResources({
      limit: 9999,
      offset: 0,
    })
      .then((res) => {
        const { Data } = res;
        setResource(Data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // const categoryMapInfo = {
  // acl: '权限管理',
  // backend: '接口',
  // operation: '操作权限',
  // menu: '目录'
  // };

  const rewritePermissions = resource.map((x) => {
    return {
      key: x.id,
      name: `${x.key} + (${x.type})`,
    };
  });
  const getRoleById = () => {
    // return Api.getRoleById(id).then((res) => {
    // if (res.RetCode === 0) {
    // return res.Data;
    // } else {
    // return {};
    // }
    // });
  };

  const addRole = (data) => {
    setConfirmLoading(true);
    CreateRole(data)
      .then((res) => {
        setConfirmLoading(false);
        setVisible(false);
        tableRef.current && tableRef.current.fetchData();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const updateRole = () => {
    setConfirmLoading(true);
    // Api.updateRoles(data).then((res) => {
    // setConfirmLoading(false);
    // setVisible(false);
    // getRole();
    // });
  };

  const handleOk = (val) => {
    console.log("isNew", isNew, val);
    if (isNew) {
      addRole(val);
    } else {
      val.id = initialValues.id;
      updateRole(val);
    }
  };

  const handleChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const createUser = () => {
    setVisible(true);
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
        rowKey="id"
        ref={tableRef}
        columns={Columns({ handleEdit })}
        useReloadButton
        leftAction={
          <Button type="primary" onClick={createUser}>
            创建角色
          </Button>
        }
        useBackendPagination
        query={GetRoleList}
        loading={loading}
      />
      <FormModal
        width={800}
        itemOption={itemOption({
          targetKeys,
          rewritePermissions,
          handleChange,
        })}
        visible={visible}
        cancel={() => setVisible(false)}
        handleOk={handleOk}
        title={isNew ? "新增" : "编辑"}
        isNew={isNew}
        confirmLoading={confirmLoading}
        onSelectChange={onSelectChange}
        selectedKeys={selectedKeys}
        initialValues={initialValues}
      />
    </Fragment>
  );
}

export default Role;
