import React from "react";
import moment from "moment";
import UserWidget from "./components/userInfo";
import Notices from "./components/notices";
import Company from "./components/company";
import MyFavorite from "./components/myFavorite";
import VisitHistory from "./components/visitHistory";
import Application from "./components/application";

export const BaseList = [
  {
    id: 1,
    resource: "UserInfo",
    public: true,
    name: "用户信息",
    w: 4,
    h: 2,
    minW: 2,
    maxW: 4,
    minH: 2,
  },
  {
    id: 2,
    resource: "Notices",
    public: true,
    name: "最新公告",
    w: 2,
    h: 2,
    minW: 2,
    maxW: 4,
    minH: 2,
  },
];

export const initWidgetsData = [
  {
    w: 4,
    h: 2,
    x: 0,
    y: 0,
    i: "UserInfo",
    minW: 2,
    maxW: 4,
    minH: 2,
    moved: false,
    static: false,
  },
  {
    w: 2,
    h: 3,
    x: 4,
    y: 2,
    i: "Notices",
    minW: 2,
    maxW: 4,
    minH: 2,
    moved: false,
    static: false,
  },
  {
    w: 4,
    h: 3,
    x: 0,
    y: 5,
    i: "Company",
    minH: 2,
    moved: false,
    static: false,
  },
  {
    w: 2,
    h: 3,
    x: 2,
    y: 2,
    i: "Application",
    minH: 2,
    moved: false,
    static: false,
  },
  {
    w: 2,
    h: 2,
    x: 4,
    y: 0,
    i: "VisitHistory",
    minH: 2,
    moved: false,
    static: false,
  },
  {
    w: 2,
    h: 3,
    x: 0,
    y: 2,
    i: "MyFavorite",
    minH: 2,
    moved: false,
    static: false,
  },
];

export const defaultProps = {
  cols: 6,
  rowHeight: 105,
};

export const showComponent = (val) => {
  switch (val) {
    case "UserInfo":
      return <UserWidget />;
    case "Notices":
      return <Notices />;
    case "VisitHistory":
      return <VisitHistory />;
    case "Application":
      return <Application />;
    case "MyFavorite":
      return <MyFavorite />;
    case "Company":
      return <Company />;
  }
};

export const showComponentTip = (val) => {
  switch (val) {
    case "UserInfo":
      return "添加自定义关注指标，获取实时信息";
    case "Notices":
      return "";
    case "VisitHistory":
      return "展示最近的访问足迹，及时回访高频页面";
    case "Application":
      return "添加常用内部系统，快捷访问值得拥有";
    case "MyFavorite":
      return "添加常用网站，减少冗余书签收藏";
    case "Company":
      return "添加关注公司，获取一手资源资讯";
  }
};

export const getObjectByResource = (list, resource) => {
  const result = list.filter((item) => item.resource === resource);
  return result.length ? result[0] : {};
};

export const tabList = (List = []) => {
  const permission = List.map(({ id, resource, name, properties }) => {
    const {
      width = 2,
      height = 1,
      ...rest
    } = properties ? JSON.parse(properties) : {};
    return {
      id,
      resource,
      name,
      public: false,
      w: width,
      h: height,
      ...rest,
    };
  });
  return [...BaseList, ...permission];
};

export const SettingTips = {
  user: <div>拖拽卡片调整位置，或鼠标移动到卡片右下角调整卡片大小</div>,
  admin: (
    <div>
      拖拽卡片调整位置，或鼠标移动到卡片右下角调整卡片大小，
      <span style={{ color: "red" }}>您正在修改角色配置，将对所有角色生效</span>
    </div>
  ),
  error: "获取资源失败，请联系管理员",
};

export const isAdministrator = (roles = []) => {
  return roles.find((item) => item.role === "admin") ? true : false;
};
//计算两个日期之间相差多少天
//调用示例enumerateDaysBetweenDates('2021-06-09','2021-07-09')
export const enumerateDaysBetweenDates = (startDate, endDate) => {
  let daysList = [];
  const start = moment(startDate);
  const end = moment(endDate);
  const day = end.diff(start, "days");
  daysList.push(start.format("YYYY/MM/DD"));
  for (let i = 1; i <= day; i++) {
    daysList.push(start.add(1, "days").format("YYYY/MM/DD"));
  }
  return daysList;
};
export const steps = [
  {
    selector: '[data-tut="reactour__checkbox"]',
    content: "此处选择您工作台需要的模块",
    stepInteraction: false,
  },
  {
    selector: '[data-tut="reactour__dashboard"]',
    content:
      "此处是您选择的模块，该模块支持拖拽调整位置，并且支持您自定义调整大小",
    stepInteraction: false,
  },
  {
    selector: '[data-tut="reactour__save"]',
    content: "此处保存您刚刚配置好的工作台信息",
    stepInteraction: false,
  },
];

// 缓存用户数据
export function saveLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
export function saveSessionStorage(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}
export function getSessionStorage(key) {
  try {
    return JSON.parse(window.sessionStorage.getItem(key) || "");
  } catch (err) {
    return "";
  }
}
export function checkExpiresIn(key) {
  const expiresIn = getSessionStorage(key);
  if (!expiresIn) return false;
  return expiresIn > moment().unix() ? true : false;
}

export function getLocalStorage(key) {
  try {
    const data = JSON.parse(window.localStorage.getItem(key) || "");
    return data;
  } catch (err) {
    return {};
  }
}
