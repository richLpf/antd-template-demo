import React, { Fragment, useState } from "react";
import { message, Upload, Button } from "antd";
import { LoadingOutlined, CloudUploadOutlined } from "@ant-design/icons";


const imageTypeList = ['image/jpeg', 'image/png', 'image/jpg']

function UploadBox({ value = {}, onChange, type='img' }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const triggerChange = (changedValue) => {
    onChange?.({
      imageUrl,
      ...value,
      ...changedValue,
    });
  };

  const filePropsImg = {
    name: "file",
    maxCount: 1,
    showUploadList: false,
    action: `${process.env.REACT_APP_UPLOAD_API}/api/upload/`,
    beforeUpload(file, fileList) {
      const isJpgOrPng = imageTypeList.includes(file.type)
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      setLoading(true);
      return isJpgOrPng;
    },
    onChange(info) {
      if (info.file.status === "done") {
        if (info.file.response.RetCode === 1) {
          message.success(`${info.file.name} 上传成功`);
          // 限制只能上传一个文件
          const fileUrl = `${process.env.REACT_APP_UPLOAD_URL}${info.file.response.Files[0]}`;
          setImageUrl(fileUrl);
          triggerChange({ imageUrl: fileUrl });
        } else {
          message.error(
            `${info.file.name} 上传失败，${info.file.response.Message}`
          );
        }
      } else if (info.file.status === "err") {
        message.error(`${info.file.name} 上传失败`);
      }
      setLoading(false);
    },
  };

  const filePropsFile = {
    name: "file",
    maxCount: 1,
    showUploadList: false,
    action: `${process.env.REACT_APP_UPLOAD_API}/api/upload/`,
    beforeUpload(file, fileList) {
      console.log("file", file, fileList)
      setLoading(true);
      return true;
    },
    onChange(info) {
      if (info.file.status === "done") {
        if (info.file.response.RetCode === 1) {
          message.success(`${info.file.name} 上传成功`);
          // 限制只能上传一个文件
          const fileUrl = `${process.env.REACT_APP_UPLOAD_URL}${info.file.response.Files[0]}`;
          setImageUrl(fileUrl);
          triggerChange({ imageUrl: fileUrl });
        } else {
          message.error(
            `${info.file.name} 上传失败，${info.file.response.Message}`
          );
        }
      } else if (info.file.status === "err") {
        message.error(`${info.file.name} 上传失败`);
      }
      setLoading(false);
    },
  };

  const uploadButton = (
    <div
      style={{
        width: 360,
        height: 195,
        border: "1px dashed #eee",
        borderRadius: 4,
        textAlign: "center",
        paddingTop: 60,
      }}
    >
      {loading ? (
        <LoadingOutlined />
      ) : (
        <CloudUploadOutlined style={{ fontSize: 30 }} />
      )}
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  );

  return (
    <Fragment>
      {type==='img'?
        <Upload {...filePropsImg}>
          <div style={{ cursor: "pointer", borderRadius: 4 }}>
            {value.imageUrl || imageUrl ? (
              <img
                src={value.imageUrl || imageUrl}
                alt="avatar"
                style={{ width: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </div>
      </Upload>:
      <Upload { ...filePropsFile }>
        <Button type="primary">{loading ? '上传文件中' : '上传文件'}</Button>
      </Upload>}
    </Fragment>
  );
}

export default UploadBox;
