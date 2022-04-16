import React, { useMemo, useEffect, useState } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSessionStorage, saveSessionStorage } from "./utils/common";
import { defaultLanguage } from "./utils/const";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login";
import "./App.less";

const uiLanguageMap = {
  zh_cn: zhCN,
  en_us: enUS,
};

function App() {
  const [locale, setLocale] = useState(defaultLanguage);

  useEffect(() => {
    let localeLanguage = getSessionStorage("template_locale");
    if (!locale) {
      saveSessionStorage("template_locale", defaultLanguage);
    }
    setLocale(localeLanguage);
  }, []);

  const getLocale = useMemo(() => uiLanguageMap[locale], [locale]);

  return (
    <div className="App">
      <ConfigProvider locale={getLocale}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<BaseLayout />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default React.memo(App);
