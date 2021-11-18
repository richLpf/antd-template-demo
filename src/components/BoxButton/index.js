import React, { useState, useMemo } from "react";
import {
  Space,
  Button,
  Badge,
  Input,
  Select,
  Row,
  Col,
  message,
  Tooltip,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SelectTemplate from "../../pages/message/drawer";

/*const buttonList = [
  {
    type: "response",
    content: {
      buttonName: "按钮名称",
      type: "response",
      templateId: "",
    }
  },
  {
    type: "action",
    content: {
      buttonName: "拨打电话",
      type: "phone",
      phone: "17521032160",
    },
  },
  {
    type: "action",
    content: {
      buttonName: "打开网址",
      type: "web",
      address: "http://www.baidu.com",
    },
  },
  {
    type: "action",
    content: {
      buttonName: "定位服务",
      type: "address",
      longitude: "",
      latitude: "",
    },
  },
  {
    type: "advice",
    content: {
      buttonName: "添加日程",
      type: "todo",
      startTime: 12221112233,
      endTime: 2334454222,
      title: "日程标题",
      desc: "日程内容",
    },
  },
];*/

const selectList = [
  {
    label: "拨打电话",
    value: "phone",
  },
  {
    label: "打开网址",
    value: "web",
  } /*,{
    label: "定位服务",
    value: "address"
},{
    label: "添加日程",
    value: "todo"
}*/,
];

const AddResponse = {
  type: "response",
  content: {
    buttonName: "按钮名称",
    type: "response",
  },
};

const AddAction = {
  type: "action",
  content: {
    buttonName: "拨打电话",
    type: "phone",
    phone: "",
  },
};

function BoxButton(props) {
  const { value, onChange, maxCount = 4 } = props;

  const [buttonList, setButtonList] = useState([]);
  const [templateVisible, setTemplateVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const triggerChange = (changedValue) => {
    onChange?.(changedValue || buttonList || value);
  };

  const addAction = () => {
    const List = JSON.parse(JSON.stringify(buttonList));
    if (List.length >= maxCount) {
      message.error(`最多添加${maxCount}个按钮`);
      return;
    }
    List.push(AddAction);
    setButtonList(List);
    triggerChange(List);
  };

  const addResponse = () => {
    const List = JSON.parse(JSON.stringify(buttonList));
    if (List.length >= maxCount) {
      message.error(`最多添加${maxCount}个按钮`);
      return;
    }
    List.push(AddResponse);
    setButtonList(List);
    triggerChange(List);
  };

  const handleButtonName = (value, index) => {
    const List = JSON.parse(JSON.stringify(buttonList));
    List[index].content.buttonName = value;
    setButtonList(List);
    triggerChange(List);
  };

  const handleButton = (key, value, index) => {
    const List = JSON.parse(JSON.stringify(buttonList));
    List[index].content[key] = value;
    setButtonList(List);
    triggerChange(List);
  };

  const handleDelete = (index) => {
    const List = JSON.parse(JSON.stringify(buttonList));
    List.splice(index, 1);
    setButtonList(List);
    triggerChange(List);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setTemplateVisible(true);
  };

  const responseButtonCount = useMemo(
    () => buttonList.filter((item) => item.type === "response").length,
    [buttonList]
  );

  const actionButtonCount = useMemo(
    () => buttonList.filter((item) => item.type === "action").length,
    [buttonList]
  );

  const selTemplate = (value) => {
    // currentIndex
    const List = JSON.parse(JSON.stringify(buttonList));
    List[currentIndex].content.templateId = value;
    setButtonList(List);
    setTemplateVisible(false);
    triggerChange(List);
  };

  return (
    <div className="button-box">
      <Space size="large">
        <Badge count={responseButtonCount}>
          <Button onClick={addResponse}>建议回复</Button>
        </Badge>
        <Badge count={actionButtonCount}>
          <Button onClick={addAction}>建议操作</Button>
        </Badge>
      </Space>

      {(value || buttonList).map((item, index) => {
        if (item.type === "response") {
          return (
            <Row gutter={6} key={index} className="button-hover">
              <Col span={5}>
                <Input
                  size="small"
                  value={item.content.buttonName}
                  allowClear
                  onChange={(item) =>
                    handleButtonName(item.target.value, index)
                  }
                />
              </Col>
              <Col span={4}>
                <Input size="small" disabled value={item.content.templateId} />
              </Col>
              <Col span={4}>
                <Button
                  size="small"
                  type="primary"
                  onClick={() => handleSelect(index)}
                >
                  选择
                </Button>
              </Col>
              <Col span={6} className="button-delete">
                <Tooltip title="删除" placement="right">
                  <Button
                    size="small"
                    danger
                    shape="circle"
                    onClick={() => handleDelete(index)}
                    icon={<DeleteOutlined />}
                  />
                </Tooltip>
              </Col>
            </Row>
          );
        } else if (item.content.type === "phone") {
          return (
            <Row gutter={6} key={index} className="button-hover">
              <Col span={4}>
                <Input
                  size="small"
                  allowClear
                  value={item.content.buttonName}
                  onChange={(item) =>
                    handleButtonName(item.target.value, index)
                  }
                />
              </Col>
              <Col span={4}>
                <Select
                  value={item.content.type}
                  size="small"
                  onChange={(item) => handleButton("type", item, index)}
                >
                  {selectList.map((item) => {
                    return (
                      <Select.Option key={item.value} value={item.value}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Col>
              <Col span={6}>
                <Input
                  size="small"
                  value={item.content.phone}
                  onChange={(e) => handleButton("phone", e.target.value, index)}
                  placeholder="请输入电话"
                />
              </Col>
              <Col span={6} className="button-delete">
                <Tooltip title="删除" placement="right">
                  <Button
                    size="small"
                    danger
                    shape="circle"
                    onClick={() => handleDelete(index)}
                    icon={<DeleteOutlined />}
                  />
                </Tooltip>
              </Col>
            </Row>
          );
        } else if (item.content.type === "web") {
          return (
            <Row gutter={6} key={index} className="button-hover">
              <Col span={4}>
                <Input
                  size="small"
                  allowClear
                  value={item.content.buttonName}
                  onChange={(item) =>
                    handleButtonName(item.target.value, index)
                  }
                />
              </Col>
              <Col span={4}>
                <Select
                  value={item.content.type}
                  size="small"
                  onChange={(item) => handleButton("type", item, index)}
                >
                  {selectList.map((item) => {
                    return (
                      <Select.Option key={item.value} value={item.value}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Col>
              <Col span={6}>
                <Input
                  size="small"
                  value={item.content.web}
                  placeholder="请输入网址"
                />
              </Col>
              <Col span={6} className="button-delete">
                <Tooltip title="删除" placement="right">
                  <Button
                    size="small"
                    danger
                    shape="circle"
                    onClick={() => handleDelete(index)}
                    icon={<DeleteOutlined />}
                  />
                </Tooltip>
              </Col>
            </Row>
          );
        } else if (item.content.type === "") {
          return (
            <div key={index}>
              <Input />
              <Select></Select>
              <Input />
            </div>
          );
        } else if (item.content.type === "") {
          return (
            <div key={index}>
              <Input />
              <Select></Select>
              <Input />
            </div>
          );
        } else {
          return <div></div>;
        }
      })}
      <SelectTemplate
        visible={templateVisible}
        onClose={() => setTemplateVisible(false)}
        handleSelect={selTemplate}
      />
    </div>
  );
}

export default BoxButton;
