import "./App.css";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDemo from "./pages/table";

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Routes>
            <Route path="/" element={<TableDemo />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
