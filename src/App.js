import React from 'react'
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login"
import "./App.less";

window.addEventListener("error", e => {
  console.log("err watching", e)
}, true)

window.addEventListener("unhandlerejection", e => {
  console.log("reject", e)
}, true)

var consoleError = window.console.error; 
window.console.error = function (e) { 
    console.log(arguments); // 自定义处理
    consoleError && consoleError.apply(window, arguments); 
};

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
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
