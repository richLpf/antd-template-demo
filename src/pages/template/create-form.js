import React, { useState } from 'react'
import { Row, Col, Card } from "antd"
import AddTemplate from "./modals/add-template"
import PhoneHeader from "../../components/PhoneShow"

function CreateForm(){

  const [cardList, setCardList] = useState([{
    title: `卡片1`,
    media: {
      name: "",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
      type: "img",
    },
    height: 1,
    desc: "卡片信息描述内容",
    buttonList: [],
  }]);
  const [footerButtonList, setFooterButtonList] = useState([]);

  const callback = (value) => {
    const { cardList } = value;
    setCardList(cardList);
  };

  const footerButton = (value) => {
    setFooterButtonList([...value]);
  };

    return <Card>
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
    </Card>
}

export default CreateForm