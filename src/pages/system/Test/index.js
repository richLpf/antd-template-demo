import React from "react";
import { Card, Button } from "antd";
import { useSelector } from "react-redux";
import {
  keyHasPermission,
  AllPermission,
} from "../../../components/Permission/common";

function Test() {
  const permission = useSelector((state) => {
    return state.systemStore.permission;
  });

  return (
    <>
      <Card>
        {keyHasPermission(AllPermission.Action.CreateUser, permission) ? (
          <Button>操作权限-新增</Button>
        ) : null}
      </Card>
    </>
  );
}

export default Test;
