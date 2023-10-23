import React, { useMemo, useEffect } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import { getSessionStorage } from "./utils/common";
import { switchLanguage } from "./redux/systemStore";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login";
import SetWorkbench from "./pages/dashboard/setWorkbench";

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
