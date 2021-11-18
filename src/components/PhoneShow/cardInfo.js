/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 11:57:36
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React from "react";
import { Button, Card, Space } from "antd";

const { Meta } = Card;

function CardInfo(props) {
  const { data = {} } = props;
  const { title, desc, meta, buttonList } = data;

  return (
    <Card
      style={{ width: "100%", borderRadius: 4 }}
      cover={
        <img
          alt="卡片图"
          style={{ height: "100px", border: "none" }}
          src={meta?.url}
        />
      }
    >
      <Meta title={title} description={desc} />
      <Space direction="vertical" style={{ marginTop: 20, width: "100%" }}>
        {buttonList?.map((item, index) => {
          return (
            <Button
              key={index}
              size="small"
              style={{ width: "100%", display: "block" }}
            >
              {item.content.buttonName}
            </Button>
          );
        })}
      </Space>
    </Card>
  );
}

export default CardInfo;
