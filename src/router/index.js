import React, { lazy } from "react";
import {
  DesktopOutlined,
  SettingOutlined,
  TableOutlined,
  FireOutlined,
  LineChartOutlined,
  FunctionOutlined,
} from "@ant-design/icons";
import { formatMessage } from "src/utils/common";

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
// const Gray = lazy(() => import("../pages/gray"));

const routes = [
  {
    key: "/",
    name: "Dashboard",
    icon: <DesktopOutlined />,
    component: <Dashboard />,
  },
  {
    name: formatMessage("DEMO0003"),
    key: "/widget",
    hidden: false,
    icon: <FireOutlined />,
    component: <Widget />,
  },
  {
    name: formatMessage("DEMO0004"),
    key: "/table",
    hidden: false,
    icon: <TableOutlined />,
    component: <Table />,
  },
  {
    name: formatMessage("DEMO0005"),
    key: "/form",
    hidden: false,
    icon: <SettingOutlined />,
    component: <Business />,
  },
  {
    name: formatMessage("DEMO0006"),
    key: "/business",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Business />,
  },
  {
    name: formatMessage("DEMO0007"),
    key: "/component",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Business />,
  },
  {
    name: formatMessage("DEMO0008"),
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
    name: formatMessage("DEMO0009"),
    key: "/func",
    icon: <FunctionOutlined />,
    children: [
      {
        name: formatMessage("DEMO0010"),
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
