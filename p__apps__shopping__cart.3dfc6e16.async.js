(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[124],{47210:function(V){V.exports={standardList:"standardList___1iux5",headerInfo:"headerInfo___2D2K3",listContent:"listContent___3Ol41",listContentItem:"listContentItem___3n_EC",extraContentSearch:"extraContentSearch___2Bxtz",listCard:"listCard___2wF5R",standardListForm:"standardListForm___16Lo4",formResult:"formResult___aU39R"}},56992:function(V,Q,e){"use strict";e.r(Q),e.d(Q,{default:function(){return Pe}});var Fe=e(84305),ee=e(69224),Oe=e(48736),te=e(27049),We=e(57663),z=e(71577),Me=e(34792),H=e(48086),f=e(8870),g=e(3182),X=e(19273),Le=e(49111),A=e(19650),R=e(2824),re=e(94043),m=e.n(re),Z=e(67294),ae=e(73935),ne=e(18253),se=e(1058),oe=e(81907),ie=e(9183),q=e(12826),le=e(30202),Ee=e(71194),ue=e(57016),Je=e(47673),B=e(4107),ke=e(57106),de=e(99683),Ke=e(9715),T=e(82482),ce=e(30381),me=e.n(ce),pe=e(47210),_=e.n(pe),t=e(85893),he={labelCol:{span:7},wrapperCol:{span:13}},fe=function(s){var l=T.Z.useForm(),n=(0,R.Z)(l,1),a=n[0],v=s.done,P=s.visible,y=s.current,w=s.onDone,Y=s.onCancel,x=s.onSubmit;(0,Z.useEffect)(function(){a&&!P&&a.resetFields()},[s.visible]),(0,Z.useEffect)(function(){y&&a.setFieldsValue((0,f.Z)((0,f.Z)({},y),{},{createdAt:y.createdAt?me()(y.createdAt):null}))},[s.current]);var G=function(){!a||a.submit()},I=function(C){x&&x(C)},U=v?{footer:null,onCancel:w}:{okText:"Save",onOk:G,onCancel:Y},b=function(){return v?(0,t.jsx)(de.ZP,{status:"success",title:"Success",subTitle:"",extra:(0,t.jsx)(z.Z,{type:"primary",onClick:w,children:"OK"}),className:_().formResult}):(0,t.jsxs)(T.Z,(0,f.Z)((0,f.Z)({},he),{},{form:a,onFinish:I,children:[(0,t.jsx)(T.Z.Item,{name:"street_name",label:"Address",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})}),(0,t.jsx)(T.Z.Item,{name:"state",label:"City",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})}),(0,t.jsx)(T.Z.Item,{name:"postal_code",label:"ZIP Code",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})})]}))};return(0,t.jsx)(ue.Z,(0,f.Z)((0,f.Z)({title:v?null:"".concat(y?"Edit":"Add"," Address"),className:_().standardListForm,width:640,destroyOnClose:!0,visible:P},U),{},{children:b()}))},ve=fe,D=e(91896),j=e(97363),ye="https://antapi.pythonanywhere.com/food_delivery/cart/";function ge(i){return F.apply(this,arguments)}function F(){return F=(0,g.Z)(m().mark(function i(s){return m().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,j.WY)(ye,{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{search:s.category}}));case 1:case"end":return n.stop()}},i)})),F.apply(this,arguments)}function Ye(i){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime.mark(function i(s){var l;return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=_extends({},s),a.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},l),{},{method:"post"})}));case 2:case"end":return a.stop()}},i)})),O.apply(this,arguments)}function Ge(i){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function i(s){var l,n;return _regeneratorRuntime.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return l=_extends({},s),n=s.id,v.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/edit/"+n+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},l),{},{method:"update"})}));case 3:case"end":return v.stop()}},i)})),W.apply(this,arguments)}function Ue(i){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime.mark(function i(s){return _regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/delete/"+s+"/",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:{method:"delete"}}));case 1:case"end":return n.stop()}},i)})),M.apply(this,arguments)}function Ze(i){return L.apply(this,arguments)}function L(){return L=(0,g.Z)(m().mark(function i(s){var l;return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=(0,D.Z)({},s),a.abrupt("return",(0,j.WY)("https://antapi.pythonanywhere.com/food_delivery/remove-from-cart/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},l),{},{method:"post"})}));case 2:case"end":return a.stop()}},i)})),L.apply(this,arguments)}function Se(i){return E.apply(this,arguments)}function E(){return E=(0,g.Z)(m().mark(function i(s){return m().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,j.WY)("https://antapi.pythonanywhere.com/food_delivery/address/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{}}));case 1:case"end":return n.stop()}},i)})),E.apply(this,arguments)}function je(i){return J.apply(this,arguments)}function J(){return J=(0,g.Z)(m().mark(function i(s){var l,n;return m().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return l=(0,D.Z)({},s),n=s.id,v.abrupt("return",(0,j.WY)("https://antapi.pythonanywhere.com/food_delivery/address/edit/"+n+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},l),{},{method:"update"})}));case 3:case"end":return v.stop()}},i)})),J.apply(this,arguments)}function Ce(i){return k.apply(this,arguments)}function k(){return k=(0,g.Z)(m().mark(function i(s){var l;return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=(0,D.Z)({},s),a.abrupt("return",(0,j.WY)("https://antapi.pythonanywhere.com/food_delivery/address/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},l),{},{method:"post"})}));case 2:case"end":return a.stop()}},i)})),k.apply(this,arguments)}function Ne(i){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function i(s){var l;return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=_extends({},s),a.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/add-to-order/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},l),{},{method:"post"})}));case 2:case"end":return a.stop()}},i)})),K.apply(this,arguments)}var Te=function(s){var l=(0,Z.useRef)(null),n=(0,Z.useRef)(),a=(0,Z.useRef)(),v=(0,Z.useState)(void 0),P=(0,R.Z)(v,2),y=P[0],w=P[1],Y=(0,Z.useState)(!1),x=(0,R.Z)(Y,2),G=x[0],I=x[1],U=(0,Z.useState)(!1),b=(0,R.Z)(U,2),$=b[0],C=b[1],we=[{title:"#",dataIndex:"index",valueType:"indexBorder",width:48},{dataIndex:["avatar","imagefile"],title:"Name",valueType:"avatar",render:function(r,o){return(0,t.jsxs)(A.Z,{children:[(0,t.jsx)("span",{children:r}),o.name]})},hideInSearch:!0},{title:"Price",dataIndex:"price",hideInSearch:!0},{title:"Category",dataIndex:"category",valueEnum:{Burgers:{text:"Burgers"},Beverages:{text:"Beverages"}},hideInTable:!0},{title:"Action",dataIndex:"option",valueType:"option",render:function(r,o){return(0,t.jsx)(A.Z,{size:"middle",children:(0,t.jsx)(Be,{item:o},"more")})}}];(0,X.Z)(s);var xe={showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},Ve=function(){C(!0),w(void 0)},N=function(){if(l.current){var r=(0,ae.findDOMNode)(l.current);setTimeout(function(){return r.blur()},0)}},Ae=function(){N(),I(!1),C(!1)},Re=function(){N(),C(!1)},Ie=function(){var u=(0,g.Z)(m().mark(function r(o){var d,p,c;return m().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(p=y?y.id:"",console.log(p),N(),!p){h.next=9;break}return h.next=6,je((0,f.Z)({id:p},o));case 6:c=h.sent,h.next=12;break;case 9:return h.next=11,Ce((0,f.Z)({},o));case 11:c=h.sent;case 12:return I(!0),(d=a.current)===null||d===void 0||d.reload(),h.abrupt("return",Promise.resolve({data:c,success:!0}));case 15:case"end":return h.stop()}},r)}));return function(o){return u.apply(this,arguments)}}(),be=function(r){C(!0),w(r)},$e=function(r,o){be(o)},ze=function(){var u=(0,g.Z)(m().mark(function r(o){var d,p,c;return m().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=y?y.id:o.id,h.next=3,Ze((0,f.Z)({id:p},o));case 3:return c=h.sent,(d=n.current)===null||d===void 0||d.reload(),H.default.success("Success!"),h.abrupt("return",Promise.resolve({data:c,success:!0}));case 7:case"end":return h.stop()}},r)}));return function(o){return u.apply(this,arguments)}}(),Be=function(r){var o=r.item;return(0,t.jsx)(z.Z,{onClick:function(p){return(0,X.Z)(p),ze(o)},children:(0,t.jsx)(se.Z,{})})},De=function(r){var o=r.itemtwo;return(0,t.jsx)("a",{onClick:function(p){var c=p.key;return $e(c,o)},children:"edit"})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(oe.ZP,{children:(0,t.jsx)(ee.ZP,{locale:ne.Z,children:(0,t.jsxs)(le.ZP,{style:{marginBottom:16},children:[(0,t.jsx)(q.Z,{title:"Delivery Details",actionRef:a,request:function(){var u=(0,g.Z)(m().mark(function r(o){var d;return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Se(o);case 2:return d=c.sent,console.log(d),console.log(d[0]),c.abrupt("return",Promise.resolve({success:!0,data:d[0]}));case 6:case"end":return c.stop()}},r)}));return function(r){return u.apply(this,arguments)}}(),columns:[{title:"Address",key:"street_name",dataIndex:"street_name"},{title:"City",key:"state",dataIndex:"state"},{title:"ZIP Code",key:"postal_code",dataIndex:"postal_code"},{title:"Action",valueType:"option",render:function(r,o,d){return[(0,t.jsx)(De,{itemtwo:o},"moretwo")]}}]}),(0,t.jsx)(te.Z,{style:{marginBottom:32}}),(0,t.jsx)(q.Z,{title:"Food Details"}),(0,t.jsx)(ie.ZP,{actionRef:n,rowKey:function(r,o){return"complete".concat(r.id).concat(o)},request:function(){var u=(0,g.Z)(m().mark(function r(o){var d;return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(o.category),c.next=3,ge(o);case 3:return d=c.sent,c.abrupt("return",Promise.resolve({data:d,success:!0}));case 5:case"end":return c.stop()}},r)}));return function(r){return u.apply(this,arguments)}}(),search:!1,options:!1,tableAlertRender:function(r){var o=r.selectedRowKeys,d=r.selectedRows,p=r.onCleanSelected;return(0,t.jsx)(A.Z,{size:24,children:(0,t.jsxs)("span",{children:["Selected ",o.length," item/s",(0,t.jsx)("a",{style:{marginLeft:0},onClick:p,children:"Cancel"})]})})},tableAlertOptionRender:function(){return(0,t.jsxs)(A.Z,{size:16,children:[(0,t.jsx)("a",{children:"Delete"}),(0,t.jsx)("a",{children:"Submit Shipment"})]})},onLoadingChange:!0,pagination:xe,size:"middle",columns:we,style:{marginBottom:20}}),(0,t.jsx)(z.Z,{type:"primary",onClick:function(){var u=(0,g.Z)(m().mark(function r(o){var d,p;return m().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,j.WY)("https://antapi.pythonanywhere.com/food_delivery/add-to-order/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{}});case 2:return p=S.sent,console.log(p),(d=n.current)===null||d===void 0||d.reload(),H.default.success("Success!"),S.abrupt("return",Promise.resolve({data:p,success:!0}));case 7:case"end":return S.stop()}},r)}));return function(r){return u.apply(this,arguments)}}(),block:!0,children:"Submit"})]})})}),(0,t.jsx)(ve,{done:G,current:y,visible:$,onDone:Ae,onCancel:Re,onSubmit:Ie})]})},Pe=Te}}]);
