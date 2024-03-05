import React, { useMemo, useEffect, useCallback } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import { getSessionStorage } from "./utils/common";
import { switchLanguage, savePermission } from "./redux/systemStore";
import { GetUser } from "./api/acl";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login";
import SetWorkbench from "./pages/dashboard/setWorkbench";
import Cookies from "js-cookie";

const uiLanguageMap = {
  zh_cn: zhCN,
  en_us: enUS,
};

function App() {
  const dispatch = useDispatch();

  const { locale, componentSize } = useSelector((state) => {
    return state.systemStore;
  });

  useEffect(() => {
    let localeLanguage = getSessionStorage("template_locale");
    if (localeLanguage && locale !== localeLanguage) {
      dispatch(switchLanguage(localeLanguage));
    }
    let localeComponentSize = getSessionStorage("template_size");
    if (localeComponentSize && componentSize !== localeComponentSize) {
      dispatch();
    }
  }, [componentSize, dispatch, locale]);

  const getLocale = useMemo(() => uiLanguageMap[locale], [locale]);

  // get user info
  const getUserInfo = useCallback(() => {
    const userId = Cookies.get("userId");
    if (
      !userId &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/register"
    ) {
      window.location.href = "/login";
    }

    GetUser({ id: parseInt(userId) }).then((res) => {
      const { permissions } = res;
      dispatch(savePermission(permissions));
    });
  }, [dispatch]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <div className="App">
      <ConfigProvider locale={getLocale} componentSize={componentSize}>
        <HashRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/workbench/setting" element={<SetWorkbench />} />
            <Route path="*" element={<BaseLayout />} />
          </Routes>
        </HashRouter>
      </ConfigProvider>
    </div>
  );
}

export default React.memo(App);
