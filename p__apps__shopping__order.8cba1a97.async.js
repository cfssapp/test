(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[129],{67154:function(d){function t(){return d.exports=t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var v=arguments[o];for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&(e[x]=v[x])}return e},d.exports.default=d.exports,d.exports.__esModule=!0,t.apply(this,arguments)}d.exports=t,d.exports.default=d.exports,d.exports.__esModule=!0},19273:function(d,t,e){"use strict";e.d(t,{Z:function(){return o}});function o(v){if(v==null)throw new TypeError("Cannot destructure undefined")}},92811:function(d){d.exports={standardList:"standardList___eAEVV",headerInfo:"headerInfo___2Xjfd",listContent:"listContent___wlhaW",listContentItem:"listContentItem___Y1Ad3",extraContentSearch:"extraContentSearch___3H3UI",listCard:"listCard___eyRj6",standardListForm:"standardListForm___ekYz3",formResult:"formResult___1XeXF"}},27650:function(d,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Pe}});var o=e(84305),v=e(69224),x=e(57663),C=e(71577),D=e(59250),f=e(13013),q=e(30887),R=e(99210),Me=e(71194),_=e(57016),S=e(8870),$=e(3182),re=e(19273),De=e(49111),E=e(19650),F=e(2824),ne=e(94043),g=e.n(ne),Z=e(67294),le=e(73935),oe=e(18253),se=e(76570),ie=e(81907),ee=e(9183),Ee=e(47673),L=e(4107),Fe=e(57106),de=e(99683),Ye=e(9715),O=e(82482),ue=e(30381),ce=e.n(ue),me=e(92811),te=e.n(me),a=e(85893),fe={labelCol:{span:7},wrapperCol:{span:13}},ve=function(s){var p=O.Z.useForm(),n=(0,F.Z)(p,1),c=n[0],b=s.done,A=s.visible,T=s.current,I=s.onDone,G=s.onCancel,M=s.onSubmit;(0,Z.useEffect)(function(){c&&!A&&c.resetFields()},[s.visible]),(0,Z.useEffect)(function(){T&&c.setFieldsValue((0,S.Z)((0,S.Z)({},T),{},{createdAt:T.createdAt?ce()(T.createdAt):null}))},[s.current]);var H=function(){!c||c.submit()},k=function(w){M&&M(w)},X=b?{footer:null,onCancel:I}:{okText:"Save",onOk:H,onCancel:G},N=function(){return b?(0,a.jsx)(de.ZP,{status:"success",title:"Success",subTitle:"",extra:(0,a.jsx)(C.Z,{type:"primary",onClick:I,children:"OK"}),className:te().formResult}):(0,a.jsxs)(O.Z,(0,S.Z)((0,S.Z)({},fe),{},{form:c,onFinish:k,children:[(0,a.jsx)(O.Z.Item,{name:"street_name",label:"Street Name",rules:[{message:"Please input"}],children:(0,a.jsx)(L.Z,{placeholder:"Please input"})}),(0,a.jsx)(O.Z.Item,{name:"state",label:"State",rules:[{message:"Please input"}],children:(0,a.jsx)(L.Z,{placeholder:"Please input"})}),(0,a.jsx)(O.Z.Item,{name:"postal_code",label:"Postal Code",rules:[{message:"Please input"}],children:(0,a.jsx)(L.Z,{placeholder:"Please input"})})]}))};return(0,a.jsx)(_.Z,(0,S.Z)((0,S.Z)({title:b?null:"".concat(T?"Edit":"Add"," Address"),className:te().standardListForm,width:640,bodyStyle:b?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:A},X),{},{children:N()}))},pe=ve,ae=e(91896),Y=e(97363),he="https://antapi.pythonanywhere.com/food_delivery/order/";function ye(u){return z.apply(this,arguments)}function z(){return z=(0,$.Z)(g().mark(function u(s){return g().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Y.WY)(he,{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{search:s.order_id}}));case 1:case"end":return n.stop()}},u)})),z.apply(this,arguments)}function ge(u){return W.apply(this,arguments)}function W(){return W=(0,$.Z)(g().mark(function u(s){var p;return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=(0,ae.Z)({},s),c.abrupt("return",(0,Y.WY)("https://antapi.pythonanywhere.com/food_delivery/item/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,S.Z)((0,S.Z)({},p),{},{method:"post"})}));case 2:case"end":return c.stop()}},u)})),W.apply(this,arguments)}function xe(u){return B.apply(this,arguments)}function B(){return B=(0,$.Z)(g().mark(function u(s){var p,n;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return p=(0,ae.Z)({},s),n=s.id,b.abrupt("return",(0,Y.WY)("https://antapi.pythonanywhere.com/food_delivery/item/edit/"+n+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,S.Z)((0,S.Z)({},p),{},{method:"update"})}));case 3:case"end":return b.stop()}},u)})),B.apply(this,arguments)}function ke(u){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function u(s){return _regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/delete/"+s+"/",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:{method:"delete"}}));case 1:case"end":return n.stop()}},u)})),K.apply(this,arguments)}function Ne(u){return J.apply(this,arguments)}function J(){return J=_asyncToGenerator(_regeneratorRuntime.mark(function u(s){var p;return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=_extends({},s),c.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/add-to-cart/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},p),{},{method:"post"})}));case 2:case"end":return c.stop()}},u)})),J.apply(this,arguments)}function Se(u){return V.apply(this,arguments)}function V(){return V=(0,$.Z)(g().mark(function u(s){return g().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Y.WY)("https://antapi.pythonanywhere.com/food_delivery/order/delete/"+s+"/",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:{method:"delete"}}));case 1:case"end":return n.stop()}},u)})),V.apply(this,arguments)}var be=function(s){var p=(0,Z.useRef)(null),n=(0,Z.useRef)(),c=(0,Z.useRef)(),b=(0,Z.useState)(void 0),A=(0,F.Z)(b,2),T=A[0],I=A[1],G=(0,Z.useState)(!1),M=(0,F.Z)(G,2),H=M[0],k=M[1],X=(0,Z.useState)(!1),N=(0,F.Z)(X,2),U=N[0],w=N[1],Ce=[{title:"Order No.",dataIndex:"order_id"},{title:"Address",dataIndex:"shipping_address",hideInSearch:!0},{title:"Action",dataIndex:"option",valueType:"option",render:function(r,l){return(0,a.jsx)(E.Z,{size:"middle",children:(0,a.jsx)(Ae,{item:l},"more")})}}];(0,re.Z)(s);var Te={showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},Ue=function(){w(!0),I(void 0)},Q=function(){if(p.current){var r=(0,le.findDOMNode)(p.current);setTimeout(function(){return r.blur()},0)}},je=function(){Q(),k(!1),w(!1)},Ze=function(){Q(),w(!1)},$e=function(){var m=(0,$.Z)(g().mark(function r(l){var h,y,i;return g().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(y=T?T.id:"",console.log(y),Q(),!y){P.next=9;break}return P.next=6,xe((0,S.Z)({id:y},l));case 6:i=P.sent,P.next=12;break;case 9:return P.next=11,ge((0,S.Z)({},l));case 11:i=P.sent;case 12:return k(!0),(h=c.current)===null||h===void 0||h.reload(),P.abrupt("return",Promise.resolve({data:i,success:!0}));case 15:case"end":return P.stop()}},r)}));return function(l){return m.apply(this,arguments)}}(),we=function(r){w(!0),I(r)},Re=function(){var m=(0,$.Z)(g().mark(function r(l){var h,y;return g().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Se(l);case 2:return y=j.sent,(h=n.current)===null||h===void 0||h.reload(),j.abrupt("return",Promise.resolve({data:y,success:!0}));case 5:case"end":return j.stop()}},r)}));return function(l){return m.apply(this,arguments)}}(),Oe=function(r,l){r==="edit"?we(l):r==="delete"&&_.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Re(l.id)}})},Ae=function(r){var l=r.item;return(0,a.jsx)(f.Z.Button,{overlay:(0,a.jsxs)(R.Z,{onClick:function(y){var i=y.key;return Oe(i,l)},children:[(0,a.jsx)(R.Z.Item,{children:"edit"},"edit"),(0,a.jsx)(R.Z.Item,{children:"delete"},"delete")]}),children:(0,a.jsx)(se.Z,{})})},Ie=function(r){var l=r.items;return(0,a.jsx)(ee.ZP,{columns:[{dataIndex:["avatar","imagefile"],title:"Name",valueType:"avatar",render:function(y,i){return(0,a.jsxs)(E.Z,{children:[(0,a.jsx)("span",{children:y}),i.name]})},hideInSearch:!0},{title:"Price",dataIndex:"price"}],headerTitle:!1,search:!1,options:!1,dataSource:l,pagination:!1})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(ie.ZP,{children:(0,a.jsx)(v.ZP,{locale:oe.Z,children:(0,a.jsx)(ee.ZP,{headerTitle:"Order",actionRef:n,rowKey:function(r,l){return"complete".concat(r.id).concat(l)},request:function(){var m=(0,$.Z)(g().mark(function r(l){var h;return g().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log(l.order_id),i.next=3,ye(l);case 3:return h=i.sent,i.abrupt("return",Promise.resolve({data:h,success:!0}));case 5:case"end":return i.stop()}},r)}));return function(r){return m.apply(this,arguments)}}(),search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(r,l){var h=r.searchText,y=r.resetText,i=l.form;return[(0,a.jsx)(C.Z,{type:"primary",onClick:function(){i==null||i.submit()},children:h},"searchText"),(0,a.jsx)(C.Z,{onClick:function(){i==null||i.resetFields()},children:y},"resetText")]}},options:!1,tableAlertRender:function(r){var l=r.selectedRowKeys,h=r.selectedRows,y=r.onCleanSelected;return(0,a.jsx)(E.Z,{size:24,children:(0,a.jsxs)("span",{children:["Selected ",l.length," item/s",(0,a.jsx)("a",{style:{marginLeft:8},onClick:y,children:"Cancel"})]})})},tableAlertOptionRender:function(){return(0,a.jsxs)(E.Z,{size:16,children:[(0,a.jsx)("a",{children:"Delete"}),(0,a.jsx)("a",{children:"Submit Shipment"})]})},onLoadingChange:!0,pagination:Te,expandable:{expandedRowRender:Ie},size:"middle",columns:Ce,style:{marginBottom:10}})})}),(0,a.jsx)(pe,{done:H,current:T,visible:U,onDone:je,onCancel:Ze,onSubmit:$e})]})},Pe=be},1028:function(d,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(25633)),x=v.default;t.default=x},25633:function(d,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(67154)),x=o(e(27590)),C=o(e(52040)),D={lang:(0,v.default)({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},x.default),timePickerLocale:(0,v.default)({},C.default)},f=D;t.default=f},56350:function(d,t,e){"use strict";var o=e(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=o(e(62273)),x=o(e(25633)),C=o(e(52040)),D=o(e(1028)),f="${label} is not a valid ${type}",q={locale:"en",Pagination:v.default,DatePicker:x.default,TimePicker:C.default,Calendar:D.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:f,method:f,array:f,object:f,number:f,date:f,boolean:f,integer:f,float:f,regexp:f,email:f,url:f,hex:f},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}},R=q;t.default=R},18253:function(d,t,e){"use strict";var o,v=e(95318);o={value:!0},t.Z=void 0;var x=v(e(56350)),C=x.default;t.Z=C},52040:function(d,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},o=e;t.default=o},62273:function(d,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"};t.default=e},27590:function(d,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},o=e;t.default=o}}]);
