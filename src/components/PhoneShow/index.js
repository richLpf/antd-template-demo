/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-22 12:24:08
 * @LastEditors: pengfei.lv
 * @Description:
 */

import React, { Fragment } from "react";
import phoneBg from "../../assets/images/phone_bg.png";
import pic5g from "../../assets/images/5g.jpeg";
import { Button, Space } from "antd";
import CardInfo from "./cardInfo";
import "./style.css";

const PhoneStyle = {
  overflow: "hidden",
  background: `url(${phoneBg}) no-repeat`,
  backgroundSize: "100% 100%",
};

/*
const buttonList = [
  {
    name: "立即领取",
    type: "response",
    content: {
      type: "",
      templateId: "",
    },
  },
  {
    name: "拨打电话",
    type: "advice",
    content: {
      type: "phone",
      phone: "17521032160",
    },
  },
  {
    name: "打开网址",
    type: "advice",
    content: {
      type: "web",
      address: "http://www.baidu.com",
    },
  },
  {
    name: "定位服务",
    type: "advice",
    content: {
      type: "address",
      longitude: "",
      latitude: "",
    },
  },
  {
    name: "添加日程",
    type: "advice",
    content: {
      type: "todo",
      startTime: 12221112233,
      endTime: 2334454222,
      title: "日程标题",
      desc: "日程内容",
    },
  },
];
*/
/*
function ButtonRender(buttonList) {
  return (
    <div>
      {buttonList.map((item) => {
        if (item.content.type === "phone") {
          return (
            <a href={`tel:${item.content.phone}`}>
              <Button>{item.name}</Button>
            </a>
          );
        } else if (item.content.type === "web") {
          return (
            <a href={item.content.address}>
              <Button>{item.name}</Button>
            </a>
          );
        } else if (item.content.type === "address") {
        } else if (item.content.type === "todo") {
        }
      })}
    </div>
  );
}

function Card1(props) {
  const { picture, buttonList } = props;
  return (
    <div>
      <img src={picture} />
      <div>来泡汤低至9.9元</div>
      <div>超大牌，立减5折</div>
    </div>
  );
}

function Card2(props) {
  const { picture } = props;
  return (
    <div>
      <Row>
        <Col>
          <img src={picture} />
        </Col>
        <Col>
          <div>来泡汤低至9.9元</div>
          <div>超大牌，立减5折</div>
        </Col>
      </Row>
    </div>
  );
}

function Card3(props) {
  const { picture } = props;
  return (
    <div>
      <Row>
        <Col>
          <div>来泡汤低至9.9元</div>
          <div>超大牌，立减5折</div>
        </Col>
        <Col>
          <img src={picture} />
        </Col>
      </Row>
    </div>
  );
}*/

function PhoneShow(props) {
  const { list = [], footerButton = [] } = props;

  console.log("list", list)

  return (
    <Fragment>
      <div style={PhoneStyle} className="phone-style">
        <div className="phone-wrap">
          <div className="phone-top-title">
            <div className="phone-title">Chatbot名称</div>
            <div className="phone-code">服务代码</div>
          </div>
          <div className="phone-content-wrap">
            <div className="main">
              <div className="phone-content-left">
                <div className="header-image">
                  <img className="current-image" src={pic5g} alt="" />
                </div>
              </div>
              <div className="phone-content-right">
                {list.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "inline-block",
                        marginRight: "10px",
                        minWidth: "220px",
                      }}
                    >
                      <CardInfo data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="phone-footer">
              <Space style={{ marginTop: 20, width: "100%" }}>
                {footerButton.map((item, index) => {
                  return (
                    <Button key={index} size="small" className="footer-button">
                      {item.content.buttonName}
                    </Button>
                  );
                })}
              </Space>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PhoneShow;
