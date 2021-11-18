/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-18 11:56:42
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React, { Fragment, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Row, Col, Card, Pagination, Drawer, Modal } from "antd";
import ViewCard from "../../components/ViewCard";
import AddTemplate from "./modals/add-template";
import PhoneHeader from "../../components/PhoneShow";

function Template() {
  const [visible, setVisible] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [footerButtonList, setFooterButtonList] = useState([]);

  const onClose = () => {
    setVisible(false);
  };

  const handleReview = () => {
    setVisible(true);
  };

  const callback = (value) => {
    const { cardList } = value;
    setCardList(cardList);
  };

  const handleDelete = (item) => {
    Modal.confirm({
      title: "确认删除？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后将无法恢复，请谨慎操作",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        console.log("确定");
      },
    });
  };

  const footerButton = (value) => {
    setFooterButtonList([...value]);
  };

  return (
    <Fragment>
      <Card>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {[1, 2, 2, 3, 3, 4, 5, 6].map((item, index) => {
            return (
              <div key={index} style={{ width: "20%", float: "left" }}>
                <ViewCard
                  allowSend
                  allowDelete
                  allowEdit
                  handleReview={() => handleReview(item)}
                  handleDelete={() => handleDelete(item)}
                />
              </div>
            );
          })}
        </div>
        <Pagination
          style={{ textAlign: "right", marginTop: 20 }}
          defaultCurrent={1}
          total={50}
        />
      </Card>
      <Drawer
        title="编辑"
        width={"80%"}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Row>
          <Col flex="360px">
            <PhoneHeader list={cardList} footerButton={footerButtonList} />
          </Col>
          <Col flex="auto">
            <div style={{ scrollY: "auto" }}>
              <AddTemplate callback={callback} footerButton={footerButton} />
            </div>
          </Col>
        </Row>
      </Drawer>
    </Fragment>
  );
}

export default Template;
