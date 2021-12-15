import React, { useState } from "react";
import { Tabs, Card } from "antd";
import Base from "../../components/FormDemo/base";
import UseFormDemo from "../../components/FormDemo/useForm";
import LayoutForm from "../../components/FormDemo/layoutForm";
import FormSize from "../../components/FormDemo/formSize";
import WarnCommitForm from "../../components/FormDemo/warnCommit";
import DynamicFieldSet from "../../components/FormDemo/DynamicFieldSet";
import DynamicFieldSetMore from "../../components/FormDemo/DynamicFieldSetMore";
import DynamicFieldComplex from "../../components/FormDemo/DynamicFieldComplex";
import NestForm from "../../components/FormDemo/nestForm";
import ComplexForm from "../../components/FormDemo/complexForm";
import DefineForm from "../../components/FormDemo/defineForm";
import SaveFormData from "../../components/FormDemo/saveFormData";
import MultipleRelatedForm from "../../components/FormDemo/multipleRelatedForm";
import TimeForm from "../../components/FormDemo/timeForm";
import RowForm from "../../components/FormDemo/selfHandleForm";

const { TabPane } = Tabs;

function Business() {
  const [activeKey, setActiveKey] = useState("1");

  const callback = (val) => {
    setActiveKey(val);
  };

  return (
    <Card>
      <Tabs activeKey={activeKey} onChange={callback}>
        <TabPane tab="基础表单" key="1">
          <Base />
        </TabPane>
        <TabPane tab="useForm" key="2">
          <UseFormDemo />
        </TabPane>
        <TabPane tab="布局表单" key="3">
          <LayoutForm />
        </TabPane>
        <TabPane tab="表单大小" key="4">
          <FormSize />
        </TabPane>
        <TabPane tab="非阻塞校验" key="5">
          <WarnCommitForm />
        </TabPane>
        <TabPane tab="动态增减" key="6">
          <DynamicFieldSet />
        </TabPane>
        <TabPane tab="动态增减嵌套" key="7">
          <DynamicFieldSetMore />
        </TabPane>
        <TabPane tab="动态复杂嵌套" key="8">
          <DynamicFieldComplex />
        </TabPane>
        <TabPane tab="校验信息自定义" key="9">
          <NestForm />
        </TabPane>
        <TabPane tab="复杂控件" key="10">
          <ComplexForm />
        </TabPane>
        <TabPane tab="自定义控件" key="11">
          <DefineForm />
        </TabPane>
        <TabPane tab="获取表单数据" key="12">
          <SaveFormData />
        </TabPane>
        <TabPane tab="表单联动" key="13">
          <MultipleRelatedForm />
        </TabPane>
        <TabPane tab="时间类组件" key="14">
          <TimeForm />
        </TabPane>
        <TabPane tab="自定处理表单值和报错" key="15">
          <RowForm />
        </TabPane>
        <TabPane tab="自定义校验" key="16">
          {/*<DefineCheck />*/}
        </TabPane>
        <TabPane tab="动态表单校验" key="17">
          {/*<DefineCheck />*/}
        </TabPane>
      </Tabs>
    </Card>
  );
}

export default Business;
