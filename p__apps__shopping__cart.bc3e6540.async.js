(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[124],{47210:function(V){V.exports={standardList:"standardList___1iux5",headerInfo:"headerInfo___2D2K3",listContent:"listContent___3Ol41",listContentItem:"listContentItem___3n_EC",extraContentSearch:"extraContentSearch___2Bxtz",listCard:"listCard___2wF5R",standardListForm:"standardListForm___16Lo4",formResult:"formResult___aU39R"}},56992:function(V,Q,e){"use strict";e.r(Q),e.d(Q,{default:function(){return Te}});var Be=e(84305),ee=e(69224),De=e(48736),te=e(27049),Fe=e(57663),z=e(71577),Oe=e(34792),H=e(48086),f=e(8870),g=e(3182),X=e(19273),Me=e(49111),R=e(19650),A=e(2824),re=e(94043),p=e.n(re),Z=e(67294),ae=e(73935),ne=e(18253),se=e(1058),oe=e(81907),ie=e(9183),q=e(96459),le=e(30202),We=e(71194),ue=e(57016),Le=e(47673),B=e(4107),Ee=e(57106),de=e(99683),Je=e(9715),C=e(82482),ce=e(30381),me=e.n(ce),pe=e(47210),_=e.n(pe),t=e(85893),he={labelCol:{span:7},wrapperCol:{span:13}},fe=function(n){var i=C.Z.useForm(),a=(0,A.Z)(i,1),r=a[0],v=n.done,P=n.visible,y=n.current,x=n.onDone,k=n.onCancel,w=n.onSubmit;(0,Z.useEffect)(function(){r&&!P&&r.resetFields()},[n.visible]),(0,Z.useEffect)(function(){y&&r.setFieldsValue((0,f.Z)((0,f.Z)({},y),{},{createdAt:y.createdAt?me()(y.createdAt):null}))},[n.current]);var U=function(){!r||r.submit()},I=function(j){w&&w(j)},Y=v?{footer:null,onCancel:x}:{okText:"Save",onOk:U,onCancel:k},b=function(){return v?(0,t.jsx)(de.ZP,{status:"success",title:"Success",subTitle:"",extra:(0,t.jsx)(z.Z,{type:"primary",onClick:x,children:"OK"}),className:_().formResult}):(0,t.jsxs)(C.Z,(0,f.Z)((0,f.Z)({},he),{},{form:r,onFinish:I,children:[(0,t.jsx)(C.Z.Item,{name:"street_name",label:"Address",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})}),(0,t.jsx)(C.Z.Item,{name:"state",label:"City",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})}),(0,t.jsx)(C.Z.Item,{name:"postal_code",label:"ZIP Code",rules:[{message:"Please input"}],children:(0,t.jsx)(B.Z,{placeholder:"Please input"})})]}))};return(0,t.jsx)(ue.Z,(0,f.Z)((0,f.Z)({title:v?null:"".concat(y?"Edit":"Add"," Address"),className:_().standardListForm,width:640,destroyOnClose:!0,visible:P},Y),{},{children:b()}))},ve=fe,D=e(91896),T=e(97363),ye="https://antapi.pythonanywhere.com/food_delivery/cart/";function ge(o){return F.apply(this,arguments)}function F(){return F=(0,g.Z)(p().mark(function o(n){return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,T.WY)(ye,{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{search:n.category}}));case 1:case"end":return a.stop()}},o)})),F.apply(this,arguments)}function Ge(o){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime.mark(function o(n){var i;return _regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=_extends({},n),r.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},i),{},{method:"post"})}));case 2:case"end":return r.stop()}},o)})),O.apply(this,arguments)}function Ke(o){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime.mark(function o(n){var i,a;return _regeneratorRuntime.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return i=_extends({},n),a=n.id,v.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/edit/"+a+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},i),{},{method:"update"})}));case 3:case"end":return v.stop()}},o)})),M.apply(this,arguments)}function ke(o){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function o(n){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/item/delete/"+n+"/",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:{method:"delete"}}));case 1:case"end":return a.stop()}},o)})),W.apply(this,arguments)}function Ze(o){return L.apply(this,arguments)}function L(){return L=(0,g.Z)(p().mark(function o(n){var i;return p().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=(0,D.Z)({},n),r.abrupt("return",(0,T.WY)("https://antapi.pythonanywhere.com/food_delivery/remove-from-cart/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},i),{},{method:"post"})}));case 2:case"end":return r.stop()}},o)})),L.apply(this,arguments)}function Ue(o){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime.mark(function o(n){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/address/",{headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{}}));case 1:case"end":return a.stop()}},o)})),E.apply(this,arguments)}function Se(o){return J.apply(this,arguments)}function J(){return J=(0,g.Z)(p().mark(function o(n){var i,a;return p().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return i=(0,D.Z)({},n),a=n.id,v.abrupt("return",(0,T.WY)("https://antapi.pythonanywhere.com/food_delivery/address/edit/"+a+"/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},i),{},{method:"update"})}));case 3:case"end":return v.stop()}},o)})),J.apply(this,arguments)}function je(o){return G.apply(this,arguments)}function G(){return G=(0,g.Z)(p().mark(function o(n){var i;return p().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=(0,D.Z)({},n),r.abrupt("return",(0,T.WY)("https://antapi.pythonanywhere.com/food_delivery/address/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:(0,f.Z)((0,f.Z)({},i),{},{method:"post"})}));case 2:case"end":return r.stop()}},o)})),G.apply(this,arguments)}function Ye(o){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function o(n){var i;return _regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=_extends({},n),r.abrupt("return",request("https://antapi.pythonanywhere.com/food_delivery/add-to-order/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("access_token")},params:{},data:_objectSpread(_objectSpread({},i),{},{method:"post"})}));case 2:case"end":return r.stop()}},o)})),K.apply(this,arguments)}var Ce=function(n){var i=(0,Z.useRef)(null),a=(0,Z.useRef)(),r=(0,Z.useRef)(),v=(0,Z.useState)(void 0),P=(0,A.Z)(v,2),y=P[0],x=P[1],k=(0,Z.useState)(!1),w=(0,A.Z)(k,2),U=w[0],I=w[1],Y=(0,Z.useState)(!1),b=(0,A.Z)(Y,2),$=b[0],j=b[1],Pe=[{title:"#",dataIndex:"index",valueType:"indexBorder",width:48},{dataIndex:["avatar","imagefile"],title:"Name",valueType:"avatar",render:function(s,l){return(0,t.jsxs)(R.Z,{children:[(0,t.jsx)("span",{children:s}),l.name]})},hideInSearch:!0},{title:"Price",dataIndex:"price",hideInSearch:!0},{title:"Category",dataIndex:"category",valueEnum:{Burgers:{text:"Burgers"},Beverages:{text:"Beverages"}},hideInTable:!0},{title:"Action",dataIndex:"option",valueType:"option",render:function(s,l){return(0,t.jsx)(R.Z,{size:"middle",children:(0,t.jsx)(ze,{item:l},"more")})}}];(0,X.Z)(n);var xe={showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},Ne=function(){j(!0),x(void 0)},N=function(){if(i.current){var s=(0,ae.findDOMNode)(i.current);setTimeout(function(){return s.blur()},0)}},we=function(){N(),I(!1),j(!1)},Re=function(){N(),j(!1)},Ae=function(){var u=(0,g.Z)(p().mark(function s(l){var c,d,h;return p().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(d=y?y.id:"",console.log(d),N(),!d){m.next=9;break}return m.next=6,Se((0,f.Z)({id:d},l));case 6:h=m.sent,m.next=12;break;case 9:return m.next=11,je((0,f.Z)({},l));case 11:h=m.sent;case 12:return I(!0),(c=r.current)===null||c===void 0||c.reload(),m.abrupt("return",Promise.resolve({data:h,success:!0}));case 15:case"end":return m.stop()}},s)}));return function(l){return u.apply(this,arguments)}}(),Ie=function(s){j(!0),x(s)},be=function(s,l){Ie(l)},$e=function(){var u=(0,g.Z)(p().mark(function s(l){var c,d,h;return p().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return d=y?y.id:l.id,m.next=3,Ze((0,f.Z)({id:d},l));case 3:return h=m.sent,(c=a.current)===null||c===void 0||c.reload(),H.default.success("Success!"),m.abrupt("return",Promise.resolve({data:h,success:!0}));case 7:case"end":return m.stop()}},s)}));return function(l){return u.apply(this,arguments)}}(),ze=function(s){var l=s.item;return(0,t.jsx)(z.Z,{onClick:function(d){return(0,X.Z)(d),$e(l)},children:(0,t.jsx)(se.Z,{})})},Ve=function(s){var l=s.itemtwo;return(0,t.jsx)("a",{onClick:function(d){var h=d.key;return be(h,l)},children:"edit"})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(oe.ZP,{children:(0,t.jsx)(ee.ZP,{locale:ne.Z,children:(0,t.jsxs)(le.ZP,{style:{marginBottom:16},children:[(0,t.jsx)(q.Z,{title:"Delivery Details",actionRef:r,columns:[{title:"Address",key:"street_name",dataIndex:"street_name"},{title:"City",key:"state",dataIndex:"state"},{title:"ZIP Code",key:"postal_code",dataIndex:"postal_code"}]}),(0,t.jsx)(te.Z,{style:{marginBottom:32}}),(0,t.jsx)(q.Z,{title:"Food Details"}),(0,t.jsx)(ie.ZP,{actionRef:a,rowKey:function(s,l){return"complete".concat(s.id).concat(l)},request:function(){var u=(0,g.Z)(p().mark(function s(l){var c;return p().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log(l.category),h.next=3,ge(l);case 3:return c=h.sent,h.abrupt("return",Promise.resolve({data:c,success:!0}));case 5:case"end":return h.stop()}},s)}));return function(s){return u.apply(this,arguments)}}(),search:!1,options:!1,tableAlertRender:function(s){var l=s.selectedRowKeys,c=s.selectedRows,d=s.onCleanSelected;return(0,t.jsx)(R.Z,{size:24,children:(0,t.jsxs)("span",{children:["Selected ",l.length," item/s",(0,t.jsx)("a",{style:{marginLeft:0},onClick:d,children:"Cancel"})]})})},tableAlertOptionRender:function(){return(0,t.jsxs)(R.Z,{size:16,children:[(0,t.jsx)("a",{children:"Delete"}),(0,t.jsx)("a",{children:"Submit Shipment"})]})},onLoadingChange:!0,pagination:xe,size:"middle",columns:Pe,style:{marginBottom:20}}),(0,t.jsx)(z.Z,{type:"primary",onClick:function(){var u=(0,g.Z)(p().mark(function s(l){var c,d;return p().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,T.WY)("https://antapi.pythonanywhere.com/food_delivery/add-to-order/",{method:"POST",params:{}});case 2:return d=S.sent,console.log(d),(c=a.current)===null||c===void 0||c.reload(),H.default.success("Success!"),S.abrupt("return",Promise.resolve({data:d,success:!0}));case 7:case"end":return S.stop()}},s)}));return function(s){return u.apply(this,arguments)}}(),block:!0,children:"Submit"})]})})}),(0,t.jsx)(ve,{done:U,current:y,visible:$,onDone:we,onCancel:Re,onSubmit:Ae})]})},Te=Ce}}]);
