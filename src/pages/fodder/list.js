import React, { Fragment } from "react";
import { Pagination, Card, Row, Col } from "antd";
import { fodderCheckType, fodderColorList } from "../../utils/const";

const { Meta } = Card;

const fodderList = [
  {
    title: "素材一号",
    type: "img",
    status: 1,
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "素材二号",
    type: "mp3",
    status: 2,
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "素材三号",
    type: "img",
    status: 3,
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    title: "素材四号",
    type: "img",
    status: 4,
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

function List(props) {
  return (
    <Fragment>
      <Card className="fodder-box" style={{ textAlign: "left" }}>
        <Row gutter={16}>
          {fodderList.map((item, index) => {
            return (
              <Col
                span={4}
                key={index}
                style={{ marginBottom: 10 }}
                onClick={() => props.handleSelect(item)}
              >
                <Card
                  size="small"
                  style={{ overflow: "hidden" }}
                  cover={
                    <div className="fodder-top">
                      <div>
                        <img
                          style={{ width: "100%" }}
                          alt="素材"
                          src={item.url}
                        />
                      </div>
                      <div
                        className="shadow"
                        style={{ background: fodderColorList[item.status] }}
                      >
                        {fodderCheckType[item.status]}
                      </div>
                    </div>
                  }
                >
                  <Meta
                    title={
                      <div
                        style={{
                          textAlign: "center",
                          width: "100%",
                          fontSize: 14,
                        }}
                      >
                        {item.title}
                      </div>
                    }
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
        <Pagination
          style={{ textAlign: "right", marginTop: 20 }}
          defaultCurrent={1}
          total={50}
        />
      </Card>
    </Fragment>
  );
}

export default List;
