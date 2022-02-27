import React from "react";
import { Card, List, Row, Col } from "antd";

function Dashboard() {
  const data = [
    "1、Antd组件的使用",
    "2、后台系统常用组件开发",
    "3、页面精选布局",
    "4、常见模块的使用整理",
  ];

  const dashboardList = [
    {
      id: 1,
      name: "表格",
      list: [
        {
          title: "表格组件封装",
          url: "",
          desc: "提供搜索和下载功能",
        },
        {
          title: "表格封装",
          url: "",
          desc: "常见的表单内容",
        },
        {
          title: "表格常见功能",
          url: "",
          desc: "筛选、过滤、状态、下载、查询",
        },
      ],
    },
    {
      id: 2,
      name: "系统布局",
      list: [
        {
          title: "左右布局",
          url: "",
          desc: "常见的左右布局",
        },
        {
          title: "上下布局",
          url: "",
          desc: "常见的上下布局",
        },
      ],
    },
    {
      id: 3,
      name: "React中图标组件的用法",
      list: [
        {
          title: "apexcharts",
          url: "",
          desc: "轻量级的图标组件",
        },
      ],
    },
  ];

  return (
    <Card style={{ minHeight: "100vh" }}>
      <p style={{}}>欢迎进入Antd Demo项目,项目介绍：</p>
      <img src="http://10.23.23.123/a.png" alt="test pic" />
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      {dashboardList.map((item) => (
        <div key={item.id} style={{ marginTop: 20, marginBottom: 20 }}>
          <h2>{item.name}</h2>
          <Row gutter={8}>
            {item.list.map((c, index) => (
              <Col span={6} key={index}>
                <Card size="small" title={c.title}>
                  {c.desc}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Card>
  );
}

export default Dashboard;
