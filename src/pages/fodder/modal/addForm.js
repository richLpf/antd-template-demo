import React, { Fragment, useState } from 'react'
import { Form, Radio, Modal } from "antd"
import Upload from "../../../components/upload"


function FormModal(props){

    const { visible, setVisible, confirmLoading, handleOk } = props

    const [form] = Form.useForm()
    const [fileType, setFileType] = useState(1)

    const onOk = () => {
        form.validateFields().then(res => {
            // console.log("res", res)
            handleOk(res)
        })
    }

    return <Fragment>
        <Modal 
          title="上传素材"
          visible={visible}
          onOk={onOk}
          onCancel={()=>setVisible(false)}
          width={700}
          okText="确认"
          cancelText="取消"
          confirmLoading={confirmLoading}
        >
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ fileType: 1 }}
                autoComplete="off"
                >
                <Form.Item
                    label="类型"
                    tooltip={
                        <div style={{fontSize: 12}}>注：
                            <div>图片支持JPG/JPEG、PNG格式，且不能大于2M；</div>
                            <div>音频支持MP3，且不能大于5M；</div>
                            <div>视频支持MP4、WEBM格式，且不能大于10M</div>
                        </div>
                    } 
                    name="fileType" 
                    rules={[{ required: true, message: '选择文件类型!' }]} 
                >
                    <Radio.Group onChange={(e)=>setFileType(e.target.value)}>
                        <Radio value={1}>图片</Radio>
                        <Radio value={2}>视频</Radio>
                        <Radio value={3}>音频</Radio>
                    </Radio.Group>
                </Form.Item>
                {fileType!==1?<Form.Item 
                    required
                    label="上传文件" 
                    name="file" 
                >
                    <Upload type="file"/>
                </Form.Item>:null}
                {fileType===1?<Form.Item 
                    rules={[{ required: true, message: '选择上传文件!' }]} 
                    label="上传图片" 
                    name="pic" 
                >
                    <Upload />
                </Form.Item>:null}
                {fileType!==1?<Form.Item 
                    required
                    label="上传缩略图" 
                    name="thumbnail" 
                >
                    <Upload />
                </Form.Item>:null}
            </Form>
        </Modal>
    </Fragment>
}

export default FormModal