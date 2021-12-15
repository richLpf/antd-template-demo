import React, { lazy } from "react";
import {
  DesktopOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  FolderAddOutlined,
  MessageOutlined,
  TableOutlined,
  FireOutlined,
} from "@ant-design/icons";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Dodder = lazy(() => import("../pages/fodder"));
const Template = lazy(() => import("../pages/template"));
const CreateTemplate = lazy(() => import("../pages/template/create-form"));
const Message = lazy(() => import("../pages/message/send-task"));
const Business = lazy(() => import("../pages/business"));
const Table = lazy(() => import("../pages/table"));
const Widget = lazy(() => import("../pages/widgets"));

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
    hidden: true,
    icon: <CloudUploadOutlined />,
    component: <Dodder />,
  },
  {
    name: "模版管理",
    key: "/template",
    hidden: true,
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
    hidden: true,
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
    name: "功能组件",
    key: "/widget",
    hidden: false,
    icon: <FireOutlined />,
    component: <Widget />,
  },
  {
    name: "表格组件",
    key: "/table",
    hidden: false,
    icon: <TableOutlined />,
    component: <Table />,
  },
  {
    name: "表单组件",
    key: "/form",
    hidden: false,
    icon: <SettingOutlined />,
    component: <Business />,
  },
  {
    name: "业务组件合集",
    key: "/business",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Business />,
  },
  {
    name: "常见功能组件",
    key: "/component",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Business />,
  },
];

export default routes;
