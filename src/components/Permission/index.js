import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Result, Card } from "antd";
import { keyHasPermission } from "./common";

function Permission(props) {
  const permissions = useSelector((state) => {
    return state.systemStore.permission;
  });

  const { aclKey, ...restProps } = props;

  return (
    <div>
      {keyHasPermission(aclKey, permissions) ? (
        <div {...restProps} />
      ) : (
        <Card>
          <Result
            status="error"
            title="403"
            subTitle="无相关权限，请联系管理员开通权限！"
          ></Result>
        </Card>
      )}
    </div>
  );
}

Permission.propTypes = {
  aclKey: PropTypes.string.isRequired,
};

export default Permission;
