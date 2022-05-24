import moment from "moment";
import locale from "../locale.json";
import { defaultLanguage } from "./const";
// menu has child
export const hasChild = (routes) => {
  return Array.isArray(routes.children) && routes.children.length > 0;
};

export function debounce(cb, wait = 1000) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      cb(args);
    }, wait);
  };
}

export function throttle(func, delay = 1000) {
  let isWorking = false;
  return (params) => {
    if (isWorking) {
      return false;
    }
    isWorking = true;
    setTimeout(() => {
      func(params);
      isWorking = false;
    }, delay);
  };
}

// 将语言文件转化成对象
export const getSystemLocale = (language) => {
  return locale.reduce((prev, next) => {
    const key = next.key;
    prev[key] = next[language];
    return prev;
  }, {});
};

// 根据key显示中英文
export const formatMessage = (key) => {
  const language = getSessionStorage("template_locale") || defaultLanguage;
  const localeMap = getSystemLocale(language);
  return key && localeMap[key] ? localeMap[key] : key;
};

// session
export const saveSessionStorage = (key, value) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
};

export const getSessionStorage = (key) => {
  const value = window.sessionStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

export const formatTime = (date) => {
  return date ? moment(date * 1000).format("YYYY-MM-DD HH:mm:ss") : "-";
};
