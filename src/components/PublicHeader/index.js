import React from "react";
import "./header.less";
import { Avatar, Dropdown, Menu, Button, Badge } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import screenfull from "screenfull";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  BellOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { languageMap } from "../../utils/const";
import { toggleScreen } from "../../redux/systemStore";
import { saveSessionStorage, formatMessage } from "../../utils/common";
import Image from "../../assets/images/icon.png";

function PublicHeader(props) {
  const { user } = props;

  const dispatch = useDispatch();

  const language = useSelector((state) => {
    return state.systemStore.language;
  });

  const isScreenFull = useSelector((state) => {
    return state.systemStore.isScreenFull;
  });

  console.log("isScreenFull", isScreenFull);

  let navigate = useNavigate();

  const handleLoginOut = () => {
    sessionStorage.removeItem("username");
    navigate("login");
  };

  const changeLanguage = (language) => {
    saveSessionStorage("template_locale", language);
    window.location.reload();
  };

  const handleOpen = (isFull) => {
    console.log("isFull", isFull);
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
    dispatch(toggleScreen(isFull));
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
    <div className="public-header">
      <div className="logo">
        <img src={Image} />
        {formatMessage("DEMO0002")}
      </div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <div className="avatar-user">
          <Avatar className="avatar" size={28} icon={<UserOutlined />} />
          <div className="user">{user ? user : null}</div>
        </div>
      </Dropdown>
      <div className="language-box">
        <div className="language">
          {language === languageMap.EN_US && (
            <span onClick={() => changeLanguage(languageMap.ZH_CN)}>中文</span>
          )}
          {language === languageMap.ZH_CN && (
            <span onClick={() => changeLanguage(languageMap.EN_US)}>EN</span>
          )}
        </div>
      </div>
      <Badge dot={true} size="small" className="bellOut">
        <BellOutlined className="bellOut-icon" />
      </Badge>
      <div className="screenFull">
        {isScreenFull ? (
          <FullscreenExitOutlined
            className="text-bottom"
            onClick={() => handleOpen(false)}
          />
        ) : (
          <FullscreenOutlined
            className="text-bottom"
            onClick={() => handleOpen(true)}
          />
        )}
      </div>
    </div>
  );
}

PublicHeader.propTypes = {
  user: PropTypes.string,
};

export default PublicHeader;
