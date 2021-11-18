/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 14:01:30
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import PhoneShow from "../../../components/PhoneShow";
import AddForm from "./add-form";
import SelectTemplate from "../drawer";

function SendTask() {
  const [visible, setVisible] = useState(false);

  const cardList = [
    {
      title: "卡片1",
      meta: {
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
        name: "",
        type: "img",
      },
      desc: "描述信息",
      buttonList: [
        {
          type: "response",
          content: {
            buttonName: "按钮名称",
            type: "img",
          },
        },
        {
          type: "action",
          content: {
            buttonName: "按钮名称",
            type: "phone",
            phone: "18211674322",
          },
        },
      ],
    },
    {
      title: "卡片1",
      meta: {
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
        name: "img",
      },
      desc: "描述信息",
      buttonList: [
        {
          type: "response",
          content: {
            buttonName: "按钮名称",
            type: "img",
          },
        },
        {
          type: "action",
          content: {
            buttonName: "按钮名称",
            type: "phone",
            address: "18211674322",
          },
        },
      ],
    },
  ];

  const templateDrawer = () => {
    setVisible(true);
  };

  const handleSelect = (val) => {
    console.log("val", val);
    setVisible(false);
  };

  return (
    <Card>
      <Row>
        <Col flex="350px">
          <PhoneShow list={cardList} />
        </Col>
        <Col flex="auto">
          <div style={{ marginTop: 40 }}>
            <AddForm selectTemplate={templateDrawer} />
          </div>
        </Col>
      </Row>
      <SelectTemplate
        visible={visible}
        onClose={setVisible}
        handleSelect={handleSelect}
      />
    </Card>
  );
}

export default SendTask;
