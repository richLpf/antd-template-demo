import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import {
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

function EditorComponents(props) {
  const { initialValue, postId, putFunction, putKey, widthValue } = props;

  useEffect(() => {
    setValueInput(initialValue);
  }, [initialValue]);

  const [valueEdited, setValueEdited] = useState(false);
  const [valueInput, setValueInput] = useState(initialValue);

  function saveValue() {
    const postData = {
      id: postId,
    };
    postData[putKey] = valueInput;
    putFunction(postData);
    setValueEdited(false);
  }
  return (
    <span className="editor-container">
      {valueEdited ? (
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 10 }}
          style={{ width: widthValue ? widthValue : 360 }}
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          maxLength={
            putKey === "necessity" || putKey === "risk" ? 500 : undefined
          }
        />
      ) : (
        <span className="text-pre-line" style={{ whiteSpace: "pre-line" }}>
          {initialValue ? initialValue : ""}
        </span>
      )}
      {valueEdited ? (
        <span>
          <Button
            type="link"
            title="保存"
            onClick={() => saveValue()}
            icon={<CheckCircleOutlined />}
            className="save-icon-btn"
          />
          <Button
            type="link"
            title="取消"
            onClick={() => setValueEdited(false)}
            icon={<CloseCircleOutlined />}
            className="close-icon-btn"
          />
        </span>
      ) : (
        <Button
          size="small"
          title="修改"
          className="editor-btn"
          type="link"
          icon={<EditOutlined />}
          onClick={() => setValueEdited(true)}
        />
      )}
    </span>
  );
}

EditorComponents.propTypes = {
  initialValue: PropTypes.object,
  postId: PropTypes.string,
  putFunction: PropTypes.func,
  putKey: PropTypes.string,
  widthValue: PropTypes.string,
};

export default EditorComponents;
