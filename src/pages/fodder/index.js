import React, { Fragment } from "react";
import { Pagination, Card, Row, Col, Button } from "antd";
// import { SearchOutlined } from "@ant-design/icons"
import TableFilter from "../../components/TableFilter";

const { Meta } = Card;

function Fodder() {
  const onSearch = () => {};

  const filterFields = [
    {
      label: "关键字",
      key: "AppId",
      type: "Input",
    },
  ];

  return (
    <Fragment>
      <Card
        title={
          <TableFilter
            onSearch={onSearch}
            leftActions={[
              <Button size="small" type="primary">
                新增
              </Button>,
            ]}
            fields={filterFields}
            rowCount={3}
          />
        }
        style={{ textAlign: "left" }}
      >
        <Row gutter={16}>
          {[1, 2, 2, 3, 3, 4, 5, 6].map((item, index) => {
            return (
              <Col span={4} key={index} style={{ marginBottom: 10 }}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta title="Card title" />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>
      <Pagination
        style={{ textAlign: "right", marginTop: 20 }}
        defaultCurrent={1}
        total={50}
      />
    </Fragment>
  );
}

export default Fodder;
