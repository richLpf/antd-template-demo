(this["webpackJsonpantd-template-project"]=this["webpackJsonpantd-template-project"]||[]).push([[3],{399:function(e,t,n){"use strict";n(216);var a=n(150),r=(n(428),n(449)),c=(n(370),n(373)),o=(n(153),n(69)),i=(n(218),n(161)),l=(n(97),n(47)),u=(n(217),n(98)),s=(n(379),n(151)),d=n(361),b=n.n(d),f=n(388),j=n(364),O=n(43),p=(n(402),n(393)),h=n(0),v=n(171),m=n(760),g=n(761),y=n(342);function x(){return(x=Object(f.a)(b.a.mark((function e(t){var a,r,c,o,i,l,u,s,d,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fields,r=void 0===a?[]:a,c=t.dataSource,o=void 0===c?[]:c,i=t.filename,l=void 0===i?"download":i,u=function(e){try{var t=new Blob([e,{type:"text/csv"}]),n=window.URL.createObjectURL(t),a=document.createElement("a");a.href=n,a.download=l,a.click(),window.URL.revokeObjectURL(n)}catch(r){console.error(r)}},e.prev=2,e.next=5,n.e(20).then(n.t.bind(null,751,7));case 5:s=e.sent,d=s.Parser,f=new d({fields:r,withBOM:!0}).parse(o),u(f),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var w=function(e){return x.apply(this,arguments)},S=n(20);function k(e){var t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return t}}var C=n(4),P=p.a.Group,z=Object(h.forwardRef)((function(e,t){var n=e.columns,d=e.storeKey,p=e.dataSource,x=e.rowKey,z=e.query,E=e.leftAction,F=e.download,N=e.filterParams,L=e.size,T=e.useBackendPagination,I=e.useBackendSearch,R=e.useReloadButton,q=e.useSearchInput,A=F||{},V=A.limit,D=A.exportData,B=A.exportQuery,K=Object(h.useState)(p||[]),U=Object(O.a)(K,2),J=U[0],M=U[1],G=Object(h.useState)(0),_=Object(O.a)(G,2),H=_[0],Q=_[1],W=Object(h.useState)(!1),X=Object(O.a)(W,2),Y=X[0],Z=X[1],$=Object(h.useState)(!1),ee=Object(O.a)($,2),te=ee[0],ne=ee[1],ae=Object(h.useState)([]),re=Object(O.a)(ae,2),ce=re[0],oe=re[1],ie=Object(h.useState)(void 0),le=Object(O.a)(ie,2),ue=le[0],se=le[1],de=Object(h.useState)({Page:1,PageSize:10}),be=Object(O.a)(de,2),fe=be[0],je=be[1];Object(h.useEffect)((function(){Oe(Object(j.a)({},pe()))}),[]);var Oe=Object(h.useCallback)(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchData",t),Z(!0),e.abrupt("return",z&&z(t).then((function(e){var t=e||{},n=t.Data,a=t.Total;return M(n||[]),Q(a||0),Z(!1),n})).catch((function(e){return Z(!1),e})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[z]);Object(h.useEffect)((function(){var e=n,t=k(d);oe(t?n.filter((function(e){return(t||[]).includes(e.key)})):e)}),[n]),Object(h.useImperativeHandle)(t,(function(){return{fetchData:function(){return Oe(Object(j.a)({},pe()))},data:J}}),[J,Oe]);var pe=Object(h.useCallback)((function(e){var t,n,a=fe.Page,r=fe.PageSize,c=fe.FuzzySearch;return Object(j.a)({},T?Object(j.a)(Object(j.a)({Page:(null===e||void 0===e?void 0:e.Page)||a,PageSize:(null===e||void 0===e?void 0:e.PageSize)||r,FuzzySearch:(null===e||void 0===e?void 0:e.FuzzySearch)||c,sortField:null===e||void 0===e||null===(t=e.sorter)||void 0===t?void 0:t.field,sortOrder:null===e||void 0===e||null===(n=e.sorter)||void 0===n?void 0:n.order},(null===e||void 0===e?void 0:e.filters)?e.filters:{}),N):Object(j.a)({Page:1,PageSize:9999999},N))}),[N,fe,T]);Object(h.useEffect)((function(){console.log(me.current),me.current(fe.Page,fe.PageSize||10,T)}),[N]);var he=function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=J,!T){e.next=8;break}return ne(!0),n=B?B(Object(j.a)({},pe())):z(Object(j.a)(Object(j.a)({},pe()),{},{Page:1},V?{PageSize:V}:{})),e.next=6,n.then((function(e){return e.Data})).catch((function(e){return ne(!1),s.b.error(String(e)),null}));case 6:t=e.sent,ne(!1);case 8:Array.isArray(t)&&t.length&&(a=D(t),r=a.data,c=a.fields,w({fields:c,dataSource:r,filename:"list.csv"}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=Object(h.useCallback)((function(e,t,n){je(Object(j.a)(Object(j.a)({},n),{},{Page:e,PageSize:t})),T&&Oe({FuzzySearch:ue,Page:e,PageSize:t})}),[]),me=Object(h.useRef)(Object(S.g)((function(e,t,n){je({Page:e,PageSize:t}),n&&Oe({FuzzySearch:ue,Page:e,PageSize:t})}),1e3)),ge=function(){if(I){me.current(1,fe.PageSize||10,T)}},ye=Object(h.useCallback)((function(){return Object(j.a)(Object(j.a)({dataSource:T&&I?J:null===J||void 0===J?void 0:J.filter((function(e){return!ue||Object.keys(e).some((function(t){return typeof e[t]!==Object&&String(e[t]).includes(ue)}))}))},T?{pagination:{current:fe.Page,pageSize:fe.PageSize,total:H,onChange:function(e,t){return ve(e,t,fe)}}}:{}),{},{scroll:{x:!0}})}),[J,ue,H,T,I,fe,ve]),xe=Object(C.jsx)(P,{style:{width:150},options:n.map((function(e){return{label:e.title,value:e.key}})),value:ce.map((function(e){return e.key})),onChange:function(e){var t=n.filter((function(t){return e.includes(t.key)}));oe(t),d&&function(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n.message)}}(d,t.map((function(e){return e.key})))}}),we=Object(C.jsxs)(c.b,{children:[q?Object(C.jsx)(u.a,{size:L,suffix:Object(C.jsx)(v.a,{onClick:ge}),value:ue,onChange:function(e){return se(e.target.value)},placeholder:"search...",onPressEnter:ge}):null,F&&Object(C.jsx)(l.a,{size:L,loading:te,onClick:he,icon:Object(C.jsx)(m.a,{})}),R?Object(C.jsx)(l.a,{size:L,onClick:function(){return Oe(Object(j.a)({},pe()))},icon:Object(C.jsx)(g.a,{})}):null,d&&Object(C.jsx)(o.a,{placement:"top",title:"\u81ea\u5b9a\u4e49\u5217\u8868",children:Object(C.jsx)(i.a,{placement:"left",title:"\u81ea\u5b9a\u4e49\u5217\u8868",content:xe,trigger:"click",children:Object(C.jsx)(l.a,{size:L,icon:Object(C.jsx)(y.a,{})})})},"ColumnsSetting")]});return Object(C.jsx)(a.a,{size:L,title:E,extra:we,children:Object(C.jsx)(r.a,Object(j.a)({size:L,columns:ce,rowKey:x,loading:Y,bordered:!0,onChange:function(e,t,n){console.log(n),Oe(Object(j.a)({},pe({pagination:e,filters:t,sorter:n})))}},ye()))})}));z.defaultProps={usePagination:!1,size:"middle",useBackendSearch:!1},z.displayName="UTable";t.a=z},403:function(e,t,n){"use strict";n(379);var a=n(151),r=n(461),c=n.n(r),o={};var i="user",l="123456";t.a=function(e){return new Promise((function(t,n){var r=c.a.create(Object.assign({withCredentials:!1,"content-type":"application/json",timeout:3e4},o));r.interceptors.request.use((function(e){return l&&(e.headers.token=l),i&&(e.headers.remote_user=i),e}),(function(e){return n(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return n(e.message)})),r(e).then((function(e){var n=e.data,r=n.RetCode,c=n.Message,o=e.data;if(1e4===r)return a.b.error("\u8bf7\u767b\u9646"),void window.location.replace("/login");0!==r?(a.b.error(c),t(o)):t(o)})).catch((function(e){n(e)}))}))}},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return b}));var a=n(403),r=function(e){return Object(a.a)({url:"/v1/signIn",method:"post",data:e})},c=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},o=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},i=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},l=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},u=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},s=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},d=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})},b=function(e){return Object(a.a)({url:"/v1/list",method:"get",query:e})}},453:function(e,t,n){"use strict";n(584);var a=n(588),r=n(364),c=(n(219),n(63)),o=n(43),i=n(0),l=(n(217),n(98)),u=n(455),s=(n(401),n(398)),d=n(4),b=["content","label","option","render"],f=s.a.Option;var j=function(e){var t=e.content,n=e.label,a=e.option,c=e.render,o=Object(u.a)(e,b),i={Input:Object(d.jsx)(l.a,{placeholder:"\u8bf7\u8f93\u5165"}),Textarea:Object(d.jsx)(l.a.TextArea,Object(r.a)({style:{width:"100%"},placeholder:n},a)),Select:Object(d.jsx)(s.a,Object(r.a)(Object(r.a)({showSearch:!0},o),{},{optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:a&&a.list?a.list.map((function(e,t){var n=Array.isArray(a.label)?"".concat(e[a.label[0]],"\uff08").concat(e[a.label[1]],"\uff09"):e[a.label];return Object(d.jsx)(f,{value:e[a.value],label:n,children:n},t)})):null})),SelectNew:Object(d.jsx)(s.a,Object(r.a)(Object(r.a)({showSearch:!0,style:{width:200}},o),{},{optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:a&&a.list?a.list.map((function(e,t){return Object(d.jsx)(f,{value:e.value,label:e.label,children:e.label},t)})):null}))};return c||i[t]},O={labelCol:{span:6},wrapperCol:{span:16}};t.a=function(e){var t=e.itemOption,n=e.title,l=e.visible,u=e.cancel,s=e.handleOk,b=e.initialValues,f=e.confirmLoading,p=e.width,h=e.layout,v=e.editInfo,m=e.rest,g=c.a.useForm(),y=Object(o.a)(g,1)[0];return Object(i.useEffect)((function(){return v&&console.log("editInfo",v),function(){y.resetFields()}}),[l,y,v]),Object(d.jsx)(i.Fragment,{children:Object(d.jsx)(a.a,Object(r.a)(Object(r.a)({forceRender:!0,title:n||(v&&0===Object.keys(v).length?"\u65b0\u589e":"\u7f16\u8f91"),visible:l,onOk:function(){y.validateFields().then((function(e){s(e)})).catch((function(e){console.log("err",e)}))},onCancel:u,width:p,confirmLoading:f},m),{},{children:Object(d.jsx)(c.a,Object(r.a)(Object(r.a)({form:y},h||O),{},{initialValues:b,children:t?t.map((function(e,t){return Object(d.jsx)(c.a.Item,{label:e.label,name:e.name,rules:[Object(r.a)({},e.rules)],children:j(e)},t)})):null}))}))})}},454:function(e,t,n){"use strict";n(370);var a=n(373),r=(n(97),n(47)),c=(n(154),n(60)),o=n(364),i=(n(155),n(41)),l=(n(219),n(63)),u=n(43),s=n(0),d=(n(496),n(745)),b=n(157),f=(n(458),n(452)),j=(n(585),n(595)),O=(n(217),n(98)),p=(n(586),n(587)),h=(n(401),n(398)),v=n(4),m=h.a.Option,g=p.a.RangePicker;function y(e){var t={Input:Object(v.jsx)(O.a,{style:{width:"100%"},placeholder:e.placeholder||e.label,disabled:e.disabled}),TextArea:Object(v.jsx)(O.a.TextArea,Object(o.a)({style:{width:"100%"},placeholder:e.label},e.option)),NumberInput:Object(v.jsx)(j.a,{style:{width:"100%"},placeholder:e.label}),Select:Object(v.jsx)(h.a,{style:{width:"100%"},placeholder:e.label,showSearch:!0,allowClear:!0,disabled:e.disabled||!1,filterOption:function(e,t){try{return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(n){return t.props.children.indexOf(e)>=0}},children:e.options?e.options.map((function(e,t){return Object(v.jsx)(m,{value:e.value,children:e.name||e.label},t)})):null}),SelectMultiple:Object(v.jsx)(h.a,{style:{width:"100%"},mode:"multiple",allowClear:!0,placeholder:e.label,filterOption:function(e,t){try{return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(n){return t.props.children.indexOf(e)>=0}},children:e.options?e.options.map((function(e,t){return Object(v.jsx)(m,{value:e.value,children:e.name||e.label},t)})):null}),Radio:Object(v.jsx)(f.a.Group,Object(o.a)({options:e.options,optionType:"button",buttonStyle:"solid"},e.option)),Date:Object(v.jsx)(p.a,Object(o.a)({},e.option)),DateRange:Object(v.jsx)(g,Object(o.a)({},e.option)),Content:e.content};return e.content||t[e.type]}t.a=function(e){var t=e.fields,n=e.onSearch,f=e.rowCount,j=e.defaultValue,O=e.leftActions,p=e.rightActions,h=e.defaultExpand,m=l.a.useForm(),g=Object(u.a)(m,1)[0],x=f||4,w=Object(s.useState)((function(){return h||!1})),S=Object(u.a)(w,2),k=S[0],C=S[1];return Object(s.useEffect)((function(){j&&g.setFieldsValue(j)}),[]),Object(v.jsxs)(l.a,{form:g,name:"advanced_search",onFinish:function(e){var t=Object(o.a)({},e);Object.keys(t).forEach((function(e){(""===t[e]||Array.prototype.isPrototypeOf(t[e])&&0===t[e].length||Object.prototype.isPrototypeOf(t[e])&&0===Object.keys(t[e]).length)&&delete t[e]})),n(t)},children:[t&&t.length>0&&Object(v.jsx)(c.a,{gutter:24,children:function(){var e=k?t:t.slice(0,x),n=[];return e.forEach((function(e){e.hidden||n.push(Object(v.jsx)(i.a,{span:e.span?e.span:6,children:Object(v.jsx)(l.a.Item,{name:e.key,label:e.label,required:e.required,children:y(e)})},e.key))})),n}()}),Object(v.jsxs)(c.a,{children:[Object(v.jsx)(i.a,{span:14,children:O?O.map((function(e,t){return Object(v.jsx)(s.Fragment,{children:e},t)})):null}),Object(v.jsxs)(i.a,{span:10,className:"table-filter-col",children:[t&&t.length>0&&Object(v.jsxs)(a.b,{className:"table-filter-button-group",children:[Object(v.jsx)(r.a,{type:"primary",htmlType:"submit",size:"small",children:"\u641c\u7d22"}),Object(v.jsx)(r.a,{size:"small",onClick:function(){g.resetFields(),g.setFieldsValue(j)},children:"\u91cd\u7f6e"}),t&&t.length>x?Object(v.jsxs)(r.a,{type:"link",style:{padding:0},onClick:function(){C(!k)},children:[k?Object(v.jsx)(d.a,{}):Object(v.jsx)(b.a,{})," \u66f4\u591a"]}):null]}),p?p.map((function(e,t){return Object(v.jsx)("span",{children:e},t)})):null]})]})]})}},496:function(e,t,n){},582:function(e,t,n){"use strict";n(28),n(218),n(97),n(734)},583:function(e,t,n){"use strict";var a=n(1),r=n(8),c=n(0),o=n(3),i=n.n(o),l=n(44),u=n(110),s=n(22),d=n(69),b=n(47),f=n(162),j=n(59),O=n(54),p=n(48),h=n(142),v=n(11),m=n(68),g=void 0,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=c.forwardRef((function(e,t){var n=Object(l.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(r.a)(n,2),u=o[0],x=o[1],w=function(t,n){var a;x(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},S=function(t){var n;w(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(g,t)},k=function(t){var n;w(!1,t),null===(n=e.onCancel)||void 0===n||n.call(g,t)},C=c.useContext(p.b).getPrefixCls,P=e.prefixCls,z=e.placement,E=e.children,F=e.overlayClassName,N=y(e,["prefixCls","placement","children","overlayClassName"]),L=C("popover",P),T=C("popconfirm",P),I=i()(T,F),R=c.createElement(j.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var r=e.okButtonProps,o=e.cancelButtonProps,i=e.title,l=e.cancelText,u=e.okText,s=e.okType,d=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d,c.createElement("div",{className:"".concat(t,"-message-title")},Object(h.a)(i))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(b.a,Object(a.a)({onClick:k,size:"small"},o),l||n.cancelText),c.createElement(b.a,Object(a.a)({onClick:S},Object(f.a)(s),{size:"small"},r),u||n.okText)))}(L,t)})),q=C();return c.createElement(d.a,Object(a.a)({},N,{prefixCls:L,placement:z,onVisibleChange:function(t){e.disabled||w(t)},visible:u,overlay:R,overlayClassName:I,ref:t,transitionName:Object(m.b)(q,"zoom-big",e.transitionName)}),Object(v.a)(E,{onKeyDown:function(e){var t,n;c.isValidElement(E)&&(null===(n=null===E||void 0===E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.a.ESC&&u&&w(!1,e)}(e)}}))}));x.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(u.a,null),disabled:!1},t.a=x},734:function(e,t,n){}}]);
//# sourceMappingURL=3.fa36100b.chunk.js.map