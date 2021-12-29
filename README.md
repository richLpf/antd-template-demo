# Antd-template-project

基于React Antd的模版项目

项目进度
- [x] 本地开发，接口反向代理
- [ ] 中后台项目，不通风格的登录页面
- [ ] 多个的布局方式
- [ ] redux的引入
- [ ] 完成项目基于Docker的构建
- [ ] 基于Antd表格组件封装
    - [ ] 基于前端分页、后端分页、下载、刷新、自定义设置表头的表格
    - [ ] 表格筛选
- [ ] 图表插件的封装
- [ ] 多个详情页面的布局


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

## 八、代码目录

## 九、Q&A

- 前端反向代理配置

## 十、结尾

加油