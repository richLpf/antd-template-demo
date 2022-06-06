# Antd-template-project

基于React Antd的模版项目

项目进度
- [x] 本地开发，接口反向代理
- [x] 引入less
- [x] prettier + eslint + husky
- [x] 全局化配置
    - [x] 中英文切换
- [x] 完成项目基于Docker的构建
- [x] webpack引入路径别名
- [x] 面包屑处理
- [x] Mock数据
- [x] 基于Antd表格组件封装
    - [x] 基于前端分页、后端分页、下载、刷新、自定义设置表头的表格
    - [x] excel导入表格
- [x] 状态管理Redux
- [x] 调整页面布局和美化颜色(有时间再调整调整)
- [ ] 调整顶栏内容
    - [x] 增加logo和系统名称
    - [x] 增加国际化语言优化显示
    - [x] 增加提示信息
    - [x] 全屏展示
    - [x] 组件型号切换(暂时没有配置入口)
    - [ ] 换肤效果切换
- [x] 页面导航指引
- [x] 工作台
    - [ ] 常见工作台
    - [x] 拖拽工作台
- [ ] 权限系统
- [ ] 切换页面页面meta跟着改变
- [ ] Mock数据生成和导出
- [ ] Excel模块处理
    - [ ] 导入Excel
    - [ ] 导出当前表格Excel
    - [ ] 导出API返回Excel
    - [ ] 导出压缩包
- [ ] 组件系列
    - [ ] 待办页
    - [ ] 时间展示
    - [ ] 倒计时
    - [ ] 复制
    - [ ] 视频录制
- [ ] 工具函数
    - [x] 防抖/节流
    - [ ] 千分位过滤
- [ ] 灰度系统
- [ ] 集成bash编辑器
- [ ] 通过API生成表格组件
- [ ] 路由权限设计
- [ ] 表单封装
- [ ] 多页面应用打包
- [ ] 图表插件的封装
- [ ] 多个详情页面的布局
- [ ] 中后台项目，不同风格的登录页面
- [ ] 换肤效果
- [ ] 表格筛选
- [ ] 页面过长回到顶部
- [ ] 自动化部署
  - [ ] Github CI/CD
  - [ ] shell
- [ ] 前端工程化
    - [ ] 规范
    - [ ] 监控
    - [ ] 灰度
    - [ ] CI/CD部署
    - [ ] CLI

## 一、项目信息

- [文档地址](https://github.com/richLpf/antd-template-demo/tree/main/docs)
- [项目Demo示例]()
## 二、开发

```
cd antd-template-project

yarn install

yarn start
```

## 三、项目依赖模块

项目基于create-react-app，主要引入的插件和依赖包括：

- react
- antd
- axios
- [json2csv:导出csv文件](https://www.npmjs.com/package/json2csv)
- [react-monaco-editor](https://github.com/react-monaco-editor/react-monaco-editor)

## 四、功能截图

首页

![首页](https://cdn.jsdelivr.net/gh/richLpf/pictures@main/gitbook/1650191170715dashboard.png)

图表

![图表展示](https://cdn.jsdelivr.net/gh/richLpf/pictures@main/gitbook/1639620289264demo1.png)

富文本

拖拽工作台
## 五、项目基建

- ESlint配置
- 代码格式化，注释处理
- 生产环境、预发环境配置
- 全局信息配置

## 六、项目布局

- 登陆页面
    - 登录页面的设计
    - 手机号、验证码、滑动验证等
    - 密码的正则校验
    - 缓存登录数据，判断当前页面是否登录
- 注册页面


## 七、自动化部署

- Dockerfile
- GitLab CI/CD
- GitHub Action
- 虚机部署
- K8s部署

## 八、Q&A

- 前端反向代理配置
- 开发阶段在eslint编译不通过会阻止程序运行，如何处理？
https://stackoverflow.com/questions/64518226/my-create-react-app-is-failing-to-compile-due-to-eslint-error
- screenfull编译报错，使用5.1.0版本


## 九、优秀的demo项目整理
- [react-antd-admin](https://nlrx.gitee.io/react-antd-admin-template/#/dashboard)
- [vue-demo](https://panjiachen.github.io/vue-element-admin/#/dashboard)


