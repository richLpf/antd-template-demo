import React from "react";
import { Tabs, Card } from "antd";
import TagsMore from "../../components/TagsMore";

const { TabPane } = Tabs;

function Widgets() {
  return (
    <Card>
      <Tabs>
        <TabPane key={1} title="功能组件一" tab="first">
          <TagsMore />
        </TabPane>
        <TabPane key={2} title="功能组件二" tab="second"></TabPane>
      </Tabs>
    </Card>
  );
}

export default Widgets;
