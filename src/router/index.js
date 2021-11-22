/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-19 17:00:05
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React, { lazy } from "react";
import {
  DesktopOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  FolderAddOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Dodder = lazy(() => import("../pages/fodder"));
const Template = lazy(() => import("../pages/template"));
const CreateTemplate = lazy(() => import("../pages/template/create-form"));
const Message = lazy(() => import("../pages/message/send-task"));
const Business = lazy(() => import("../pages/business"));

const routes = [
  {
    key: "/",
    name: "Dashboard",
    icon: <DesktopOutlined />,
    component: <Dashboard />,
  },
  {
    name: "素材管理",
    key: "/fodder",
    icon: <CloudUploadOutlined />,
    component: <Dodder />,
  },
  {
    name: "模版管理",
    key: "/template",
    icon: <FolderAddOutlined />,
    component: <Template />,
  },
  {
    name: "添加模版",
    key: "/template/add",
    hidden: true,
    component: <CreateTemplate />,
  },
  {
    name: "消息管理",
    key: "/message",
    icon: <MessageOutlined />,
    children: [
      {
        name: "下发消息",
        key: "/message/send",
        component: <Message />,
      },
    ],
  },
  {
    name: "业务管理",
    key: "/business",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Business />,
  },
];

export default routes;
