import React, { Fragment, useState, useEffect } from "react";
import {
  Drawer,
  Checkbox,
  Row,
  Col,
  PageHeader,
  Button,
  message,
  Select,
} from "antd";
// import Tour from 'reactour'
import {
  BaseList,
  SettingTips,
  isAdministrator,
  initWidgetsData,
} from "./utils";
import SetDashboard from "./components/setDashboard";
// import * as Api from "api/workbench"
// import { aclApi } from '@/api/compass';
// import { uniqueKeyArr, getUserValue } from "src/utils/util"
// import { getLocalStorage } from "./utils"

const { Option } = Select;

function SetWorkbench() {
  const initWidgets = ["UserInfo", "Notices"];
  const [checkComponent, setCheckComponent] = useState(initWidgets);
  // const [isTourOpen, setIsTourOpen] = useState(false);
  const [widgets, setWidgets] = useState(initWidgetsData);
  const [workbenchName] = useState("默认");
  // const [initData, setInitData] = useState({})
  // const [roleList, setRoleList] = useState([])
  const [adminSelectedRole, setAdminSelectedRole] = useState();
  const [userRoles] = useState([]);
  const [workbenchResource, setWorkbenchResource] = useState([]);
  // const [step, setStep] = useState(0)
  // const [loading, setLoading] = useState(false)
  // const [roleTemplate, setRoleTemplate] = useState([])

  // 收入进入页面要处理的逻辑
  // 1、判断是否为管理员
  // 2、获取用户的权限资源
  // 3、获取用户的当前的工作台配置
  // 4、如果用户没有工作台配置，拉取角色配置，或是管理员，则选择管理员的配置，若不是选择第一个
  useEffect(() => {
    setWidgets(initWidgetsData);
    setWorkbenchResource(BaseList);
    // getUserRoles();
    // getWorkbenchResources();
    // open();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return;
    // if(initData&&Object.keys(initData).length > 0){
    // const { Widget } = initData
    // if(Widget){
    // try{
    // setWidgets(JSON.parse(Widget))
    // window.localStorage.setItem("isFirst", JSON.stringify(1))
    // setIsTourOpen(false);
    // }catch(err){
    // console.log(err)
    // }
    // }else{
    // setWidgets(initWidgetsData)
    // }
    // }
  }, []);

  const onClose = () => {};

  /*
    function open() {
        let isFirst = getLocalStorage('isFirst');
        let temp = false;
        let value = 1;
        if(isFirst===1) {
            temp = false;
        }else {
            temp = true;
            window.localStorage.setItem("isFirst", JSON.stringify(value))
        }
        setIsTourOpen(temp);
        // const isFirst = getLocalStorage('isFirst')
        // setIsTourOpen(Number(isFirst)===1?false:true)
        // window.localStorage.setItem("isFirst", JSON.stringify(isFirst))
    }
    */

  // 获取角色列表，用来翻译当前角色
  // const getRoleList = () => {
  // aclApi.getAllRoles().then(res => {
  // const { RetCode, Roles } = res
  // if(RetCode === 0){
  // setRoleList(Roles)
  // }
  // })
  // }

  function onChange(checkedValues) {
    setCheckComponent(checkedValues);
  }

  // 6、用户点击保存：
  // 看是否选择模版
  // 选择：管理员修改角色模版，生效提示，不跳转
  // 未选择：保存配置到个人用户，并生效跳转工作台
  const toSave = async () => {
    if (!workbenchName) {
      message.error("请输入工作台名称");
      return;
    }
    /*
        const obj = {
            Name: workbenchName,
            Widgets: JSON.stringify(widgets)
        }
        if(isAdministrator(userRoles)&&adminSelectedRole){
            try{
                // await Api.SetWorkbenchRole({...obj, RoleId: Number(adminSelectedRole)})
                message.success("模版配置成功")
            }catch(err){
                message.error(String(err))
            }
        }else{
        
            try{
                // const { Data: { SetId }, RetCode, Message } = await Api.SetUserPreference(obj)
                // if(RetCode !== 0){
                    // message.error(Message)
                    // return
                // }
                // const result = await Api.SetUserCurrentWorkbench({ Type: 2, SetId })
                // if(result.RetCode === 0){
                    // window.location.href = "/"
                // }else{
                    // message.error(result.Message)
                // }
            }catch(err){
                console.log("err", err)
            }
        }
    }*/
  };

  const onCancel = () => {
    window.location.href = "/";
  };

  /*
    // 获取用户配置
    const getWorkbenchConfig = async () => {
        Api.GetUserPreference().then(res => {
            const { Data, RetCode } = res
            if(RetCode === 0 && Data.Layout && Data.Widget){
                setWorkbenchName(Data.Name)
                setInitData(Data)
            }else{
                getRoleWorkbenchConfig()
            }
        })
    }
    */

  // const getWorkbenchConfig = async () => {
  // setLoading(true)
  // Api.GetUserCurrentWorkbench().then(res => {
  // const { Data: { Widgets, Name, SwitchFlag }, RetCode } = res
  // if(RetCode===0&&SwitchFlag.Type===2&&Widgets) {
  // setInitData({ Widget: Widgets, Name})
  // setLoading(false)
  // }else{
  // getRoleWorkbenchConfig()
  // }
  // }).catch(err => {
  // message.error(String(err))
  // })
  // }

  // 如果是普通用户，如果没有个人配置，则默认拉取第一个角色配置，编辑后保存为个人配置
  // const getRoleWorkbenchConfig = () => {
  // setLoading(true)
  // Api.GetUserRolePreference().then(res => {
  // const { Data, RetCode } = res
  // if(RetCode === 0&&Data&&Data.length>0){
  // setWorkbenchName(Data[0].Name)
  // setInitData(Data[0])
  // setLoading(true)
  // }else {
  // setLoading(false)
  // setInitData(initWidgetsData)
  // }
  // })
  // }

  // 获取当前用户工作台可展示的资源
  // function getWorkbenchResources(){
  // aclApi.getWorkbenchResources().then(res => {
  // const { RetCode, Permissions } = res
  // if(RetCode === 0){
  // setWorkbenchResource(tabList(uniqueKeyArr(Permissions, "id")))
  // getWorkbenchConfig();
  // }else{
  // message.error(SettingTips.error)
  // }
  // })
  // }

  // 获取当前用户所有角色
  // function getUserRoles(){
  // let name = getUserValue('name', 'userName', UserStore)
  // aclApi.getUserList({user: name}).then(res => {
  // const { UserRoles, RetCode } = res
  // if(RetCode !== 0){
  // message.error(SettingTips.error)
  // }else{
  // setUserRoles(UserRoles)
  // if(isAdministrator(UserRoles)){
  // getRoleList()
  // }
  // }
  // })
  // }
  // 获取指定角色的配置
  // function GetRoleSetting(roleId){
  // setLoading(true)
  // Api.GetRolePreference(roleId).then(res => {
  // const { RetCode, Data, Message } = res
  // if(RetCode !== 0||!Data.Widget){
  // message.error(Message)
  // }else{
  // try{
  // setWidgets(JSON.parse(Data.Widget))
  // }catch(err){

  // }
  // }
  // setLoading(false)
  // })
  // }

  function handleSelectedRole(val) {
    // if(val){
    // GetRoleSetting(val)
    // }else{
    // getWorkbenchConfig()
    // }
    // 拉取当前角色模版渲染
    setAdminSelectedRole(val);
  }
  // function closeTour() {
  // setIsTourOpen(false)
  // }

  // function getCurrentStep(cur) {
  // setStep(cur)
  // }

  return (
    <Fragment>
      {/*<Tour 
                closeWithMask={false}
                steps={steps} 
                isOpen={isTourOpen} 
                onRequestClose={closeTour}
                getCurrentStep={getCurrentStep}
                prevButton = {
                    <span className={step===0 ? 
                        'tour-prev-button common-tour-button not-allowed':
                        'tour-prev-button common-tour-button'}
                    >
                        上一步
                    </span>
                }
                nextButton = {
                    <span className='tour-next-button common-tour-button'>下一步</span>
                }
                lastStepNextButton = {
                    <span className='tour-next-button common-tour-button'>立即体验</span>
                }
            >
            </Tour>*/}
      <Drawer
        // title={WorkbenchTitle()}
        title={"请选择模块"}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={true}
        mask={false}
        width={200}
      >
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onChange}
          value={checkComponent}
          defaultValue={checkComponent}
          h="2"
          data-tut="reactour__checkbox"
        >
          <Row>
            {workbenchResource.map((item) => {
              return (
                <Col key={item.id} span={24} style={{ marginBottom: 15 }}>
                  <Checkbox
                    value={item.resource}
                    disabled={item.public ? true : false}
                  >
                    {item.name}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </Checkbox.Group>
      </Drawer>
      <PageHeader
        style={{ marginLeft: 200 }}
        title="自定义工作台"
        subTitle={
          isAdministrator(userRoles) && adminSelectedRole
            ? SettingTips.admin
            : SettingTips.user
        }
        extra={[
          isAdministrator(userRoles) ? (
            <Select
              size="small"
              allowClear
              showSearch
              value={adminSelectedRole}
              key={1}
              style={{ width: 200 }}
              onChange={(val) => handleSelectedRole(val)}
              placeholder="管理员配置角色模版"
            >
              {[].map(({ id, name }) => {
                return (
                  <Option key={id} value={String(id)}>
                    {name}
                  </Option>
                );
              })}
            </Select>
          ) : (
            <span key="1"></span>
          ),
          <Button
            key="2"
            size="small"
            type="primary"
            onClick={toSave}
            h="4"
            data-tut="reactour__save"
          >
            保存
          </Button>,
          <Button key="3" size="small" onClick={onCancel}>
            取消
          </Button>,
        ]}
      />
      <div style={{ marginLeft: 200 }}>
        <SetDashboard
          initWidgets={initWidgets}
          widgets={widgets}
          setWidgets={(params) => {
            setWidgets(params);
          }}
          selectedComponent={checkComponent}
          setCheckComponent={setCheckComponent}
          currentRole={adminSelectedRole}
          workbenchResource={workbenchResource}
          loading={false}
        />
      </div>
    </Fragment>
  );
}

export default SetWorkbench;
