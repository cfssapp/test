(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[576],{67154:function(u){function t(){return u.exports=t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var v=arguments[o];for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&(e[x]=v[x])}return e},u.exports.default=u.exports,u.exports.__esModule=!0,t.apply(this,arguments)}u.exports=t,u.exports.default=u.exports,u.exports.__esModule=!0},19273:function(u,t,e){"use strict";e.d(t,{Z:function(){return o}});function o(v){if(v==null)throw new TypeError("Cannot destructure undefined")}},82055:function(u){u.exports={standardList:"standardList___1ziWY",headerInfo:"headerInfo___2jk53",listContent:"listContent___2-rY6",listContentItem:"listContentItem___1q1UC",extraContentSearch:"extraContentSearch___2NHLb",listCard:"listCard___1igAq",standardListForm:"standardListForm___ynXCl",formResult:"formResult___2EXHT"}},64445:function(u,t,e){"use strict";e.r(t),e.d(t,{default:function(){return $e}});var o=e(84305),v=e(69224),x=e(57663),P=e(71577),R=e(59250),f=e(13013),_=e(30887),D=e(99210),Fe=e(71194),ee=e(57016),S=e(8870),j=e(3182),te=e(19273),Ae=e(49111),ae=e(19650),Y=e(2824),oe=e(94043),h=e.n(oe),w=e(67294),se=e(73935),ie=e(18253),ue=e(76570),de=e(49101),ce=e(81907),me=e(44957),Re=e(43358),J=e(90290),Ye=e(47673),fe=e(4107),ke=e(57106),ve=e(99683),Ue=e(9715),k=e(82482),he=e(30381),pe=e.n(he),ge=e(82055),ne=e.n(ge),a=e(85893),ye={labelCol:{span:7},wrapperCol:{span:13}},xe=function(s){var g=k.Z.useForm(),i=(0,Y.Z)(g,1),d=i[0],C=s.done,$=s.visible,I=s.current,U=s.onDone,L=s.onCancel,N=s.onSubmit;(0,w.useEffect)(function(){d&&!$&&d.resetFields()},[s.visible]),(0,w.useEffect)(function(){I&&d.setFieldsValue((0,S.Z)((0,S.Z)({},I),{},{createdAt:I.createdAt?pe()(I.createdAt):null}))},[s.current]);var W=function(){!d||d.submit()},A,B=function(b){N&&(console.log(b),console.log(b.id),console.log(b.name),console.log(b.category),console.log(b.price),console.log(b.avatar),console.log(A),b.avatar=A,console.log(b.avatar),N(b))},Q=C?{footer:null,onCancel:U}:{okText:"Save",onOk:W,onCancel:L},O=function(){if(C)return(0,a.jsx)(ve.ZP,{status:"success",title:"Success",subTitle:"",extra:(0,a.jsx)(P.Z,{type:"primary",onClick:U,children:"OK"}),className:ne().formResult});var b={name:"file_name",action:"https://antapi.pythonanywhere.com/food_delivery/csv/",headers:{Authorization:"JWT "+localStorage.getItem("access_token")},onChange:function(E){var M=E.file,q=E.fileList;M.status!=="uploading"&&(console.log(M,q),console.log(M.response.id),A=M.response.id)}};return(0,a.jsxs)(k.Z,(0,S.Z)((0,S.Z)({},ye),{},{form:d,onFinish:B,children:[(0,a.jsx)(k.Z.Item,{name:"name",label:"Name",rules:[{message:"Please input"}],children:(0,a.jsx)(fe.Z,{placeholder:"Please input"})}),(0,a.jsx)(k.Z.Item,{name:"forum",label:"Forum",children:(0,a.jsxs)(J.Z,{placeholder:"Please input",children:[(0,a.jsx)(J.Z.Option,{value:"English",children:"English"}),(0,a.jsx)(J.Z.Option,{value:"Chinese",children:"\u4E2D\u6587"})]})})]}))};return(0,a.jsx)(ee.Z,(0,S.Z)((0,S.Z)({title:C?null:"".concat(I?"Edit":"Add"," Item"),className:ne().standardListForm,width:640,destroyOnClose:!0,visible:$},Q),{},{children:O()}))},Se=xe,re=e(91896),F=e(97363),be="https://antapi.pythonanywhere.com/djangobb/topic/";function Ce(p){return K.apply(this,arguments)}function K(){return K=(0,j.Z)(h().mark(function p(s){return h().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.WY)(be,{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{search:s.category}}));case 1:case"end":return i.stop()}},p)})),K.apply(this,arguments)}function Pe(p){return H.apply(this,arguments)}function H(){return H=(0,j.Z)(h().mark(function p(s){var g;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return g=(0,re.Z)({},s),d.abrupt("return",(0,F.WY)("https://antapi.pythonanywhere.com/djangobb/topic/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,S.Z)((0,S.Z)({},g),{},{method:"post"})}));case 2:case"end":return d.stop()}},p)})),H.apply(this,arguments)}function Te(p){return V.apply(this,arguments)}function V(){return V=(0,j.Z)(h().mark(function p(s){var g,i;return h().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return g=(0,re.Z)({},s),i=s.id,C.abrupt("return",(0,F.WY)("https://antapi.pythonanywhere.com/djangobb/topic/edit/"+i+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,S.Z)((0,S.Z)({},g),{},{method:"update"})}));case 3:case"end":return C.stop()}},p)})),V.apply(this,arguments)}function Ze(p){return G.apply(this,arguments)}function G(){return G=(0,j.Z)(h().mark(function p(s){return h().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.WY)("https://antapi.pythonanywhere.com/djangobb/topic/delete/"+s+"/",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:{method:"delete"}}));case 1:case"end":return i.stop()}},p)})),G.apply(this,arguments)}function Le(p){return X.apply(this,arguments)}function X(){return X=_asyncToGenerator(_regeneratorRuntime.mark(function p(s){var g;return _regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return g=_extends({},s),d.abrupt("return",request("https://antapi.pythonanywhere.com/djangobb/add-to-cart/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},g),{},{method:"post"})}));case 2:case"end":return d.stop()}},p)})),X.apply(this,arguments)}var je=function(s){var g=(0,w.useRef)(null),i=(0,w.useRef)(),d=(0,w.useState)(void 0),C=(0,Y.Z)(d,2),$=C[0],I=C[1],U=(0,w.useState)(!1),L=(0,Y.Z)(U,2),N=L[0],W=L[1],A=(0,w.useState)(!1),B=(0,Y.Z)(A,2),Q=B[0],O=B[1],z=[{title:"#",dataIndex:"index",valueType:"indexBorder",width:48},{dataIndex:["user","avatar"],title:"Name",valueType:"avatar",render:function(n,r){return(0,a.jsxs)(ae.Z,{children:[(0,a.jsx)("span",{children:n}),r.name]})},hideInSearch:!0},{title:"Created",dataIndex:"created",hideInSearch:!0},{title:"Updated",dataIndex:"updated",hideInSearch:!0},{title:"Views",dataIndex:"views",hideInSearch:!0},{title:"Post Count",dataIndex:"post_count",hideInSearch:!0},{title:"Forum",dataIndex:"forum",valueEnum:{Burgers:{text:"English"},Beverages:{text:"\u4E2D\u6587"}},hideInTable:!0},{title:"Action",dataIndex:"option",valueType:"option",render:function(n,r){return(0,a.jsx)(ae.Z,{size:"middle",children:(0,a.jsx)(De,{item:r},"more")})}}];(0,te.Z)(s);var b={showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},le=function(){O(!0),I(void 0)},E=function(){if(g.current){var n=(0,se.findDOMNode)(g.current);setTimeout(function(){return n.blur()},0)}},M=function(){E(),W(!1),O(!1)},q=function(){E(),O(!1)},Ie=function(){var c=(0,j.Z)(h().mark(function n(r){var m,y,l;return h().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(y=$?$.id:"",console.log(y),E(),!y){T.next=9;break}return T.next=6,Te((0,S.Z)({id:y},r));case 6:l=T.sent,T.next=12;break;case 9:return T.next=11,Pe((0,S.Z)({},r));case 11:l=T.sent;case 12:return W(!0),(m=i.current)===null||m===void 0||m.reload(),T.abrupt("return",Promise.resolve({data:l,success:!0}));case 15:case"end":return T.stop()}},n)}));return function(r){return c.apply(this,arguments)}}(),we=function(n){O(!0),I(n)},Oe=function(){var c=(0,j.Z)(h().mark(function n(r){var m,y;return h().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Ze(r);case 2:return y=Z.sent,(m=i.current)===null||m===void 0||m.reload(),Z.abrupt("return",Promise.resolve({data:y,success:!0}));case 5:case"end":return Z.stop()}},n)}));return function(r){return c.apply(this,arguments)}}(),Ee=function(n,r){n==="edit"?we(r):n==="delete"&&ee.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Oe(r.id)}})},Me=function(){var c=(0,j.Z)(h().mark(function n(r){var m;return h().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:m=$?$.id:r.id,localStorage.setItem("topic_id",m),F.m8.push("/comment/post");case 3:case"end":return l.stop()}},n)}));return function(r){return c.apply(this,arguments)}}(),De=function(n){var r=n.item;return(0,a.jsx)(f.Z.Button,{onClick:function(y){return(0,te.Z)(y),Me(r)},overlay:(0,a.jsxs)(D.Z,{onClick:function(y){var l=y.key;return Ee(l,r)},children:[(0,a.jsx)(D.Z.Item,{children:"edit"},"edit"),(0,a.jsx)(D.Z.Item,{children:"delete"},"delete")]}),children:(0,a.jsx)(ue.Z,{})})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(ce.ZP,{children:(0,a.jsx)(v.ZP,{locale:ie.Z,children:(0,a.jsx)(me.ZP,{headerTitle:"Topics",actionRef:i,rowKey:function(n,r){return"complete".concat(n.id).concat(r)},request:function(){var c=(0,j.Z)(h().mark(function n(r){var m;return h().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log(r.category),l.next=3,Ce(r);case 3:return m=l.sent,l.abrupt("return",Promise.resolve({data:m,success:!0}));case 5:case"end":return l.stop()}},n)}));return function(n){return c.apply(this,arguments)}}(),toolbar:{actions:[(0,a.jsxs)(P.Z,{type:"primary",onClick:le,children:[(0,a.jsx)(de.Z,{})," Add"]})]},search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(n,r){var m=n.searchText,y=n.resetText,l=r.form;return[(0,a.jsx)(P.Z,{type:"primary",onClick:function(){l==null||l.submit()},children:m},"searchText"),(0,a.jsx)(P.Z,{onClick:function(){l==null||l.resetFields()},children:y},"resetText")]}},options:!1,onLoadingChange:!0,pagination:b,size:"middle",columns:z})})}),(0,a.jsx)(Se,{done:N,current:$,visible:Q,onDone:M,onCancel:q,onSubmit:Ie})]})},$e=je},1028:function(u,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(25633)),x=v.default;t.default=x},25633:function(u,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(67154)),x=o(e(27590)),P=o(e(52040)),R={lang:(0,v.default)({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},x.default),timePickerLocale:(0,v.default)({},P.default)},f=R;t.default=f},56350:function(u,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(62273)),x=o(e(25633)),P=o(e(52040)),R=o(e(1028)),f="${label} is not a valid ${type}",_={locale:"en",Pagination:v.default,DatePicker:x.default,TimePicker:P.default,Calendar:R.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:f,method:f,array:f,object:f,number:f,date:f,boolean:f,integer:f,float:f,regexp:f,email:f,url:f,hex:f},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}},D=_;t.default=D},18253:function(u,t,e){"use strict";var o,v=e(95318);o={value:!0},t.Z=void 0;var x=v(e(56350)),P=x.default;t.Z=P},52040:function(u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},o=e;t.default=o},62273:function(u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"};t.default=e},27590:function(u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},o=e;t.default=o}}]);
