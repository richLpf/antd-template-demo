import React, { useState } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

import { readExcel } from "./utils";

/* 只读取上传excel内容，不上传到ufile */
const UploadReader = (props) => {
  const { onChange, text, style, ...restProps } = props;

  const [fileName, setFileName] = useState();

  // 上传后读取表格数据
  const onImportExcel = (file) => {
    const { files } = file.target;
    const name = files.length > 0 ? files[0].name : undefined;
    setFileName(name);
    readExcel(file, (list) => onChange(list));
  };

  return (
    <span>
      <Button style={style} {...restProps}>
        {text || "导入"}
        <input
          style={{
            opacity: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          type="file"
          accept=".xlsx, .xls"
          onChange={onImportExcel}
        />
      </Button>
      <span style={{ margin: "0 4px" }}>{fileName}</span>
    </span>
  );
};

UploadReader.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.object,
};

export default UploadReader;
