(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[785],{73947:function(L){L.exports={listContent:"listContent___3vedS",description:"description___3PN_4",extra:"extra___1NSLt"}},98250:function(L){L.exports={standardList:"standardList___kz2pc",headerInfo:"headerInfo___2cRCO",listContent:"listContent___LdtIk",listContentItem:"listContentItem___3NLFa",extraContentSearch:"extraContentSearch___1hRjc",listCard:"listCard___1nD9x",standardListForm:"standardListForm___Aq-Np",formResult:"formResult___2xNbB",listItemMetaTitle:"listItemMetaTitle___2I_Vl",listItemExtra:"listItemExtra___y5uWL",selfTrigger:"selfTrigger___9x7cu",activitiesList:"activitiesList___1qnhj",username:"username___3PmLk",event:"event___27cR9",pageHeaderContent:"pageHeaderContent___1kD8-",avatar:"avatar___1_XIl",content:"content___2OTuT",contentTitle:"contentTitle___1Ifis",extraContent:"extraContent___1AWND",statItem:"statItem___X4Kpk",members:"members___2MGoO",member:"member___17If9",projectList:"projectList___3aP5Q",cardTitle:"cardTitle___9n-it",projectGrid:"projectGrid___2FO9w",projectItemContent:"projectItemContent___2TSFf",datetime:"datetime___1nNWy",activeCard:"activeCard___2O5-J",headerList:"headerList___1unww",stepDescription:"stepDescription___3VOaI"}},2235:function(L,R,e){"use strict";e.r(R),e.d(R,{Current1Cert:function(){return V},default:function(){return vt}});var It=e(58024),G=e(39144),yt=e(54421),D=e(38272),Lt=e(57663),A=e(71577),St=e(95300),H=e(7277),Tt=e(98858),I=e(4914),l=e(8870),S=e(2824),c=e(67294),$=e(64335),J=e(81907),K=e(49101),Q=e(97363),pt=e(71194),X=e(57016),Ft=e(43185),Y=e(94412),Nt=e(57106),b=e(99683),Mt=e(9715),T=e(82482),Pt=e(47673),w=e(4107),k=e(30381),q=e.n(k),_=e(98250),f=e.n(_),tt=e(84391),t=e(85893),et=w.Z.TextArea,nt={labelCol:{span:7},wrapperCol:{span:13}},at=function(n){var a=T.Z.useForm(),v=(0,S.Z)(a,1),i=v[0],o=n.done,C=n.visible,m=n.current,h=n.onDone,p=n.onCancel,F=n.onSubmit;(0,c.useEffect)(function(){i&&!C&&i.resetFields()},[n.visible]),(0,c.useEffect)(function(){m&&i.setFieldsValue((0,l.Z)((0,l.Z)({},m),{},{createdAt:m.createdAt?q()(m.createdAt):null}))},[n.current]);var N=function(){!i||i.submit()},M,y=function(j){F&&(j.imagesupload=M,F(j))},U=o?{footer:null,onCancel:h}:{okText:"Save",onOk:N,onCancel:p},P=function(){if(o)return(0,t.jsx)(b.ZP,{status:"success",title:"Done",extra:(0,t.jsx)(A.Z,{type:"primary",onClick:h,children:"Okay"}),className:f().formResult});var j={name:"imagefile",action:"https://antapi.pythonanywhere.com/calibration/comment/image/",headers:{Authorization:"JWT "+localStorage.getItem("access_token")},onChange:function(g){var Z=g.file,z=g.fileList;Z.status!=="uploading"&&(console.log(Z,z),console.log(Z.response.id),M=Z.response.id)}};return(0,t.jsxs)(T.Z,(0,l.Z)((0,l.Z)({},nt),{},{form:i,onFinish:y,children:[(0,t.jsx)(T.Z.Item,{label:"Upload",name:"uploadimages",children:(0,t.jsx)(Y.Z,(0,l.Z)((0,l.Z)({},j),{},{children:(0,t.jsx)(A.Z,{icon:(0,t.jsx)(tt.Z,{}),children:"Click to Upload"})}))}),(0,t.jsx)(T.Z.Item,{name:"content",label:"content",rules:[{message:"Minimum 5 characters",min:5}],children:(0,t.jsx)(et,{rows:4,placeholder:"Minimum 5 characters"})})]}))};return(0,t.jsx)(X.Z,(0,l.Z)((0,l.Z)({title:o?null:"Comment",className:f().standardListForm,width:640,destroyOnClose:!0,visible:C},U),{},{children:P()}))},rt=at,st=e(73935),Ot=e(94233),it=e(51890),Dt=e(49111),ot=e(19650),At=e(12968),B=e(62462),lt=e(73947),E=e.n(lt);function dt(d){var n=d.jsonImage,a=n.map(function(v){return(0,t.jsx)(B.Z,{width:50,src:v.imagefile})});return a}function mt(d){var n=d.jsonImage;return n.length===0?null:n.length!==0?(0,t.jsx)(B.Z.PreviewGroup,{children:(0,t.jsx)(ot.Z,{size:"middle",children:(0,t.jsx)(dt,{jsonImage:n})})}):(0,t.jsx)("h1",{children:"Error."})}var ut=function(n){var a=n.data,v=a.content,i=a.name,o=a.created,C=a.user,m=a.href,h=a.image;return(0,t.jsxs)("div",{className:E().listContent,children:[(0,t.jsx)("div",{className:E().description,children:v}),(0,t.jsx)(mt,{jsonImage:h}),(0,t.jsxs)("div",{className:E().extra,children:[(0,t.jsx)(it.C,{src:C.avatar,size:"small"}),(0,t.jsx)("a",{href:m,children:C.user_name}),(0,t.jsx)("em",{children:o})]})]})},ct=ut,V=function(n){var a=(0,c.useRef)(null),v=n.loading,i=n.dispatch,o=n.Current4Cert.Current5Cert,C=(0,c.useState)(!1),m=(0,S.Z)(C,2),h=m[0],p=m[1],F=(0,c.useState)(!1),N=(0,S.Z)(F,2),M=N[0],y=N[1],U=(0,c.useState)(void 0),P=(0,S.Z)(U,2),x=P[0],j=P[1];(0,c.useEffect)(function(){i({type:"Current4Cert/fetch",payload:{}})},[1]);var W=function(){y(!0),j(void 0)},g=function(){if(a.current){var s=(0,st.findDOMNode)(a.current);setTimeout(function(){return s.blur()},0)}},Z=function(){g(),p(!1),y(!1)},z=function(){g(),y(!1)},Ct=function(s){var r=localStorage.getItem("topic_id"),O=x?x.id:r;g(),p(!0),i({type:"Current4Cert/submit",payload:(0,l.Z)({id:O},s)})},ft={showSizeChanger:!0,showQuickJumper:!0,pageSize:5},ht=function(s){var r=s.currentUser2,O=r.user?r.user.user_name:r.user;return console.log(O),(0,t.jsx)($.Z.Consumer,{children:function(gt){var Zt=gt.isMobile;return(0,t.jsxs)(I.Z,{className:f().headerList,size:"small",column:Zt?1:2,children:[(0,t.jsx)(I.Z.Item,{label:"Author",children:O}),(0,t.jsx)(I.Z.Item,{label:"Customer",children:r.customer}),(0,t.jsx)(I.Z.Item,{label:"Instrument",children:r.instrument}),(0,t.jsx)(I.Z.Item,{label:"Updated",children:r.updated})]})}})},xt=function(s){var r=s.currentTitle;return(0,t.jsx)("div",{children:r.certificate_id})},jt=function(s){var r=s.currentExtra;return(0,t.jsxs)("div",{className:f().extraContent,children:[(0,t.jsx)("div",{className:f().statItem,children:(0,t.jsx)(H.Z,{title:"Comment",value:r.post_count})}),(0,t.jsx)("div",{className:f().statItem,children:(0,t.jsx)(H.Z,{title:"View",value:r.views})})]})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(J.ZP,{title:(0,t.jsx)(xt,{currentTitle:o}),content:(0,t.jsx)(ht,{currentUser2:o}),extraContent:(0,t.jsx)(jt,{currentExtra:o}),children:(0,t.jsxs)(G.Z,{children:[(0,t.jsxs)(A.Z,{type:"dashed",style:{width:"100%",marginBottom:8},onClick:W,ref:a,children:[(0,t.jsx)(K.Z,{}),"Write a commment..."]}),(0,t.jsx)(D.ZP,{size:"large",loading:v,pagination:ft,rowKey:"id",itemLayout:"vertical",dataSource:o.comments,renderItem:function(s){return(0,t.jsxs)(D.ZP.Item,{children:[(0,t.jsx)(D.ZP.Item.Meta,{}),(0,t.jsx)(ct,{data:s})]},s.id)}})]})}),(0,t.jsx)(rt,{done:h,current:x,visible:M,onDone:Z,onCancel:z,onSubmit:Ct})]})},vt=(0,Q.$j)(function(d){var n=d.Current4Cert,a=d.loading;return{Current4Cert:n,loading:a.models.Current4Cert}})(V)}}]);
