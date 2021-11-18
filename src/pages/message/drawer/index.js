/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-16 18:37:29
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React from "react";
import { Drawer, Card, Pagination } from "antd";
import ViewCard from "../../../components/ViewCard";

function TemplateSelect(props) {
  const { visible, onClose, handleSelect } = props;

  return (
    <Drawer
      title="选择发送模版"
      width="900"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <Card>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {[1, 2, 2, 3, 3, 4, 5, 6].map((item, index) => {
            return (
              <div
                key={index}
                style={{ width: "33%", float: "left" }}
                onClick={() => handleSelect(item)}
              >
                <ViewCard inReview={false} />
              </div>
            );
          })}
        </div>
        <Pagination
          style={{ textAlign: "right", marginTop: 20 }}
          defaultCurrent={1}
          total={50}
        />
      </Card>
    </Drawer>
  );
}

export default TemplateSelect;
