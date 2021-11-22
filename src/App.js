import "./App.css";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import Login from "./pages/login"

function App() {
  console.log("process.on", process.env.REACT_APP_ENV)
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

export default App;
