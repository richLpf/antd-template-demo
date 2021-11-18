/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 13:56:54
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React, { useState } from "react";
import { Layout, Menu, Spin } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "../router";
import { hasChild } from "../utils/common";
import PublicHeader from "../components/PublicHeader";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function BaseLayout() {
  let navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const genSubMenu = (menu) => {
    const { icon, key, hidden, name, children } = menu;
    if (hidden) return null;
    return (
      <SubMenu
        title={
          <span>
            {icon ? icon : null}
            <span>{name}</span>
          </span>
        }
        key={key}
      >
        {genMenus(children || [])}
      </SubMenu>
    );
  };
  // 获取子菜单
  const genMenItem = (menu) => {
    const { icon, name, key, hidden } = menu;
    if (hidden) return null;
    return (
      <Menu.Item key={key}>
        <div>
          {icon ? icon : null}
          <span>{name}</span>
        </div>
      </Menu.Item>
    );
  };
  // 判断显示父菜单还是子菜单
  const genMenus = (routes) => {
    return routes.reduce((prev, next) => {
      return prev.concat(hasChild(next) ? genSubMenu(next) : genMenItem(next));
    }, []);
  };

  const generateRoute = (routes) => {
    let result = [];
    routes.forEach((item) => {
      if (hasChild(item)) {
        item.children.forEach((child) => {
          const renderComponent = generateItemRoute(child.key, child.component);
          result.push(renderComponent);
        });
      } else if (item.component) {
        result.push(generateItemRoute(item.key, item.component));
      }
    });
    return result;
  };

  const generateItemRoute = (key, component) => {
    return <Route key={key} path={key} element={component} />;
  };

  const onChangeMenu = ({ key }) => {
    console.log("key", key);
    // window.location.href = key
    navigate(key);
    setSelectedKeys([key]);
  };

  console.log("selectKeys", selectedKeys);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ textAlign: "center", borderRadius: 5 }}>
          5G
        </div>
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          mode="inline"
          onSelect={onChangeMenu}
        >
          {genMenus(routes)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <PublicHeader />
        <Content style={{ margin: "0 16px", padding: 10 }}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>*/}
          <React.Suspense
            fallback={
              <div style={{ marginTop: 200, textAlign: "center" }}>
                <Spin spinning={true} />
              </div>
            }
          >
            <Routes>{generateRoute(routes)}</Routes>
          </React.Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;