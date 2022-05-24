import React, { Fragment, useEffect } from "react";
import { Modal, Form } from "antd";
import PropTypes from "prop-types";
import FormItem from "./FormItem";

const defaultLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function FormModal(props) {
  const {
    itemOption,
    title,
    visible,
    cancel,
    handleOk,
    initialValues,
    confirmLoading,
    width,
    layout,
    editInfo,
    rest,
  } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    if (editInfo) {
      console.log("editInfo", editInfo);
    }
    return () => {
      form.resetFields();
    };
  }, [visible, form, editInfo]);

  const confirm = () => {
    form
      .validateFields()
      .then((values) => {
        handleOk(values);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Fragment>
      <Modal
        forceRender
        title={
          title ||
          (editInfo && Object.keys(editInfo).length === 0 ? "新增" : "编辑")
        }
        visible={visible}
        onOk={confirm}
        onCancel={cancel}
        width={width}
        confirmLoading={confirmLoading}
        {...rest}
      >
        <Form
          form={form}
          {...(layout ? layout : defaultLayout)}
          initialValues={initialValues}
        >
          {itemOption
            ? itemOption.map((item, index) => {
                return (
                  <Form.Item
                    key={index}
                    label={item.label}
                    name={item.name}
                    rules={[{ ...item.rules }]}
                  >
                    {FormItem(item)}
                  </Form.Item>
                );
              })
            : null}
        </Form>
      </Modal>
    </Fragment>
  );
}

FormModal.propTypes = {
  itemOption: PropTypes.array.isRequired,
  handleOk: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
  cancel: PropTypes.func,
  initialValues: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  confirmLoading: PropTypes.bool,
  leftAction: PropTypes.element,
  rest: PropTypes.object,
  layout: PropTypes.object,
  editInfo: PropTypes.object,
};

export default FormModal;
