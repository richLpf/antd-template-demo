(this["webpackJsonpantd-template-project"]=this["webpackJsonpantd-template-project"]||[]).push([[14],{463:function(e,t,n){"use strict";n(370);var a=n(373),c=(n(404),n(424)),l=n(0),r=n(4);function i(e){var t=e.list,n=void 0===t?[]:t;return Object(r.jsx)(l.Fragment,{children:Object(r.jsx)(a.b,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(r.jsx)(c.a,{children:e},e)}))})})}i.defaultProps={list:["name"]},t.a=i},755:function(e,t,n){"use strict";n.r(t);n(370);var a=n(373),c=(n(97),n(47)),l=(n(216),n(150)),r=n(364),i=(n(379),n(151)),o=n(43),u=n(0),s=(n(582),n(583)),d=n(20),b=n(463),j=n(4),f=function(e){var t=e.handleEdit,n=e.handleDelete;return[{title:"ID",dataIndex:"ID",key:"ID"},{title:"\u4e2d\u6587\u540d",dataIndex:"ChName",key:"ChName"},{title:"\u7528\u6237\u540d",dataIndex:"Name",key:"Name"},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"RoleInfo",key:"RoleInfo",render:function(e){return e&&e.length?Object(j.jsx)(b.a,{list:e.map((function(e){return e.RoleName}))}):""}},{title:"\u90ae\u7bb1",dataIndex:"Email",key:"Email"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"CreateTime",key:"CreateTime",sorter:!0,render:function(e){return Object(d.c)(e)}},{title:"\u64cd\u4f5c",dataIndex:"actions",key:"actions",render:function(e,l){return Object(j.jsxs)(a.b,{children:[Object(j.jsx)(c.a,{type:"link",size:"small",onClick:function(){return t(l)},children:"\u7f16\u8f91"}),Object(j.jsx)(s.a,{title:"\u5220\u9664\u540e\uff0c\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u786e\u5b9a\u5220\u9664\u5417\uff1f",onConfirm:function(){return n(l)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(j.jsx)(c.a,{type:"link",danger:!0,size:"small",children:"\u5220\u9664"})})]})}}]},O=n(399),h=n(453),m=n(448),p=n(454);var I=function(e){return[{label:"\u82f1\u6587\u540d",key:"Name",type:"Input",span:8},{label:"\u89d2\u8272",key:"RoleID",type:"Select",options:e.roleList.map((function(e){return{label:e.Name,value:e.ID}})),span:8},{label:"\u7528\u6237ID",key:"UserID",type:"Input",span:8}]};t.default=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],d=Object(u.useState)(!1),b=Object(o.a)(d,2),x=b[0],D=b[1],k=Object(u.useState)([]),v=Object(o.a)(k,2),y=v[0],g=v[1],N=Object(u.useState)({}),C=Object(o.a)(N,2),R=C[0],S=C[1],q=Object(u.useState)({}),w=Object(o.a)(q,2),E=w[0],L=w[1],P=Object(u.useRef)();Object(u.useEffect)((function(){U()}),[]);var T,U=function(){Object(m.f)().then((function(e){var t=e.Data;g(t||[])})).catch((function(e){console.log("err",e)}))};return Object(j.jsxs)(u.Fragment,{children:[Object(j.jsx)(l.a,{className:"m-b-10",children:Object(j.jsx)(p.a,{onSearch:function(e){console.log("value",e),L(e)},fields:I({roleList:y}),rowCount:3,defaultValue:{}})}),Object(j.jsx)(O.a,{rowKey:"ID",ref:P,columns:f({handleEdit:function(e){S(e),s(!0)},handleDelete:function(e){Object(m.d)({UserID:e.ID}).then((function(){P.current&&P.current.fetchData()}))}}),useReloadButton:!0,useBackendPagination:!0,query:m.g,filterParams:E,leftAction:Object(j.jsxs)(a.b,{children:[Object(j.jsx)(c.a,{type:"primary",onClick:function(){s(!0)},children:"\u521b\u5efa\u7528\u6237"}),Object(j.jsx)(c.a,{children:"\u6279\u91cf\u4e0a\u4f20"})]})}),n?Object(j.jsx)(h.a,{initialValues:function(e){var t;if(e&&Object.keys(e).length)return Object(r.a)(Object(r.a)({},e),{},{RoleID:null===e||void 0===e||null===(t=e.RoleInfo)||void 0===t?void 0:t.map((function(e){return e.RoleID}))})}(R),itemOption:(T={roleList:y},[{name:"Name",label:"\u82f1\u6587\u540d",content:"Input",rules:{required:!0}},{name:"ChName",label:"\u4e2d\u6587\u540d",content:"Input",rules:{required:!0}},{name:"Phone",label:"\u7535\u8bdd\u53f7\u7801",content:"Input",rules:{required:!0}},{name:"RoleID",label:"\u89d2\u8272",rules:{required:!0},content:"Select",placeholder:"\u8bf7\u9009\u62e9",option:{required:!0,list:T.roleList,label:"Name",value:"ID"},allowClear:!0,mode:"multiple"}]),visible:n,cancel:function(){return s(!1)},handleOk:function(e){var t;console.log("val",e),D(!0),R&&Object.keys(R).length?(t=Object(r.a)(Object(r.a)({},e),{},{UserID:R.ID}),Object(m.i)(t).then((function(e){console.log("res",e),D(!1),s(!1),S({}),P.current&&P.current.fetchData()})).catch((function(){D(!1)}))):function(e){Object(m.b)(e).then((function(e){console.log("res",e),D(!1),i.b.success("\u65b0\u589e\u6210\u529f"),s(!1),S({}),P.current&&P.current.fetchData()})).catch((function(){D(!1)}))}(e)},editInfo:R,confirmLoading:x}):null]})}}}]);
//# sourceMappingURL=14.e5746244.chunk.js.map