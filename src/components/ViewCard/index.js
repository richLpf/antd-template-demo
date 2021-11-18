/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-17 11:28:29
 * @LastEditors: pengfei.lv
 * @Description:
 */
import React, { Fragment } from "react";
import { Button, Space, Image } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import "./style.css";

function ViewCard(props) {
  const {
    inReview = true,
    allowSend,
    allowEdit,
    allowDelete,
    handleReview,
    handleSend,
    handleEdit,
    handleDelete,
  } = props;

  return (
    <Fragment>
      <div className="card-box-wrap">
        <div className="card-box" style={{ padding: 10 }}>
          <div>
            <div className="check-status">
              <span>审核中</span>
            </div>
            <Image
              preview={false}
              width={"100%"}
              height={150}
              src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
              placeholder={
                <div style={{ paddingTop: 70 }}>
                  <Loading3QuartersOutlined />
                </div>
              }
            />
          </div>
          <div>模版标题</div>
        </div>
        <div className="shadow">
          <Space style={{ marginTop: 75 }} wrap align={"center"}>
            {inReview ? (
              <Button size="small" type="primary" onClick={handleReview}>
                预览
              </Button>
            ) : null}
            {allowSend ? (
              <Button size="small" onClick={handleSend}>
                发送
              </Button>
            ) : null}
            {allowEdit ? (
              <Button size="small" onClick={handleEdit}>
                编辑
              </Button>
            ) : null}
            {allowDelete ? (
              <Button size="small" danger onClick={handleDelete}>
                删除
              </Button>
            ) : null}
          </Space>
        </div>
      </div>
    </Fragment>
  );
}

export default ViewCard;
