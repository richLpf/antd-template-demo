import React, { Fragment } from "react";
import { Tabs } from "antd";
import TableBase from "./base";
import TableGroup from "./group";

const { TabPane } = Tabs;

function TableDemo() {
  return (
    <Fragment>
      <Tabs>
        <TabPane key={1} tab="封装表格">
          <TableBase />
        </TabPane>
        <TabPane key={2} tab="基础表格">
          <TableBase />
        </TabPane>
        <TabPane key={3} tab="滚动表格">
          <TableGroup />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default TableDemo;
