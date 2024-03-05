import React from "react";
import { AllPermission } from "../../../components/Permission/common";
import Permission from "../../../components/Permission";

function Page() {
  return (
    <Permission acl={AllPermission.Page.Record}>
      <div>您有权限查看当前页面！</div>
    </Permission>
  );
}

export default Page;
