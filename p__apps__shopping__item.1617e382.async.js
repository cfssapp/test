(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[580],{325:function(J){J.exports={standardList:"standardList___3UCR1",headerInfo:"headerInfo___2Yc9Q",listContent:"listContent___uJKqx",listContentItem:"listContentItem___hzb5i",extraContentSearch:"extraContentSearch___2Z0sp",listCard:"listCard___2M89w",standardListForm:"standardListForm___2n2wL",formResult:"formResult___3-lmE"}},4494:function(J,U,e){"use strict";e.r(U),e.d(U,{default:function(){return me}});var je=e(84305),X=e(69224),pe=e(57663),T=e(71577),Se=e(59250),w=e(13013),Te=e(30887),E=e(99210),Re=e(34792),k=e(48086),Ie=e(71194),G=e(57016),u=e(8870),P=e(3182),Q=e(19273),Pe=e(49111),A=e(19650),B=e(2824),q=e(94043),m=e.n(q),Z=e(67294),_=e(73935),ee=e(18253),V=e(49101),te=e(67265),ne=e(86875),Ae=e(43358),K=e(90290),Be=e(47673),W=e(4107),Fe=e(43185),re=e(94412),Oe=e(57106),ae=e(99683),Le=e(9715),x=e(82482),se=e(30381),le=e.n(se),oe=e(325),H=e.n(oe),ie=e(84391),t=e(85893),de={labelCol:{span:7},wrapperCol:{span:13}},ue=function(c){var F=x.Z.useForm(),y=(0,B.Z)(F,1),f=y[0],C=c.done,h=c.visible,g=c.current,O=c.onDone,L=c.onCancel,M=c.onSubmit;(0,Z.useEffect)(function(){f&&!h&&f.resetFields()},[c.visible]),(0,Z.useEffect)(function(){g&&f.setFieldsValue((0,u.Z)((0,u.Z)({},g),{},{createdAt:g.createdAt?le()(g.createdAt):null}))},[c.current]);var D=function(){!f||f.submit()},I,$=function(d){M&&(console.log(d),console.log(d.id),console.log(d.name),console.log(d.category),console.log(d.price),console.log(d.avatar),console.log(I),d.avatar=I,console.log(d.avatar),M(d))},N=C?{footer:null,onCancel:O}:{okText:"Save",onOk:D,onCancel:L},j=function(){if(C)return(0,t.jsx)(ae.ZP,{status:"success",title:"Success",subTitle:"",extra:(0,t.jsx)(T.Z,{type:"primary",onClick:O,children:"OK"}),className:H().formResult});var d={name:"imagefile",action:"https://antapi.pythonanywhere.com/food_delivery/item/avatar/",headers:{Authorization:"JWT "+localStorage.getItem("access_token")},onChange:function(p){var S=p.file,b=p.fileList;S.status!=="uploading"&&(console.log(S,b),console.log(S.response.id),I=S.response.id)}};return(0,t.jsxs)(x.Z,(0,u.Z)((0,u.Z)({},de),{},{form:f,onFinish:$,children:[(0,t.jsx)(x.Z.Item,{label:"Avatar",name:"avatar",children:(0,t.jsx)(re.Z,(0,u.Z)((0,u.Z)({},d),{},{children:(0,t.jsx)(T.Z,{icon:(0,t.jsx)(ie.Z,{}),children:"Click to Upload"})}))}),(0,t.jsx)(x.Z.Item,{name:"name",label:"Name",rules:[{message:"Please input"}],children:(0,t.jsx)(W.Z,{placeholder:"Please input"})}),(0,t.jsx)(x.Z.Item,{name:"price",label:"Price",rules:[{message:"Please input"}],children:(0,t.jsx)(W.Z,{placeholder:"Please input"})}),(0,t.jsx)(x.Z.Item,{name:"category",label:"Category",children:(0,t.jsxs)(K.Z,{placeholder:"Please input",children:[(0,t.jsx)(K.Z.Option,{value:"Burgers",children:"Burgers"}),(0,t.jsx)(K.Z.Option,{value:"Beverages",children:"Beverages"})]})})]}))};return(0,t.jsx)(G.Z,(0,u.Z)((0,u.Z)({title:C?null:"".concat(g?"Edit":"Add"," Item"),className:H().standardListForm,width:640,destroyOnClose:!0,visible:h},N),{},{children:j()}))},ce=ue,R=e(807),ve=function(c){var F=(0,Z.useRef)(null),y=(0,Z.useRef)(),f=(0,Z.useState)(void 0),C=(0,B.Z)(f,2),h=C[0],g=C[1],O=(0,Z.useState)(!1),L=(0,B.Z)(O,2),M=L[0],D=L[1],I=(0,Z.useState)(!1),$=(0,B.Z)(I,2),N=$[0],j=$[1],z=[{title:"#",dataIndex:"index",valueType:"indexBorder",width:48},{dataIndex:["avatar","imagefile"],title:"Name",valueType:"avatar",render:function(n,r){return(0,t.jsxs)(A.Z,{children:[(0,t.jsx)("span",{children:n}),r.name]})},hideInSearch:!0},{title:"Price",dataIndex:"price",hideInSearch:!0},{title:"Category",dataIndex:"category",valueEnum:{Burgers:{text:"Burgers"},Beverages:{text:"Beverages"}},hideInTable:!0},{title:"Action",dataIndex:"option",valueType:"option",render:function(n,r){return(0,t.jsx)(A.Z,{size:"middle",children:(0,t.jsx)(Ce,{item:r},"more")})}}];(0,Q.Z)(c);var d={showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},Y=function(){j(!0),g(void 0)},p=function(){if(F.current){var n=(0,_.findDOMNode)(F.current);setTimeout(function(){return n.blur()},0)}},S=function(){p(),D(!1),j(!1)},b=function(){p(),j(!1)},he=function(){var s=(0,P.Z)(m().mark(function n(r){var l,o,a;return m().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o=h?h.id:"",console.log(o),p(),!o){i.next=9;break}return i.next=6,(0,R.Hg)((0,u.Z)({id:o},r));case 6:a=i.sent,i.next=12;break;case 9:return i.next=11,(0,R.vF)((0,u.Z)({},r));case 11:a=i.sent;case 12:return D(!0),(l=y.current)===null||l===void 0||l.reload(),i.abrupt("return",Promise.resolve({data:a,success:!0}));case 15:case"end":return i.stop()}},n)}));return function(r){return s.apply(this,arguments)}}(),ge=function(n){j(!0),g(n)},Ze=function(){var s=(0,P.Z)(m().mark(function n(r){var l,o;return m().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,R.TR)(r);case 2:return o=v.sent,(l=y.current)===null||l===void 0||l.reload(),v.abrupt("return",Promise.resolve({data:o,success:!0}));case 5:case"end":return v.stop()}},n)}));return function(r){return s.apply(this,arguments)}}(),xe=function(n,r){n==="edit"?ge(r):n==="delete"&&G.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Ze(r.id)}})},ye=function(){var s=(0,P.Z)(m().mark(function n(r){var l,o,a;return m().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=h?h.id:r.id,i.next=3,(0,R.GJ)((0,u.Z)({id:o},r));case 3:return a=i.sent,(l=y.current)===null||l===void 0||l.reload(),k.default.success("Success!"),i.abrupt("return",Promise.resolve({data:a,success:!0}));case 7:case"end":return i.stop()}},n)}));return function(r){return s.apply(this,arguments)}}(),Ce=function(n){var r=n.item;return(0,t.jsx)(w.Z.Button,{onClick:function(o){return(0,Q.Z)(o),ye(r)},overlay:(0,t.jsxs)(E.Z,{onClick:function(o){var a=o.key;return xe(a,r)},children:[(0,t.jsx)(E.Z.Item,{children:"edit"},"edit"),(0,t.jsx)(E.Z.Item,{children:"delete"},"delete")]}),children:(0,t.jsx)(V.Z,{})})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(te.ZP,{children:(0,t.jsx)(X.ZP,{locale:ee.Z,children:(0,t.jsx)(ne.ZP,{headerTitle:"Item",actionRef:y,rowKey:function(n,r){return"complete".concat(n.id).concat(r)},cardBordered:!0,request:function(){var s=(0,P.Z)(m().mark(function n(r){var l;return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(r.category),a.next=3,(0,R.L$)(r);case 3:return l=a.sent,a.abrupt("return",Promise.resolve({data:l,success:!0}));case 5:case"end":return a.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),toolbar:{actions:[(0,t.jsxs)(T.Z,{type:"primary",onClick:Y,children:[(0,t.jsx)(V.Z,{})," Add"]})]},search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(n,r){var l=n.searchText,o=n.resetText,a=r.form;return[(0,t.jsx)(T.Z,{type:"primary",onClick:function(){a==null||a.submit()},children:l},"searchText"),(0,t.jsx)(T.Z,{onClick:function(){a==null||a.resetFields()},children:o},"resetText")]}},options:!1,tableAlertRender:function(n){var r=n.selectedRowKeys,l=n.selectedRows,o=n.onCleanSelected;return(0,t.jsx)(A.Z,{size:24,children:(0,t.jsxs)("span",{children:["Selected ",r.length," item/s",(0,t.jsx)("a",{style:{marginLeft:8},onClick:o,children:"Cancel"})]})})},tableAlertOptionRender:function(){return(0,t.jsxs)(A.Z,{size:16,children:[(0,t.jsx)("a",{children:"Delete"}),(0,t.jsx)("a",{children:"Submit Shipment"})]})},onLoadingChange:!0,pagination:d,size:"middle",columns:z})})}),(0,t.jsx)(ce,{done:M,current:h,visible:N,onDone:S,onCancel:b,onSubmit:he})]})},me=ve}}]);
