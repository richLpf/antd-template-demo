import React, { useState, useMemo } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider, Radio, DatePicker } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSystemLocale } from "./utils/common";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login";
import "./App.less";

const defaultLanguage = "zh_cn";

const languageMap = {
  zh_cn: zhCN,
  en_us: enUS,
};

const { RangePicker } = DatePicker;

function App() {
  const [locale, setLocale] = useState(defaultLanguage);

  const getLocale = useMemo(() => languageMap[locale], [locale]);

  const handleChange = (val) => {
    setLocale(val.target.value);
  };

  console.log("11111", getSystemLocale(defaultLanguage));

  return (
    <div className="App">
      <Radio.Group name="group" defaultValue={locale} onChange={handleChange}>
        <Radio value={"zh_cn"}>中</Radio>
        <Radio value={"es_us"}>EN</Radio>
      </Radio.Group>
      <ConfigProvider locale={getLocale}>
        <RangePicker style={{ width: 200 }} />
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
