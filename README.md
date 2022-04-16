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
- [ ] 基于Antd表格组件封装
    - [ ] 基于前端分页、后端分页、下载、刷新、自定义设置表头的表格
    - [ ] excel导入表格
    - [ ] 表格筛选
- [ ] 拖拽工作台
- [ ] 引导页
- [ ] 状态管理Redux
- [ ] redux的引入
- [ ] 路由权限设计
- [ ] 表单封装
- [ ] 多页面应用打包
- [ ] 图表插件的封装
- [ ] 多个详情页面的布局
- [ ] 中后台项目，不同风格的登录页面
- [ ] 换肤效果


## 

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

![首页](https://cdn.jsdelivr.net/gh/richLpf/pictures@main/gitbook/1639620462711dashboard.png)

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

## 九、优秀的demo项目整理
- [react-antd-admin](https://nlrx.gitee.io/react-antd-admin-template/#/dashboard)
- [vue-demo](https://panjiachen.github.io/vue-element-admin/#/dashboard)


