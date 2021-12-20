import React from "react";
import { Avatar, Dropdown, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons";

function PublicHeader(props) {

  const { user } = props

  let navigate = useNavigate();

  const handleLoginOut = () => {
    sessionStorage.removeItem("username")
    navigate("login")
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" block onClick={handleLoginOut}>登出</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ height: 40, background: "#fff", padding: "0 30px" }}>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <div style={{ float: "right", marginTop: 6, cursor: 'pointer' }}>
          <Avatar
            style={{display: "inline-block", marginRight: 5}}
            size={28}
            icon={<UserOutlined />}
          />
          <div style={{display: "inline-block", color: "#7687a4"}}>{user?user:null}</div>
        </div>
      </Dropdown>
    </div>
  );
}
export default PublicHeader;
