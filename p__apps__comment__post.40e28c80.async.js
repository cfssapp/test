(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[900],{82844:function(tt){tt.exports={listContent:"listContent___1x3nG",description:"description___3rQp7",extra:"extra___15ilX"}},75783:function(tt){tt.exports={standardList:"standardList___12M5M",headerInfo:"headerInfo___3iLzK",listContent:"listContent___1_Cvn",listContentItem:"listContentItem___fvw6z",extraContentSearch:"extraContentSearch___2w4WU",listCard:"listCard___23sqt",standardListForm:"standardListForm___2zy7M",formResult:"formResult___19zr2",listItemMetaTitle:"listItemMetaTitle___34CGT",listItemExtra:"listItemExtra___3vhXh",selfTrigger:"selfTrigger___pplx0",activitiesList:"activitiesList___2buVg",username:"username___1LZL5",event:"event___1zLE0",pageHeaderContent:"pageHeaderContent___1V-0T",avatar:"avatar___SEx8Z",content:"content___3C83U",contentTitle:"contentTitle___eOYxA",extraContent:"extraContent___1gxOE",statItem:"statItem___2aNoO",members:"members___3CjDC",member:"member___1-70y",projectList:"projectList___3UyQd",cardTitle:"cardTitle___1htJM",projectGrid:"projectGrid___M6Vnx",projectItemContent:"projectItemContent___P0j61",datetime:"datetime___1pjFN",activeCard:"activeCard___-tAuo",headerList:"headerList___uOHzJ",stepDescription:"stepDescription___1X6AT"}},47840:function(){},61729:function(tt,dt,t){"use strict";t.r(dt),t.d(dt,{ToDoList:function(){return p},default:function(){return rt}});var ut=t(58024),M=t(39144),j=t(54421),H=t(38272),jt=t(57663),n=t(71577),St=t(95300),V=t(7277),Dt=t(98858),G=t(4914),O=t(8870),gt=t(59250),Pt=t(13013),zt=t(30887),mt=t(99210),Bt=t(71194),vt=t(57016),et=t(2824),L=t(67294),It=t(64335),Mt=t(81907),nt=t(57254),Rt=t(49101),yt=t(97363),$t=t(57106),r=t(99683),o=t(9715),c=t(82482),a=t(47673),i=t(4107),g=t(30381),N=t.n(g),z=t(75783),y=t.n(z),e=t(85893),E=i.Z.TextArea,T={labelCol:{span:7},wrapperCol:{span:13}},B=function(d){var m=c.Z.useForm(),w=(0,et.Z)(m,1),h=w[0],S=d.done,A=d.visible,P=d.current,k=d.onDone,ot=d.onCancel,it=d.onSubmit;(0,L.useEffect)(function(){h&&!A&&h.resetFields()},[d.visible]),(0,L.useEffect)(function(){P&&h.setFieldsValue((0,O.Z)((0,O.Z)({},P),{},{createdAt:P.createdAt?N()(P.createdAt):null}))},[d.current]);var $=function(){!h||h.submit()},ft=function(K){it&&it(K)},U=S?{footer:null,onCancel:k}:{okText:"\u4FDD\u5B58",onOk:$,onCancel:ot},xt=function(){return S?(0,e.jsx)(r.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,e.jsx)(n.Z,{type:"primary",onClick:k,children:"\u77E5\u9053\u4E86"}),className:y().formResult}):(0,e.jsx)(c.Z,(0,O.Z)((0,O.Z)({},T),{},{form:h,onFinish:ft,children:(0,e.jsx)(c.Z.Item,{name:"content",label:"content",rules:[{message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4EA7\u54C1\u63CF\u8FF0\uFF01",min:5}],children:(0,e.jsx)(E,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})})}))};return(0,e.jsx)(vt.Z,(0,O.Z)((0,O.Z)({title:S?null:"".concat(P?"Edit":"Write"," a commment..."),className:y().standardListForm,width:640,destroyOnClose:!0,visible:A},U),{},{children:xt()}))},x=B,at=t(73935),J=t(94233),I=t(51890),Q=t(82844),F=t.n(Q),X=function(d){var m=d.data,w=m.content,h=m.name,S=m.created,A=m.user,P=m.href;return(0,e.jsxs)("div",{className:F().listContent,children:[(0,e.jsx)("div",{className:F().description,children:w}),(0,e.jsxs)("div",{className:F().extra,children:[(0,e.jsx)(I.C,{src:A.avatar,size:"small"}),(0,e.jsx)("a",{href:P,children:A.user_name}),(0,e.jsx)("em",{children:S})]})]})},Y=X,p=function(d){var m=(0,L.useRef)(null),w=d.loading,h=d.dispatch,S=d.todo2list.todoMList,A=(0,L.useState)(!1),P=(0,et.Z)(A,2),k=P[0],ot=P[1],it=(0,L.useState)(!1),$=(0,et.Z)(it,2),ft=$[0],U=$[1],xt=(0,L.useState)(void 0),q=(0,et.Z)(xt,2),K=q[0],Ct=q[1];(0,L.useEffect)(function(){h({type:"todo2list/fetch",payload:{}})},[1]);var Ot=function(){U(!0),Ct(void 0)},Lt=function(s){U(!0),Ct(s)},Nt=function(s){h({type:"todo2list/submit",payload:{id:s}})},Tt=function(s,l){s==="edit"?Lt(l):s==="delete"&&vt.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Nt(l.id)}})},Ut=function(s){var l=s.item;return(0,e.jsx)(Pt.Z,{overlay:(0,e.jsxs)(mt.Z,{onClick:function(lt){var ct=lt.key;return Tt(ct,l)},children:[(0,e.jsx)(mt.Z.Item,{children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(mt.Z.Item,{children:"\u5220\u9664"},"delete")]}),children:(0,e.jsxs)("a",{children:["\u66F4\u591A ",(0,e.jsx)(nt.Z,{})]})})},u=function(){if(m.current){var s=(0,at.findDOMNode)(m.current);setTimeout(function(){return s.blur()},0)}},W=function(){u(),ot(!1),U(!1)},ht=function(){u(),U(!1)},st=function(s){var l=localStorage.getItem("topic_id"),_=K?K.id:l;u(),ot(!0),h({type:"todo2list/submit",payload:(0,O.Z)({id:_},s)})},Ft={showSizeChanger:!0,showQuickJumper:!0,pageSize:5},Z=function(s){var l=s.currentUser2,_=l.user?l.user.user_name:l.user;return(0,e.jsx)(It.Z.Consumer,{children:function(ct){var At=ct.isMobile;return(0,e.jsxs)(G.Z,{className:y().headerList,size:"small",column:At?1:2,children:[(0,e.jsx)(G.Z.Item,{label:"Author",children:_}),(0,e.jsx)(G.Z.Item,{label:"Forum",children:l.forum}),(0,e.jsx)(G.Z.Item,{label:"Created",children:l.created}),(0,e.jsx)(G.Z.Item,{label:"Updated",children:l.updated})]})}})},Et=function(s){var l=s.currentTitle;return(0,e.jsx)("div",{children:l.name})},pt=function(s){var l=s.currentExtra;return(0,e.jsxs)("div",{className:y().extraContent,children:[(0,e.jsx)("div",{className:y().statItem,children:(0,e.jsx)(V.Z,{title:"Comment",value:l.post_count})}),(0,e.jsx)("div",{className:y().statItem,children:(0,e.jsx)(V.Z,{title:"View",value:l.views})})]})};return(0,e.jsxs)("div",{children:[(0,e.jsx)(Mt.ZP,{title:(0,e.jsx)(Et,{currentTitle:S}),content:(0,e.jsx)(Z,{currentUser2:S}),extraContent:(0,e.jsx)(pt,{currentExtra:S}),children:(0,e.jsxs)(M.Z,{children:[(0,e.jsxs)(n.Z,{type:"dashed",style:{width:"100%",marginBottom:8},onClick:Ot,ref:m,children:[(0,e.jsx)(Rt.Z,{}),"Write a commment..."]}),(0,e.jsx)(H.ZP,{size:"large",loading:w,pagination:Ft,rowKey:"id",itemLayout:"vertical",dataSource:S.posts,renderItem:function(s){return(0,e.jsxs)(H.ZP.Item,{extra:(0,e.jsx)("div",{className:y().listItemExtra}),children:[(0,e.jsx)(H.ZP.Item.Meta,{}),(0,e.jsx)(Y,{data:s})]},s.id)}})]})}),(0,e.jsx)(x,{done:k,current:K,visible:ft,onDone:W,onCancel:ht,onSubmit:st})]})},rt=(0,yt.$j)(function(R){var d=R.todo2list,m=R.loading;return{todo2list:d,loading:m.models.todo2list}})(p)},38272:function(tt,dt,t){"use strict";t.d(dt,{ZM:function(){return nt},ZP:function(){return $t}});var ut=t(85061),M=t(22122),j=t(96156),H=t(28481),jt=t(90484),n=t(67294),St=t(94184),V=t.n(St),Dt=t(11382),G=t(25378),O=t(24308),gt=t(65632),Pt=t(40308),zt=t(92820),mt=t(21584),Bt=t(96159),vt=function(r,o){var c={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&o.indexOf(a)<0&&(c[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(r);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(r,a[i])&&(c[a[i]]=r[a[i]]);return c},et=function(o){var c=o.prefixCls,a=o.className,i=o.avatar,g=o.title,N=o.description,z=vt(o,["prefixCls","className","avatar","title","description"]),y=n.useContext(gt.E_),e=y.getPrefixCls,E=e("list",c),T=V()("".concat(E,"-item-meta"),a),B=n.createElement("div",{className:"".concat(E,"-item-meta-content")},g&&n.createElement("h4",{className:"".concat(E,"-item-meta-title")},g),N&&n.createElement("div",{className:"".concat(E,"-item-meta-description")},N));return n.createElement("div",(0,M.Z)({},z,{className:T}),i&&n.createElement("div",{className:"".concat(E,"-item-meta-avatar")},i),(g||N)&&B)},L=function(o){var c=o.prefixCls,a=o.children,i=o.actions,g=o.extra,N=o.className,z=o.colStyle,y=vt(o,["prefixCls","children","actions","extra","className","colStyle"]),e=n.useContext(nt),E=e.grid,T=e.itemLayout,B=n.useContext(gt.E_),x=B.getPrefixCls,at=function(){var p;return n.Children.forEach(a,function(rt){typeof rt=="string"&&(p=!0)}),p&&n.Children.count(a)>1},J=function(){return T==="vertical"?!!g:!at()},I=x("list",c),Q=i&&i.length>0&&n.createElement("ul",{className:"".concat(I,"-item-action"),key:"actions"},i.map(function(Y,p){return n.createElement("li",{key:"".concat(I,"-item-action-").concat(p)},Y,p!==i.length-1&&n.createElement("em",{className:"".concat(I,"-item-action-split")}))})),F=E?"div":"li",X=n.createElement(F,(0,M.Z)({},y,{className:V()("".concat(I,"-item"),(0,j.Z)({},"".concat(I,"-item-no-flex"),!J()),N)}),T==="vertical"&&g?[n.createElement("div",{className:"".concat(I,"-item-main"),key:"content"},a,Q),n.createElement("div",{className:"".concat(I,"-item-extra"),key:"extra"},g)]:[a,Q,(0,Bt.Tm)(g,{key:"extra"})]);return E?n.createElement(mt.Z,{flex:1,style:z},X):X};L.Meta=et;var It=L,Mt=function(r,o){var c={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&o.indexOf(a)<0&&(c[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(r);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(r,a[i])&&(c[a[i]]=r[a[i]]);return c},nt=n.createContext({}),Rt=nt.Consumer;function yt(r){var o,c=r.pagination,a=c===void 0?!1:c,i=r.prefixCls,g=r.bordered,N=g===void 0?!1:g,z=r.split,y=z===void 0?!0:z,e=r.className,E=r.children,T=r.itemLayout,B=r.loadMore,x=r.grid,at=r.dataSource,J=at===void 0?[]:at,I=r.size,Q=r.header,F=r.footer,X=r.loading,Y=X===void 0?!1:X,p=r.rowKey,rt=r.renderItem,R=r.locale,d=Mt(r,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),m=a&&(0,jt.Z)(a)==="object"?a:{},w=n.useState(m.defaultCurrent||1),h=(0,H.Z)(w,2),S=h[0],A=h[1],P=n.useState(m.defaultPageSize||10),k=(0,H.Z)(P,2),ot=k[0],it=k[1],$=n.useContext(gt.E_),ft=$.getPrefixCls,U=$.renderEmpty,xt=$.direction,q={current:1,total:0},K={},Ct=function(f){return function(b,D){A(b),it(D),a&&a[f]&&a[f](b,D)}},Ot=Ct("onChange"),Lt=Ct("onShowSizeChange"),Nt=function(f,b){if(!rt)return null;var D;return typeof p=="function"?D=p(f):typeof p=="string"?D=f[p]:D=f.key,D||(D="list-item-".concat(b)),K[b]=D,rt(f,b)},Tt=function(){return!!(B||a||F)},Ut=function(f,b){return n.createElement("div",{className:"".concat(f,"-empty-text")},R&&R.emptyText||b("List"))},u=ft("list",i),W=Y;typeof W=="boolean"&&(W={spinning:W});var ht=W&&W.spinning,st="";switch(I){case"large":st="lg";break;case"small":st="sm";break;default:break}var Ft=V()(u,(o={},(0,j.Z)(o,"".concat(u,"-vertical"),T==="vertical"),(0,j.Z)(o,"".concat(u,"-").concat(st),st),(0,j.Z)(o,"".concat(u,"-split"),y),(0,j.Z)(o,"".concat(u,"-bordered"),N),(0,j.Z)(o,"".concat(u,"-loading"),ht),(0,j.Z)(o,"".concat(u,"-grid"),!!x),(0,j.Z)(o,"".concat(u,"-something-after-last-item"),Tt()),(0,j.Z)(o,"".concat(u,"-rtl"),xt==="rtl"),o),e),Z=(0,M.Z)((0,M.Z)((0,M.Z)({},q),{total:J.length,current:S,pageSize:ot}),a||{}),Et=Math.ceil(Z.total/Z.pageSize);Z.current>Et&&(Z.current=Et);var pt=a?n.createElement("div",{className:"".concat(u,"-pagination")},n.createElement(Pt.Z,(0,M.Z)({},Z,{onChange:Ot,onShowSizeChange:Lt}))):null,v=(0,ut.Z)(J);a&&J.length>(Z.current-1)*Z.pageSize&&(v=(0,ut.Z)(J).splice((Z.current-1)*Z.pageSize,Z.pageSize));var s=(0,G.Z)(),l=n.useMemo(function(){for(var C=0;C<O.c4.length;C+=1){var f=O.c4[C];if(s[f])return f}},[s]),_=n.useMemo(function(){if(!!x){var C=l&&x[l]?x[l]:x.column;if(C)return{width:"".concat(100/C,"%"),maxWidth:"".concat(100/C,"%")}}},[x==null?void 0:x.column,l]),lt=ht&&n.createElement("div",{style:{minHeight:53}});if(v.length>0){var ct=v.map(function(C,f){return Nt(C,f)}),At=n.Children.map(ct,function(C,f){return n.createElement("div",{key:K[f],style:_},C)});lt=x?n.createElement(zt.Z,{gutter:x.gutter},At):n.createElement("ul",{className:"".concat(u,"-items")},ct)}else!E&&!ht&&(lt=Ut(u,U));var Zt=Z.position||"bottom";return n.createElement(nt.Provider,{value:{grid:x,itemLayout:T}},n.createElement("div",(0,M.Z)({className:Ft},d),(Zt==="top"||Zt==="both")&&pt,Q&&n.createElement("div",{className:"".concat(u,"-header")},Q),n.createElement(Dt.Z,W,lt,E),F&&n.createElement("div",{className:"".concat(u,"-footer")},F),B||(Zt==="bottom"||Zt==="both")&&pt))}yt.Item=It;var $t=yt},54421:function(tt,dt,t){"use strict";var ut=t(43673),M=t.n(ut),j=t(47840),H=t.n(j),jt=t(13254),n=t(20228),St=t(14781),V=t(6999)}}]);
