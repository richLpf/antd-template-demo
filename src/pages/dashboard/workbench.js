import React, { Fragment } from "react";
import { Spin } from "antd";
import { showComponent, defaultProps, initWidgetsData } from "./utils";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

// const initWidgets = "[{\"w\":4,\"h\":2,\"x\":0,\"y\":0,\"i\":\"UserInfo\",\"minW\":2,\"maxW\":4,\"minH\":2,\"moved\":false,\"static\":false},{\"w\":2,\"h\":3,\"x\":4,\"y\":2,\"i\":\"Notices\",\"minW\":2,\"maxW\":4,\"minH\":2,\"moved\":false,\"static\":false},{\"w\":4,\"h\":3,\"x\":0,\"y\":5,\"i\":\"CompanyBoard\",\"minH\":2,\"moved\":false,\"static\":false},{\"w\":2,\"h\":3,\"x\":2,\"y\":2,\"i\":\"ApplicationOrder\",\"minH\":2,\"moved\":false,\"static\":false},{\"w\":2,\"h\":2,\"x\":4,\"y\":0,\"i\":\"RecentVisit\",\"minH\":2,\"moved\":false,\"static\":false},{\"w\":2,\"h\":3,\"x\":0,\"y\":2,\"i\":\"MyCollect\",\"minH\":2,\"moved\":false,\"static\":false}]"
// console.log("widgets", JSON.stringify(JSON.parse(initWidgets), null, 2))

function Dashboard() {
  const widgets = initWidgetsData;

  const generateBox = (widgets) => {
    return widgets.map((item) => {
      let component = showComponent(item.i);
      return (
        <div key={item.i} data-grid={item}>
          {component}
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div style={{ margin: "0 20px 20px", minHeight: 600 }}>
        <Spin spinning={false}>
          <ReactGridLayout
            isDraggable={false}
            isResizable={false}
            className="layout"
            {...defaultProps}
          >
            {generateBox(widgets)}
          </ReactGridLayout>
        </Spin>
      </div>
    </Fragment>
  );
}

export default Dashboard;
