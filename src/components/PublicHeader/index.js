import React from "react";
import { Avatar, Dropdown, Menu, Button } from "antd";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { languageMap } from "../../utils/const";
import { saveSessionStorage } from "../../utils/common";

function PublicHeader(props) {
  const { user } = props;

  let navigate = useNavigate();

  const handleLoginOut = () => {
    sessionStorage.removeItem("username");
    navigate("login");
  };

  const changeLanguage = (language) => {
    saveSessionStorage("template_locale", language);
    window.location.reload();
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="link"
          block
          href="https://github.com/richLpf/antd-template-demo"
        >
          项目地址
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" block onClick={handleLoginOut}>
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ height: 40, background: "#1e262c" }}>
      <div className="logo" style={{ textAlign: "center", borderRadius: 5 }}>
        Demo
      </div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <div
          style={{
            float: "right",
            marginTop: 6,
            marginRight: 10,
            cursor: "pointer",
          }}
        >
          <Avatar
            style={{ display: "inline-block", marginRight: 5 }}
            size={28}
            icon={<UserOutlined />}
          />
          <div style={{ display: "inline-block", color: "#7687a4" }}>
            {user ? user : null}
          </div>
        </div>
      </Dropdown>
      <div style={{ float: "right", marginRight: 20, color: "#fff" }}>
        <div
          style={{ display: "inline-block", marginTop: 10, cursor: "pointer" }}
        >
          <span onClick={() => changeLanguage(languageMap.ZH_CN)}>CN</span> /{" "}
          <span onClick={() => changeLanguage(languageMap.EN_US)}>EN</span>
        </div>
      </div>
    </div>
  );
}

PublicHeader.propTypes = {
  user: PropTypes.string,
};

export default PublicHeader;
