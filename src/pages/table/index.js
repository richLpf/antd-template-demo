import React, { Fragment } from "react";
import { Tabs } from "antd";
import TableBase from "./base";
import TableGroup from "./group";

const { TabPane } = Tabs;

function TableDemo() {
  return (
    <Fragment>
      <Tabs>
        <TabPane key={1} title="基础表单" tab="base">
          <TableBase />
        </TabPane>
        <TabPane key={2} title="滚动表单" tab="test">
          <TableGroup />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default TableDemo;
