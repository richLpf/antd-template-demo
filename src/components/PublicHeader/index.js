/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 15:42:48
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

function PublicHeader() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/login">登出</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ height: 40, background: "#fff", padding: "0 30px" }}>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar
          style={{ float: "right", marginTop: 6 }}
          size={28}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </div>
  );
}
export default PublicHeader;
