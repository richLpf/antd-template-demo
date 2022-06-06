import React, { useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { CloseCircleOutlined, FullscreenOutlined } from "@ant-design/icons";
import {
  showComponent,
  getObjectByResource,
  defaultProps,
  showComponentTip,
} from "../utils";

const ReactGridLayout = WidthProvider(RGL);

function SetDashboard(props) {
  const {
    selectedComponent,
    initWidgets,
    widgets,
    setWidgets,
    currentRole,
    workbenchResource,
    loading,
  } = props;

  console.log("widgets", widgets);
  // 从接口拉取，如果没有则证明没有选中，直接给默认的两个
  useEffect(() => {}, [currentRole]);

  useEffect(() => {
    // setCheckComponent(widgets?.map(s => s.i))
    // eslint-disable-next-line
  }, [widgets]);

  useEffect(() => {
    const result = moduleOperate(
      selectedComponent,
      widgets?.map((s) => s.i)
    );
    if (result.nameList.length > 0) {
      handleItem(result);
    }
    // eslint-disable-next-line
  }, [selectedComponent]);

  // 新增模块或删除模块
  const moduleOperate = (selectedBox = [], currentBox = []) => {
    const diffLength = selectedBox.length - currentBox.length;
    const selectedSet = new Set(selectedBox);
    const currentBoxSet = new Set(currentBox);

    const difference =
      diffLength > 0
        ? Array.from(
            new Set([...selectedSet].filter((s) => !currentBoxSet.has(s)))
          )
        : Array.from(
            new Set([...currentBoxSet].filter((s) => !selectedSet.has(s)))
          );
    return {
      operate: diffLength > 0 ? "add" : "remove",
      nameList: difference.length > 0 ? difference : [],
    };
  };

  const onRemoveItem = (type) => {
    setWidgets(widgets.filter((item) => item.i !== type));
  };

  const handleItem = ({ operate, nameList }) => {
    if (operate === "add") {
      handleAddItem(nameList[0]);
    } else {
      onRemoveItem(nameList[0]);
    }
  };

  const generateBox = (widgets) => {
    return widgets.map((item) => {
      let component = showComponent(item.i);
      let currentTip = showComponentTip(item.i);
      return (
        <div
          key={item.i}
          data-grid={item}
          style={{ position: "relative" }}
          h="3"
          data-tut="reactour__dashboard"
        >
          {!initWidgets.includes(item.i) ? (
            <span className="remove" onClick={() => onRemoveItem(item.i)}>
              <CloseCircleOutlined />
            </span>
          ) : null}
          <div className="workbench-mark">
            <div>
              <p>{currentTip}</p>
              <p>
                <FullscreenOutlined />
                仅支持拖拽和缩放
              </p>
            </div>
          </div>
          {component}
        </div>
      );
    });
  };

  const handleAddItem = (type) => {
    const originItem = getObjectByResource(workbenchResource, type);
    const { w, h, minH, maxH, minW, maxW } = originItem || {};
    // 判断添加的模块用户是否已经配置，如果存在取用户配置的模块的样式，如果不存在初始化
    if (Object.keys(originItem).length > 0) {
      const addItem = {
        x: widgets.length % 2 === 0 ? 0 : 4,
        y: Infinity,
        w,
        h,
        i: type,
        minH,
        maxH,
        minW,
        maxW,
      };
      setWidgets([...widgets, { ...addItem, type }]);
    }
  };

  return (
    <div>
      <Spin spinning={loading} tip="Loading...">
        <div style={{ background: "#e9efff", padding: 20, minHeight: 300 }}>
          {!loading && widgets && widgets.length > 0 ? (
            <ReactGridLayout
              isResizable={true}
              className="layout"
              onLayoutChange={(layout) => {
                setWidgets(layout);
              }}
              {...defaultProps}
            >
              {generateBox(widgets)}
            </ReactGridLayout>
          ) : null}
        </div>
      </Spin>
    </div>
  );
}

SetDashboard.propTypes = {
  selectedComponent: PropTypes.arrayOf(PropTypes.string),
  setCheckComponent: PropTypes.func,
  initWidgets: PropTypes.any,
  widgets: PropTypes.any.isRequired,
  setWidgets: PropTypes.func,
  loading: PropTypes.bool,
  currentRole: PropTypes.any,
  workbenchResource: PropTypes.any,
};

export default SetDashboard;
