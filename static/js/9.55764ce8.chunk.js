(this["webpackJsonpantd-template-project"]=this["webpackJsonpantd-template-project"]||[]).push([[9],{370:function(e,t,n){"use strict";n(28),n(457)},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(1),a=n(2),r=n(8),l=n(0),o=n(3),i=n.n(o),s=n(40),u=n(48);function p(e){var t=e.className,n=e.direction,r=e.index,o=e.marginDirection,i=e.children,s=e.split,u=e.wrap,p=l.useContext(d),b=p.horizontalSize,f=p.verticalSize,m=p.latestIndex,O={};return p.supportFlexGap||("vertical"===n?r<m&&(O={marginBottom:b/(s?2:1)}):O=Object(c.a)(Object(c.a)({},r<m&&Object(a.a)({},o,b/(s?2:1))),u&&{paddingBottom:f})),null===i||void 0===i?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:O},i),r<m&&s&&l.createElement("span",{className:"".concat(t,"-split"),style:O},s))}var b=n(165),f=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},d=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};t.b=function(e){var t,n=l.useContext(u.b),o=n.getPrefixCls,O=n.space,j=n.direction,v=e.size,y=void 0===v?(null===O||void 0===O?void 0:O.size)||"small":v,g=e.align,x=e.className,h=e.children,C=e.direction,w=void 0===C?"horizontal":C,E=e.prefixCls,k=e.split,P=e.style,N=e.wrap,z=void 0!==N&&N,S=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),I=Object(b.a)(),F=l.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?m[e]:e||0}(e)}))}),[y]),G=Object(r.a)(F,2),R=G[0],B=G[1],T=Object(s.a)(h,{keepEmpty:!0}),A=void 0===g&&"horizontal"===w?"center":g,D=o("space",E),J=i()(D,"".concat(D,"-").concat(w),(t={},Object(a.a)(t,"".concat(D,"-rtl"),"rtl"===j),Object(a.a)(t,"".concat(D,"-align-").concat(A),A),t),x),M="".concat(D,"-item"),$="rtl"===j?"marginLeft":"marginRight",L=0,W=T.map((function(e,t){return null!==e&&void 0!==e&&(L=t),l.createElement(p,{className:M,key:"".concat(M,"-").concat(t),direction:w,index:t,marginDirection:$,split:k,wrap:z},e)})),q=l.useMemo((function(){return{horizontalSize:R,verticalSize:B,latestIndex:L,supportFlexGap:I}}),[R,B,L,I]);if(0===T.length)return null;var H={};return z&&(H.flexWrap="wrap",I||(H.marginBottom=-B)),I&&(H.columnGap=R,H.rowGap=B),l.createElement("div",Object(c.a)({className:J,style:Object(c.a)(Object(c.a)({},H),P)},S),l.createElement(d.Provider,{value:q},W))}},404:function(e,t,n){"use strict";n(28),n(462)},424:function(e,t,n){"use strict";var c=n(2),a=n(1),r=n(8),l=n(0),o=n(3),i=n.n(o),s=n(19),u=n(99),p=n(48),b=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},f=function(e){var t,n=e.prefixCls,r=e.className,o=e.checked,s=e.onChange,u=e.onClick,f=b(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,l.useContext(p.b).getPrefixCls)("tag",n),m=i()(d,(t={},Object(c.a)(t,"".concat(d,"-checkable"),!0),Object(c.a)(t,"".concat(d,"-checkable-checked"),o),t),r);return l.createElement("span",Object(a.a)({},f,{className:m,onClick:function(e){null===s||void 0===s||s(!o),null===u||void 0===u||u(e)}}))},d=n(108),m=n(170),O=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},j=new RegExp("^(".concat(d.a.join("|"),")(-inverse)?$")),v=new RegExp("^(".concat(d.b.join("|"),")$")),y=function(e,t){var n,o=e.prefixCls,b=e.className,f=e.style,d=e.children,y=e.icon,g=e.color,x=e.onClose,h=e.closeIcon,C=e.closable,w=void 0!==C&&C,E=O(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=l.useContext(p.b),P=k.getPrefixCls,N=k.direction,z=l.useState(!0),S=Object(r.a)(z,2),I=S[0],F=S[1];l.useEffect((function(){"visible"in E&&F(E.visible)}),[E.visible]);var G=function(){return!!g&&(j.test(g)||v.test(g))},R=Object(a.a)({backgroundColor:g&&!G()?g:void 0},f),B=G(),T=P("tag",o),A=i()(T,(n={},Object(c.a)(n,"".concat(T,"-").concat(g),B),Object(c.a)(n,"".concat(T,"-has-color"),g&&!B),Object(c.a)(n,"".concat(T,"-hidden"),!I),Object(c.a)(n,"".concat(T,"-rtl"),"rtl"===N),n),b),D=function(e){e.stopPropagation(),null===x||void 0===x||x(e),e.defaultPrevented||"visible"in E||F(!1)},J="onClick"in E||d&&"a"===d.type,M=Object(s.a)(E,["visible"]),$=y||null,L=$?l.createElement(l.Fragment,null,$,l.createElement("span",null,d)):d,W=l.createElement("span",Object(a.a)({},M,{ref:t,className:A,style:R}),L,w?h?l.createElement("span",{className:"".concat(T,"-close-icon"),onClick:D},h):l.createElement(u.a,{className:"".concat(T,"-close-icon"),onClick:D}):null);return J?l.createElement(m.a,null,W):W},g=l.forwardRef(y);g.displayName="Tag",g.CheckableTag=f;t.a=g},457:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){"use strict";n(370);var c=n(373),a=(n(404),n(424)),r=n(0),l=n(4);function o(e){var t=e.list,n=void 0===t?[]:t;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)(c.b,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)(a.a,{children:e},e)}))})})}o.defaultProps={list:["name"]},t.a=o},747:function(e,t,n){"use strict";n.r(t);n(216);var c=n(150),a=(n(221),n(135)),r=(n(0),n(463)),l=n(4),o=a.a.TabPane;t.default=function(){return Object(l.jsx)(c.a,{children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)(o,{title:"markdown",tab:"\u5bcc\u6587\u672c",children:Object(l.jsx)(r.a,{})},1),Object(l.jsx)(o,{title:"",tab:"second"},2)]})})}}}]);
//# sourceMappingURL=9.55764ce8.chunk.js.map