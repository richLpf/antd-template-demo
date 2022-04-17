export function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
}

export function getLocalStorage(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

// 获取某个系统缓存数据，包括用户信息
export function getOneSystemStore(key) {
  return getLocalStorage(key);
}

// 获取系统缓存数据，包括用户信息
export function getSystemStore(keys) {
  const systemStore = {};
  Object.keys(keys).forEach((item) => {
    systemStore[item] = getLocalStorage(keys[item]);
  });

  return systemStore;
}
