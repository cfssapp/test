(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{68408:function(W){W.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},87615:function(W,K,i){"use strict";i.r(K),i.d(K,{default:function(){return Xe}});var Je=i(18106),Y=i(41046),Qe=i(34792),k=i(48086),F=i(11849),L=i(3182),R=i(2824),qe=i(17462),oe=i(76772),le=i(94043),M=i.n(le),l=i(67294),ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},fe=ce,X=i(27029),J=function(t,r){return l.createElement(X.Z,Object.assign({},t,{ref:r,icon:fe}))};J.displayName="LockOutlined";var Q=l.forwardRef(J),de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},ge=de,q=function(t,r){return l.createElement(X.Z,Object.assign({},t,{ref:r,icon:ge}))};q.displayName="MobileOutlined";var pe=l.forwardRef(q),ve=i(89366),_e=i(9715),me=i(86585),er=i(57663),he=i(71577),rr=i(47673),ye=i(4107),z=i(64893),be=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"];function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},I.apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(a){je(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e,t,r,a,n,u,m){try{var O=e[u](m),h=O.value}catch(w){r(w);return}O.done?t(h):Promise.resolve(h).then(a,n)}function te(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var u=e.apply(t,r);function m(h){re(u,a,n,m,O,"next",h)}function O(h){re(u,a,n,m,O,"throw",h)}m(void 0)})}}function Oe(e,t){if(e==null)return{};var r=xe(e,t),a,n;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function xe(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,u;for(u=0;u<a.length;u++)n=a[u],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function H(e,t){return Fe(e)||Se(e,t)||Me(e,t)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(e,t){if(!!e){if(typeof e=="string")return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Se(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a=[],n=!0,u=!1,m,O;try{for(r=r.call(e);!(n=(m=r.next()).done)&&(a.push(m.value),!(t&&a.length===t));n=!0);}catch(h){u=!0,O=h}finally{try{!n&&r.return!=null&&r.return()}finally{if(u)throw O}}return a}}function Fe(e){if(Array.isArray(e))return e}var we=l.forwardRef(function(e,t){var r=(0,l.useState)(e.countDown||60),a=H(r,2),n=a[0],u=a[1],m=(0,l.useState)(!1),O=H(m,2),h=O[0],w=O[1],B=(0,l.useState)(),S=H(B,2),$=S[0],C=S[1],T=e.rules,ue=e.name,y=e.phoneName,Z=e.fieldProps,N=e.captchaTextRender,A=N===void 0?function(o,f){return o?"".concat(f," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:N,D=e.captchaProps,P=Oe(e,be),g=(0,l.useCallback)(function(){var o=te(regeneratorRuntime.mark(function f(b){return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,C(!0),d.next=4,P.onGetCaptcha(b);case 4:C(!1),w(!0),d.next=12;break;case 8:d.prev=8,d.t0=d.catch(0),C(!1),console.log(d.t0);case 12:case"end":return d.stop()}},f,null,[[0,8]])}));return function(f){return o.apply(this,arguments)}}(),[]);return(0,l.useEffect)(function(){var o=0,f=e.countDown;return h&&(o=window.setInterval(function(){u(function(b){return b<=1?(w(!1),clearInterval(o),f||60):b-1})},1e3)),function(){return clearInterval(o)}},[h]),l.createElement(me.Z.Item,{noStyle:!0,shouldUpdate:!0},function(o){var f=o.getFieldValue,b=o.validateFields;return l.createElement("div",{style:ee(ee({},Z==null?void 0:Z.style),{},{display:"flex",alignItems:"center"}),ref:t},l.createElement(ye.Z,I({},Z,{style:{flex:1,transition:"width .3s",marginRight:8}})),l.createElement(he.Z,I({style:{display:"block"},disabled:h,loading:$},D,{onClick:te(regeneratorRuntime.mark(function c(){var d;return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(p.prev=0,!y){p.next=9;break}return p.next=4,b([y].flat(1));case 4:return d=f([y].flat(1)),p.next=7,g(d);case 7:p.next=11;break;case 9:return p.next=11,g("");case 11:p.next=16;break;case 13:p.prev=13,p.t0=p.catch(0),console.log(p.t0);case 16:case"end":return p.stop()}},c,null,[[0,13]])}))}),A(h,n)))})}),Ce=(0,z.Z)(we),tr=i(63185),Ze=i(9676),Le=i(65015),Te=i(22270),Ie=["options","fieldProps","proFieldProps","valueEnum"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ne(Object(r),!0).forEach(function(a){Be(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ne(e,t){if(e==null)return{};var r=Ae(e,t),a,n;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function Ae(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,u;for(u=0;u<a.length;u++)n=a[u],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var De=l.forwardRef(function(e,t){var r=e.options,a=e.fieldProps,n=e.proFieldProps,u=e.valueEnum,m=Ne(e,Ie);return l.createElement(Le.ZP,E({ref:t,valueType:"checkbox",mode:"edit",valueEnum:(0,Te.h)(u,void 0)},m,{fieldProps:Ee({options:r},a)},n))}),ke=l.forwardRef(function(e,t){var r=e.fieldProps,a=e.children;return l.createElement(Ze.Z,E({ref:t},r),a)}),Re=(0,z.Z)(ke,{valuePropName:"checked"}),ze=(0,z.Z)(De),se=Re;se.Group=ze;var He=se,Ge=i(15196),G=i(5966),v=i(21010),Ue=i(73727),$e=i(29791),Ve=i(36571);function We(e,t){return U.apply(this,arguments)}function U(){return U=(0,L.Z)(M().mark(function e(t,r){return M().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,v.WY)("/api/login/captcha",(0,F.Z)({method:"GET",params:(0,F.Z)({},t)},r||{})));case 1:case"end":return n.stop()}},e)})),U.apply(this,arguments)}var Ke=i(68408),x=i.n(Ke),s=i(85893),ie=function(t){var r=t.content;return(0,s.jsx)(oe.Z,{style:{marginBottom:24},message:r,type:"error",showIcon:!0})},Ye=function(){var t=(0,l.useState)(!1),r=(0,R.Z)(t,2),a=r[0],n=r[1],u=(0,l.useState)({}),m=(0,R.Z)(u,2),O=m[0],h=m[1],w=(0,l.useState)("account"),B=(0,R.Z)(w,2),S=B[0],$=B[1],C=(0,v.tT)("@@initialState"),T=C.initialState,ue=C.setInitialState,y=(0,v.YB)(),Z=function(){var P=(0,L.Z)(M().mark(function g(){var o,f;return M().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,T==null||(o=T.fetchUserInfo)===null||o===void 0?void 0:o.call(T);case 2:if(f=c.sent,!f){c.next=6;break}return c.next=6,ue(function(d){return(0,F.Z)((0,F.Z)({},d),{},{currentUser:f})});case 6:case"end":return c.stop()}},g)}));return function(){return P.apply(this,arguments)}}(),N=function(){var P=(0,L.Z)(M().mark(function g(o){var f,b,c,d,V,p;return M().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return n(!0),j.prev=1,j.next=4,(0,Ve.x4)((0,F.Z)((0,F.Z)({},o),{},{type:S}));case 4:if(f=j.sent,f.status!=="ok"){j.next=16;break}return b=y.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),k.default.success(b),j.next=10,Z();case 10:if(v.m8){j.next=12;break}return j.abrupt("return");case 12:return c=v.m8.location.query,d=c,V=d.redirect,v.m8.push(V||"/"),j.abrupt("return");case 16:h(f),j.next=23;break;case 19:j.prev=19,j.t0=j.catch(1),p=y.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),k.default.error(p);case 23:n(!1);case 24:case"end":return j.stop()}},g,null,[[1,19]])}));return function(o){return P.apply(this,arguments)}}(),A=O.status,D=O.type;return(0,s.jsxs)("div",{className:x().container,children:[(0,s.jsx)("div",{className:x().lang,"data-lang":!0,children:v.pD&&(0,s.jsx)(v.pD,{})}),(0,s.jsxs)("div",{className:x().content,children:[(0,s.jsxs)("div",{className:x().top,children:[(0,s.jsx)("div",{className:x().header,children:(0,s.jsxs)(Ue.rU,{to:"/",children:[(0,s.jsx)("img",{alt:"logo",className:x().logo,src:"/logo.svg"}),(0,s.jsx)("span",{className:x().title,children:"Test"})]})}),(0,s.jsx)("div",{className:x().desc,children:"Imagination is more important than knowledge."})]}),(0,s.jsx)("div",{className:x().main,children:(0,s.jsxs)(Ge.ZP,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:y.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(g,o){return o.pop()},submitButtonProps:{loading:a,size:"large",style:{width:"100%"}}},onFinish:function(){var P=(0,L.Z)(M().mark(function g(o){return M().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:N(o);case 1:case"end":return b.stop()}},g)}));return function(g){return P.apply(this,arguments)}}(),children:[(0,s.jsx)(Y.Z,{activeKey:S,onChange:$,children:(0,s.jsx)(Y.Z.TabPane,{tab:y.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account")}),A==="error"&&D==="account"&&(0,s.jsx)(ie,{content:y.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),S==="account"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(G.Z,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(ve.Z,{className:x().prefixIcon})},placeholder:y.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,s.jsx)(v._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,s.jsx)(G.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(Q,{className:x().prefixIcon})},placeholder:y.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,s.jsx)(v._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),A==="error"&&D==="mobile"&&(0,s.jsx)(ie,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),S==="mobile"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(G.Z,{fieldProps:{size:"large",prefix:(0,s.jsx)(pe,{className:x().prefixIcon})},name:"mobile",placeholder:y.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,s.jsx)(v._H,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,s.jsx)(v._H,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,s.jsx)(Ce,{fieldProps:{size:"large",prefix:(0,s.jsx)(Q,{className:x().prefixIcon})},captchaProps:{size:"large"},placeholder:y.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(g,o){return g?"".concat(o," ").concat(y.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):y.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,s.jsx)(v._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var P=(0,L.Z)(M().mark(function g(o){var f;return M().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,We({phone:o});case 2:if(f=c.sent,f!==!1){c.next=5;break}return c.abrupt("return");case 5:k.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return c.stop()}},g)}));return function(g){return P.apply(this,arguments)}}()})]}),(0,s.jsxs)("div",{style:{marginBottom:24},children:[(0,s.jsx)(He,{noStyle:!0,name:"autoLogin",children:(0,s.jsx)(v._H,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,s.jsx)("a",{style:{float:"right"},children:(0,s.jsx)(v._H,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})})]}),(0,s.jsx)($e.Z,{})]})},Xe=Ye}}]);
