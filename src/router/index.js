import React, { lazy } from "react";
import {
  DesktopOutlined,
  SettingOutlined,
  TableOutlined,
  FireOutlined,
  LineChartOutlined,
  FunctionOutlined,
} from "@ant-design/icons";

const Dashboard = lazy(() => import("../pages/dashboard"));
// const Dodder = lazy(() => import("../pages/fodder"));
// const Template = lazy(() => import("../pages/template"));
// const CreateTemplate = lazy(() => import("../pages/template/create-form"));
// const Message = lazy(() => import("../pages/message/send-task"));
const Business = lazy(() => import("../pages/business"));
const Table = lazy(() => import("../pages/table"));
const Widget = lazy(() => import("../pages/widgets"));
const ChartDemo = lazy(() => import("../pages/chart"));
const AntvDemo = lazy(() => import("../pages/chart/antv"));
const Debounce = lazy(() => import("../pages//lib/debounce"));
const Context = lazy(() => import("../pages/hooks/context"));
const Gray = lazy(() => import("../pages/gray"));

const routes = [
  {
    key: "/",
    name: "Dashboard",
    icon: <DesktopOutlined />,
    component: <Dashboard />,
  },
  {
    key: "/gray",
    name: "gray",
    icon: <DesktopOutlined />,
    component: <Gray />,
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
  {
    name: "图表组件",
    key: "/chart",
    icon: <LineChartOutlined />,
    children: [
      {
        name: "apexcharts",
        key: "/chart/demo",
        component: <ChartDemo />,
      },
      {
        name: "AntvDemo",
        key: "/chart/antv",
        component: <AntvDemo />,
      },
    ],
  },
  {
    name: "常见函数实现",
    key: "/func",
    icon: <FunctionOutlined />,
    children: [
      {
        name: "防抖和节流",
        key: "/func/debounce",
        component: <Debounce />,
      },
      {
        name: "Hooks",
        key: "/func/hooks",
        component: <Context />,
      },
    ],
  },
];

export default routes;
