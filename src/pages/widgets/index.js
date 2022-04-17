import React from "react";
import { Tabs, Card } from "antd";
import TagsMore from "../../components/TagsMore";

const { TabPane } = Tabs;

function Widgets() {
  return (
    <Card>
      <Tabs>
        <TabPane key={1} title="markdown" tab="富文本">
          <TagsMore />
        </TabPane>
        <TabPane key={2} title="" tab="second"></TabPane>
      </Tabs>
    </Card>
  );
}

export default Widgets;
