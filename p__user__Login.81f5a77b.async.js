(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{5966:function(D,T,n){"use strict";var N=n(67294),S=n(79403),m=n(64893),M=["fieldProps","proFieldProps"];function p(){return p=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e])}return r},p.apply(this,arguments)}function U(r,t){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),a.push.apply(a,e)}return a}function F(r){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?U(Object(a),!0).forEach(function(e){v(r,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function v(r,t,a){return t in r?Object.defineProperty(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[t]=a,r}function h(r,t){if(r==null)return{};var a=B(r,t),e,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)e=u[l],!(t.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,e)||(a[e]=r[e]))}return a}function B(r,t){if(r==null)return{};var a={},e=Object.keys(r),l,u;for(u=0;u<e.length;u++)l=e[u],!(t.indexOf(l)>=0)&&(a[l]=r[l]);return a}var L="text",z=(0,m.Z)(function(r){var t=r.fieldProps,a=r.proFieldProps,e=h(r,M);return N.createElement(S.ZP,p({mode:"edit",valueType:L,fieldProps:F(F({},t),{},{onChange:function(){for(var u,O,c=arguments.length,s=new Array(c),Z=0;Z<c;Z++)s[Z]=arguments[Z];t==null||(u=t.onChange)===null||u===void 0||u.call.apply(u,[t].concat(s)),e==null||(O=e.onChange)===null||O===void 0||O.call.apply(O,[e].concat(s))}})},a))},{valueType:L}),I=(0,m.Z)(function(r){var t=r.fieldProps,a=r.proFieldProps;return N.createElement(S.ZP,p({mode:"edit",valueType:"password",fieldProps:t},a))},{valueType:L}),E=z;E.Password=I,T.Z=E},68408:function(D){D.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},11816:function(D,T,n){"use strict";n.r(T),n.d(T,{default:function(){return Y}});var N=n(34792),S=n(48086),m=n(8870),M=n(3182),p=n(2824),U=n(17462),F=n(94043),v=n.n(F),h=n(67294),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},L=B,z=n(27029),I=function(b,P){return h.createElement(z.Z,Object.assign({},b,{ref:P,icon:L}))};I.displayName="LockOutlined";var E=h.forwardRef(I),r=n(89366),t=n(15196),a=n(5966),e=n(97363),l=n(73727),u=n(36571),O=n(68408),c=n.n(O),s=n(85893),Z=function(b){var P=b.content;return _jsx(_Alert,{style:{marginBottom:24},message:P,type:"error",showIcon:!0})},X=function(){var b=(0,h.useState)(!1),P=(0,p.Z)(b,2),J=P[0],W=P[1],Q=(0,h.useState)({}),$=(0,p.Z)(Q,2),H=$[0],k=$[1],q=(0,h.useState)("account"),K=(0,p.Z)(q,2),_=K[0],ae=K[1],R=(0,e.tT)("@@initialState"),w=R.initialState,ee=R.setInitialState,j=(0,e.YB)(),re=function(){var x=(0,M.Z)(v().mark(function g(){var d,i;return v().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,w==null||(d=w.fetchUserInfo)===null||d===void 0?void 0:d.call(w);case 2:if(i=f.sent,!i){f.next=6;break}return f.next=6,ee(function(C){return(0,m.Z)((0,m.Z)({},C),{},{currentUser:i})});case 6:case"end":return f.stop()}},g)}));return function(){return x.apply(this,arguments)}}(),te=function(){var x=(0,M.Z)(v().mark(function g(d){var i,y,f,C,V,G;return v().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return W(!0),o.prev=1,o.next=4,(0,u.x4)((0,m.Z)((0,m.Z)({},d),{},{type:_}));case 4:if(i=o.sent,console.log(i),console.log(i.access),console.log(i.refresh),console.log(i.id),localStorage.setItem("access_token",i.access),localStorage.setItem("refresh_token",i.refresh),localStorage.setItem("user_id",i.id),i.status!=="ok"){o.next=23;break}return y=j.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),S.default.success(y),o.next=17,re();case 17:if(e.m8){o.next=19;break}return o.abrupt("return");case 19:return f=e.m8.location.query,C=f,V=C.redirect,e.m8.push(V||"/"),o.abrupt("return");case 23:k(i),o.next=30;break;case 26:o.prev=26,o.t0=o.catch(1),G=j.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),S.default.error(G);case 30:W(!1);case 31:case"end":return o.stop()}},g,null,[[1,26]])}));return function(d){return x.apply(this,arguments)}}(),ne=H.status,se=H.type;return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("div",{className:c().lang,"data-lang":!0,children:e.pD&&(0,s.jsx)(e.pD,{})}),(0,s.jsxs)("div",{className:c().content,children:[(0,s.jsxs)("div",{className:c().top,children:[(0,s.jsx)("div",{className:c().header,children:(0,s.jsxs)(l.rU,{to:"/",children:[(0,s.jsx)("img",{alt:"logo",className:c().logo,src:"/logo.svg"}),(0,s.jsx)("span",{className:c().title,children:"React"})]})}),(0,s.jsx)("div",{className:c().desc,children:j.formatMessage({id:"pages.layouts.userLayout.title"})})]}),(0,s.jsx)("div",{className:c().main,children:(0,s.jsx)(t.ZP,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:j.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(g,d){return d.pop()},submitButtonProps:{loading:J,size:"large",style:{width:"100%"}}},onFinish:function(){var x=(0,M.Z)(v().mark(function g(d){return v().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:te(d);case 1:case"end":return y.stop()}},g)}));return function(g){return x.apply(this,arguments)}}(),children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{name:"user_name",fieldProps:{size:"large",prefix:(0,s.jsx)(r.Z,{className:c().prefixIcon})},placeholder:j.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: guest"}),rules:[{required:!0,message:(0,s.jsx)(e._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,s.jsx)(a.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(E,{className:c().prefixIcon})},placeholder:j.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: guest"}),rules:[{required:!0,message:(0,s.jsx)(e._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]})})})]})]})},Y=X}}]);
