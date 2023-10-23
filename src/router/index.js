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

const Dashboard = lazy(() => import("../pages/dashboard/workbench"));
// const SetWorkbench = lazy(() => import("../pages/dashboard/setWorkbench"));
const Table = lazy(() => import("../pages/table"));
const Widget = lazy(() => import("../pages/widgets"));
const ChartDemo = lazy(() => import("../pages/chart"));
const AntvDemo = lazy(() => import("../pages/chart/antv"));
const Debounce = lazy(() => import("../pages/lib/debounce"));
const Context = lazy(() => import("../pages/hooks/context"));
const Users = lazy(() => import("../pages/system/User"));
const Roles = lazy(() => import("../pages/system/Role"));
const Resources = lazy(() => import("../pages/system/Resource"));
const Formik = lazy(() => import("../pages/form/formik"));
// const FormikHook = lazy(() => import("../pages/form/formik/useFormik"));
// const FormikField = lazy(() => import("../pages/form/formik/field"));

const routes = [
  {
    key: "/",
    name: "Dashboard",
    icon: <DesktopOutlined />,
    component: <Dashboard />,
  },
  // {
  // key: "/workbench/setting",
  // name: "Dashboard",
  // hidden: true,
  // component: <SetWorkbench />
  // },
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
    children: [
      {
        name: "form",
        key: "/form/demo",
        component: <Table />,
      },
      {
        name: "formik",
        key: "/form/formik",
        component: <Formik />,
      },
    ],
  },
  {
    name: formatMessage("DEMO0006"),
    key: "/business",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Table />,
  },
  {
    name: formatMessage("DEMO0007"),
    key: "/component",
    hidden: true,
    icon: <SettingOutlined />,
    component: <Table />,
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
  {
    name: formatMessage("DEMO0011"),
    key: "/system",
    icon: <SettingOutlined />,
    children: [
      {
        name: formatMessage("DEMO0012"),
        key: "/system/user",
        component: <Users />,
      },
      {
        name: formatMessage("DEMO0013"),
        key: "/system/role",
        component: <Roles />,
      },
      {
        name: formatMessage("DEMO0014"),
        key: "/system/resource",
        component: <Resources />,
      },
    ],
  },
];

export default routes;
