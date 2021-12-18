import React, { Fragment } from "react";
import { Tabs } from "antd";
import TableBase from "./base";
import TableGroup from "./group";

const { TabPane } = Tabs;

function TableDemo() {
  return (
    <Fragment>
      <Tabs>
        <TabPane key={1} tab="基础表单">
          <TableBase />
        </TabPane>
        <TabPane key={2} tab="滚动表单">
          <TableGroup />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default TableDemo;
