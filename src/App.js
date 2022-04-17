import React, { useMemo, useEffect } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSessionStorage } from "./utils/common";
import { switchLanguage } from "./redux/systemStore";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login";
import "./App.less";

const uiLanguageMap = {
  zh_cn: zhCN,
  en_us: enUS,
};

function App() {
  // const [locale, setLocale] = useState(defaultLanguage);
  const locale = useSelector((state) => {
    console.log("state", state);
    return state.systemStore.language;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let localeLanguage = getSessionStorage("template_locale");
    if (localeLanguage && locale !== localeLanguage) {
      dispatch(switchLanguage(localeLanguage));
    }
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
