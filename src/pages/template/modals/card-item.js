import React, { Fragment, useState } from "react";
import { Button, Form, Row, Col, Input, Tabs, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import BoxButton from "../../../components/BoxButton";

const { TabPane } = Tabs;
const { TextArea } = Input;

const initTab = (index) => ({
  title: `卡片${index}`,
  media: {
    name: "",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?",
  },
  height: 1,
  desc: "卡片信息描述内容",
  buttonList: [],
});

function CardItem(props) {
  const { value = [], onChange, formData, handleSelectFodder } = props;

  // const [list, setList] = useState([]);
  const [activeKey, setActiveKey] = useState("0");
  const [cardList, setCardList] = useState([initTab(1)]);

  console.log("formData", formData.templateType)

  const triggerChange = (changedValue) => {
    onChange?.({
      cardList,
      ...value,
      ...changedValue,
    });
  };

  const callback = (val) => {
    setActiveKey(val);
  };

  const handlePlus = () => {
    if(formData?.templateType==="1"){
      message.error("单卡模式不允许添加多个卡片")
      return
    }
    const list = JSON.parse(JSON.stringify(cardList));
    list.push(initTab(list.length + 1));
    setCardList(list);
    triggerChange({ cardList: list });
  };

  const changeInput = (key, val, index) => {
    const list = JSON.parse(JSON.stringify(cardList));
    list[index][key] = val;
    setCardList(list);
    triggerChange({ cardList: list });
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      const list = JSON.parse(JSON.stringify(cardList));
      list.splice(targetKey, 1);
      setCardList(list);
      triggerChange({ cardList: list });
    }
  };

  return (
    <Tabs
      style={{ border: "1px solid #e4e7ed", padding: 10, borderRadius: 4 }}
      activeKey={activeKey}
      onChange={callback}
      type="editable-card"
      hideAdd
      onEdit={onEdit}
      tabBarExtraContent={
        <Button
          size="small"
          icon={<PlusOutlined />}
          onClick={() => handlePlus()}
        ></Button>
      }
    >
      {value?.cardList ||
        cardList.map((item, index) => {
          return (
            <TabPane key={String(index)} tab={item.title}>
              <Fragment>
                <Form.Item label="媒体文件">
                  <Row gutter={6}>
                    <Col span={12}>
                      <Input value={item.media.name} />
                    </Col>
                    <Col span={12}>
                      <Button type="primary" onClick={()=>handleSelectFodder(item, index)}>选择</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item label="卡片标题">
                  <Input
                    value={item.title}
                    onChange={(e) =>
                      changeInput("title", e.target.value, index)
                    }
                  />
                </Form.Item>
                <Form.Item label="卡片描述">
                  <TextArea
                    rows={2}
                    value={item.desc}
                    onChange={(e) => changeInput("desc", e.target.value, index)}
                  ></TextArea>
                </Form.Item>
                <Form.Item label="内置按钮">
                  <BoxButton
                    value={item.buttonList}
                    onChange={(val) => changeInput("buttonList", val, index)}
                  />
                </Form.Item>
              </Fragment>
            </TabPane>
          );
        })}
    </Tabs>
  );
}

export default CardItem;
