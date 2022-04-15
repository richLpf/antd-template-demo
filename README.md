# Antd-template-project

基于React Antd的模版项目

项目进度
- [x] 本地开发，接口反向代理
- [x] 引入less
- [x] prettier + eslint + husky
- [x] 全局化配置
    - [ ] 状态管理Redux
    - [ ] 中英文切换
- [x] 完成项目基于Docker的构建
- [ ] 面包屑处理
- [ ] 基于Antd表格组件封装
    - [ ] 基于前端分页、后端分页、下载、刷新、自定义设置表头的表格
    - [ ] excel导入表格
    - [ ] 表格筛选
- [ ] 拖拽工作台
- [ ] 引导页
- [ ] redux的引入
- [ ] 路由权限设计
- [ ] 表单封装
- [ ] 多页面应用打包
- [ ] 图表插件的封装
- [ ] 多个详情页面的布局
- [ ] 中后台项目，不同风格的登录页面
- [ ] 换肤效果

## 关于项目中中英文切换有两部分

- 项目UI框架（antd）的中英文配置[中英文配置](https://ant.design/components/config-provider-cn/)
- 项目中业务代码中英文翻译

- 定义变量控制中英文
- 配置ui框架的中英文
- 自定义的中英文，转化成map
- 全局挂载存储，session/reduce/window/全局变量
- 读取变量翻译

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

## 九、优秀的demo项目整理
- [react-antd-admin](https://nlrx.gitee.io/react-antd-admin-template/#/dashboard)
- [vue-demo](https://panjiachen.github.io/vue-element-admin/#/dashboard)


