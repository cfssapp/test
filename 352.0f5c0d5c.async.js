(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[352],{99165:function(X,x,e){"use strict";e.d(x,{Z:function(){return w}});var l=e(67294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},n=d,p=e(27029),D=function(A,ce){return l.createElement(p.Z,Object.assign({},A,{ref:ce,icon:n}))};D.displayName="CopyOutlined";var w=l.forwardRef(D)},8212:function(X,x,e){"use strict";e.d(x,{Z:function(){return w}});var l=e(67294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},n=d,p=e(27029),D=function(A,ce){return l.createElement(p.Z,Object.assign({},A,{ref:ce,icon:n}))};D.displayName="EditOutlined";var w=l.forwardRef(D)},7330:function(){},97432:function(){},37753:function(){},34719:function(){},5467:function(X,x,e){"use strict";e.d(x,{Z:function(){return l}});function l(d){return Object.keys(d).reduce(function(n,p){return(p.substr(0,5)==="data-"||p.substr(0,5)==="aria-"||p==="role")&&p.substr(0,7)!=="data-__"&&(n[p]=d[p]),n},{})}},76772:function(X,x,e){"use strict";e.d(x,{Z:function(){return pe}});var l=e(22122),d=e(96156),n=e(28481),p=e(67294),D=e(54549),w=e(15873),M=e(57119),A=e(68628),ce=e(73218),ye=e(38819),te=e(68855),oe=e(40847),f=e(43061),G=e(60444),K=e(94184),m=e.n(K),b=e(65632),be=e(5467),J=e(6610),L=e(5991),k=e(10379),h=e(44144),u=function(B){(0,k.Z)(P,B);var O=(0,h.Z)(P);function P(){var Z;return(0,J.Z)(this,P),Z=O.apply(this,arguments),Z.state={error:void 0,info:{componentStack:""}},Z}return(0,L.Z)(P,[{key:"componentDidCatch",value:function(C,V){this.setState({error:C,info:V})}},{key:"render",value:function(){var C=this.props,V=C.message,ie=C.description,j=C.children,me=this.state,de=me.error,W=me.info,U=W&&W.componentStack?W.componentStack:null,I=typeof V=="undefined"?(de||"").toString():V,Y=typeof ie=="undefined"?U:ie;return de?p.createElement(pe,{type:"error",message:I,description:p.createElement("pre",null,Y)}):j}}]),P}(p.Component),S=e(96159),c=function(B,O){var P={};for(var Z in B)Object.prototype.hasOwnProperty.call(B,Z)&&O.indexOf(Z)<0&&(P[Z]=B[Z]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,Z=Object.getOwnPropertySymbols(B);C<Z.length;C++)O.indexOf(Z[C])<0&&Object.prototype.propertyIsEnumerable.call(B,Z[C])&&(P[Z[C]]=B[Z[C]]);return P},g={success:ye.Z,info:oe.Z,error:f.Z,warning:te.Z},le={success:w.Z,info:A.Z,error:ce.Z,warning:M.Z},ne=function(O){var P,Z=O.description,C=O.prefixCls,V=O.message,ie=O.banner,j=O.className,me=j===void 0?"":j,de=O.style,W=O.onMouseEnter,U=O.onMouseLeave,I=O.onClick,Y=O.afterClose,Oe=O.showIcon,Le=O.closable,De=O.closeText,Pe=O.action,N=c(O,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),Ee=p.useState(!1),ue=(0,n.Z)(Ee,2),Me=ue[0],$e=ue[1],Se=p.useRef(),Ae=p.useContext(b.E_),Je=Ae.getPrefixCls,$=Ae.direction,Q=Je("alert",C),he=function(q){var Ne;$e(!0),(Ne=N.onClose)===null||Ne===void 0||Ne.call(N,q)},Qe=function(){var q=N.type;return q!==void 0?q:ie?"warning":"info"},Ke=De?!0:Le,He=Qe(),ze=function(){var q=N.icon,Ne=(Z?le:g)[He]||null;return q?(0,S.wm)(q,p.createElement("span",{className:"".concat(Q,"-icon")},q),function(){return{className:m()("".concat(Q,"-icon"),(0,d.Z)({},q.props.className,q.props.className))}}):p.createElement(Ne,{className:"".concat(Q,"-icon")})},Be=function(){return Ke?p.createElement("button",{type:"button",onClick:he,className:"".concat(Q,"-close-icon"),tabIndex:0},De?p.createElement("span",{className:"".concat(Q,"-close-text")},De):p.createElement(D.Z,null)):null},Ve=ie&&Oe===void 0?!0:Oe,ke=m()(Q,"".concat(Q,"-").concat(He),(P={},(0,d.Z)(P,"".concat(Q,"-with-description"),!!Z),(0,d.Z)(P,"".concat(Q,"-no-icon"),!Ve),(0,d.Z)(P,"".concat(Q,"-banner"),!!ie),(0,d.Z)(P,"".concat(Q,"-rtl"),$==="rtl"),P),me),Ye=(0,be.Z)(N);return p.createElement(G.Z,{visible:!Me,motionName:"".concat(Q,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(q){return{maxHeight:q.offsetHeight}},onLeaveEnd:Y},function(Te){var q=Te.className,Ne=Te.style;return p.createElement("div",(0,l.Z)({ref:Se,"data-show":!Me,className:m()(ke,q),style:(0,l.Z)((0,l.Z)({},de),Ne),onMouseEnter:W,onMouseLeave:U,onClick:I,role:"alert"},Ye),Ve?ze():null,p.createElement("div",{className:"".concat(Q,"-content")},p.createElement("div",{className:"".concat(Q,"-message")},V),p.createElement("div",{className:"".concat(Q,"-description")},Z)),Pe?p.createElement("div",{className:"".concat(Q,"-action")},Pe):null,Be())})};ne.ErrorBoundary=u;var pe=ne},17462:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(7330),p=e.n(n)},39144:function(X,x,e){"use strict";e.d(x,{Z:function(){return k}});var l=e(96156),d=e(22122),n=e(67294),p=e(94184),D=e.n(p),w=e(98423),M=e(65632),A=function(h,u){var S={};for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&u.indexOf(c)<0&&(S[c]=h[c]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,c=Object.getOwnPropertySymbols(h);g<c.length;g++)u.indexOf(c[g])<0&&Object.prototype.propertyIsEnumerable.call(h,c[g])&&(S[c[g]]=h[c[g]]);return S},ce=function(u){var S=u.prefixCls,c=u.className,g=u.hoverable,le=g===void 0?!0:g,ne=A(u,["prefixCls","className","hoverable"]);return n.createElement(M.C,null,function(pe){var B=pe.getPrefixCls,O=B("card",S),P=D()("".concat(O,"-grid"),c,(0,l.Z)({},"".concat(O,"-grid-hoverable"),le));return n.createElement("div",(0,d.Z)({},ne,{className:P}))})},ye=ce,te=function(h,u){var S={};for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&u.indexOf(c)<0&&(S[c]=h[c]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,c=Object.getOwnPropertySymbols(h);g<c.length;g++)u.indexOf(c[g])<0&&Object.prototype.propertyIsEnumerable.call(h,c[g])&&(S[c[g]]=h[c[g]]);return S},oe=function(u){return n.createElement(M.C,null,function(S){var c=S.getPrefixCls,g=u.prefixCls,le=u.className,ne=u.avatar,pe=u.title,B=u.description,O=te(u,["prefixCls","className","avatar","title","description"]),P=c("card",g),Z=D()("".concat(P,"-meta"),le),C=ne?n.createElement("div",{className:"".concat(P,"-meta-avatar")},ne):null,V=pe?n.createElement("div",{className:"".concat(P,"-meta-title")},pe):null,ie=B?n.createElement("div",{className:"".concat(P,"-meta-description")},B):null,j=V||ie?n.createElement("div",{className:"".concat(P,"-meta-detail")},V,ie):null;return n.createElement("div",(0,d.Z)({},O,{className:Z}),C,j)})},f=oe,G=e(41046),K=e(71230),m=e(15746),b=e(97647),be=function(h,u){var S={};for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&u.indexOf(c)<0&&(S[c]=h[c]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,c=Object.getOwnPropertySymbols(h);g<c.length;g++)u.indexOf(c[g])<0&&Object.prototype.propertyIsEnumerable.call(h,c[g])&&(S[c[g]]=h[c[g]]);return S};function J(h){var u=h.map(function(S,c){return n.createElement("li",{style:{width:"".concat(100/h.length,"%")},key:"action-".concat(c)},n.createElement("span",null,S))});return u}var L=function(u){var S,c,g=n.useContext(M.E_),le=g.getPrefixCls,ne=g.direction,pe=n.useContext(b.Z),B=function(Xe){var Ue;(Ue=u.onTabChange)===null||Ue===void 0||Ue.call(u,Xe)},O=function(){var Xe;return n.Children.forEach(u.children,function(Ue){Ue&&Ue.type&&Ue.type===ye&&(Xe=!0)}),Xe},P=u.prefixCls,Z=u.className,C=u.extra,V=u.headStyle,ie=V===void 0?{}:V,j=u.bodyStyle,me=j===void 0?{}:j,de=u.title,W=u.loading,U=u.bordered,I=U===void 0?!0:U,Y=u.size,Oe=u.type,Le=u.cover,De=u.actions,Pe=u.tabList,N=u.children,Ee=u.activeTabKey,ue=u.defaultActiveTabKey,Me=u.tabBarExtraContent,$e=u.hoverable,Se=u.tabProps,Ae=Se===void 0?{}:Se,Je=be(u,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),$=le("card",P),Q=me.padding===0||me.padding==="0px"?{padding:24}:void 0,he=n.createElement("div",{className:"".concat($,"-loading-block")}),Qe=n.createElement("div",{className:"".concat($,"-loading-content"),style:Q},n.createElement(K.Z,{gutter:8},n.createElement(m.Z,{span:22},he)),n.createElement(K.Z,{gutter:8},n.createElement(m.Z,{span:8},he),n.createElement(m.Z,{span:15},he)),n.createElement(K.Z,{gutter:8},n.createElement(m.Z,{span:6},he),n.createElement(m.Z,{span:18},he)),n.createElement(K.Z,{gutter:8},n.createElement(m.Z,{span:13},he),n.createElement(m.Z,{span:9},he)),n.createElement(K.Z,{gutter:8},n.createElement(m.Z,{span:4},he),n.createElement(m.Z,{span:3},he),n.createElement(m.Z,{span:16},he))),Ke=Ee!==void 0,He=(0,d.Z)((0,d.Z)({},Ae),(S={},(0,l.Z)(S,Ke?"activeKey":"defaultActiveKey",Ke?Ee:ue),(0,l.Z)(S,"tabBarExtraContent",Me),S)),ze,Be=Pe&&Pe.length?n.createElement(G.Z,(0,d.Z)({size:"large"},He,{className:"".concat($,"-head-tabs"),onChange:B}),Pe.map(function(Fe){return n.createElement(G.Z.TabPane,{tab:Fe.tab,disabled:Fe.disabled,key:Fe.key})})):null;(de||C||Be)&&(ze=n.createElement("div",{className:"".concat($,"-head"),style:ie},n.createElement("div",{className:"".concat($,"-head-wrapper")},de&&n.createElement("div",{className:"".concat($,"-head-title")},de),C&&n.createElement("div",{className:"".concat($,"-extra")},C)),Be));var Ve=Le?n.createElement("div",{className:"".concat($,"-cover")},Le):null,ke=n.createElement("div",{className:"".concat($,"-body"),style:me},W?Qe:N),Ye=De&&De.length?n.createElement("ul",{className:"".concat($,"-actions")},J(De)):null,Te=(0,w.Z)(Je,["onTabChange"]),q=Y||pe,Ne=D()($,(c={},(0,l.Z)(c,"".concat($,"-loading"),W),(0,l.Z)(c,"".concat($,"-bordered"),I),(0,l.Z)(c,"".concat($,"-hoverable"),$e),(0,l.Z)(c,"".concat($,"-contain-grid"),O()),(0,l.Z)(c,"".concat($,"-contain-tabs"),Pe&&Pe.length),(0,l.Z)(c,"".concat($,"-").concat(q),q),(0,l.Z)(c,"".concat($,"-type-").concat(Oe),!!Oe),(0,l.Z)(c,"".concat($,"-rtl"),ne==="rtl"),c),Z);return n.createElement("div",(0,d.Z)({},Te,{className:Ne}),ze,Ve,ke,Ye)};L.Grid=ye,L.Meta=f;var k=L},58024:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(97432),p=e.n(n),D=e(18106),w=e(13062),M=e(89032)},15746:function(X,x,e){"use strict";var l=e(21584);x.Z=l.Z},89032:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(6999)},99134:function(X,x,e){"use strict";var l=e(67294),d=(0,l.createContext)({});x.Z=d},21584:function(X,x,e){"use strict";var l=e(96156),d=e(22122),n=e(90484),p=e(67294),D=e(94184),w=e.n(D),M=e(99134),A=e(65632),ce=function(f,G){var K={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&G.indexOf(m)<0&&(K[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,m=Object.getOwnPropertySymbols(f);b<m.length;b++)G.indexOf(m[b])<0&&Object.prototype.propertyIsEnumerable.call(f,m[b])&&(K[m[b]]=f[m[b]]);return K};function ye(f){return typeof f=="number"?"".concat(f," ").concat(f," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(f)?"0 0 ".concat(f):f}var te=["xs","sm","md","lg","xl","xxl"],oe=p.forwardRef(function(f,G){var K,m=p.useContext(A.E_),b=m.getPrefixCls,be=m.direction,J=p.useContext(M.Z),L=J.gutter,k=J.wrap,h=J.supportFlexGap,u=f.prefixCls,S=f.span,c=f.order,g=f.offset,le=f.push,ne=f.pull,pe=f.className,B=f.children,O=f.flex,P=f.style,Z=ce(f,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=b("col",u),V={};te.forEach(function(W){var U,I={},Y=f[W];typeof Y=="number"?I.span=Y:(0,n.Z)(Y)==="object"&&(I=Y||{}),delete Z[W],V=(0,d.Z)((0,d.Z)({},V),(U={},(0,l.Z)(U,"".concat(C,"-").concat(W,"-").concat(I.span),I.span!==void 0),(0,l.Z)(U,"".concat(C,"-").concat(W,"-order-").concat(I.order),I.order||I.order===0),(0,l.Z)(U,"".concat(C,"-").concat(W,"-offset-").concat(I.offset),I.offset||I.offset===0),(0,l.Z)(U,"".concat(C,"-").concat(W,"-push-").concat(I.push),I.push||I.push===0),(0,l.Z)(U,"".concat(C,"-").concat(W,"-pull-").concat(I.pull),I.pull||I.pull===0),(0,l.Z)(U,"".concat(C,"-rtl"),be==="rtl"),U))});var ie=w()(C,(K={},(0,l.Z)(K,"".concat(C,"-").concat(S),S!==void 0),(0,l.Z)(K,"".concat(C,"-order-").concat(c),c),(0,l.Z)(K,"".concat(C,"-offset-").concat(g),g),(0,l.Z)(K,"".concat(C,"-push-").concat(le),le),(0,l.Z)(K,"".concat(C,"-pull-").concat(ne),ne),K),pe,V),j={};if(L&&L[0]>0){var me=L[0]/2;j.paddingLeft=me,j.paddingRight=me}if(L&&L[1]>0&&!h){var de=L[1]/2;j.paddingTop=de,j.paddingBottom=de}return O&&(j.flex=ye(O),O==="auto"&&k===!1&&!j.minWidth&&(j.minWidth=0)),p.createElement("div",(0,d.Z)({},Z,{style:(0,d.Z)((0,d.Z)({},j),P),className:ie,ref:G}),B)});oe.displayName="Col",x.Z=oe},92820:function(X,x,e){"use strict";var l=e(22122),d=e(96156),n=e(90484),p=e(28481),D=e(67294),w=e(94184),M=e.n(w),A=e(65632),ce=e(99134),ye=e(93355),te=e(24308),oe=e(98082),f=function(b,be){var J={};for(var L in b)Object.prototype.hasOwnProperty.call(b,L)&&be.indexOf(L)<0&&(J[L]=b[L]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,L=Object.getOwnPropertySymbols(b);k<L.length;k++)be.indexOf(L[k])<0&&Object.prototype.propertyIsEnumerable.call(b,L[k])&&(J[L[k]]=b[L[k]]);return J},G=(0,ye.b)("top","middle","bottom","stretch"),K=(0,ye.b)("start","end","center","space-around","space-between"),m=D.forwardRef(function(b,be){var J,L=b.prefixCls,k=b.justify,h=b.align,u=b.className,S=b.style,c=b.children,g=b.gutter,le=g===void 0?0:g,ne=b.wrap,pe=f(b,["prefixCls","justify","align","className","style","children","gutter","wrap"]),B=D.useContext(A.E_),O=B.getPrefixCls,P=B.direction,Z=D.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,p.Z)(Z,2),V=C[0],ie=C[1],j=(0,oe.Z)(),me=D.useRef(le);D.useEffect(function(){var N=te.ZP.subscribe(function(Ee){var ue=me.current||0;(!Array.isArray(ue)&&(0,n.Z)(ue)==="object"||Array.isArray(ue)&&((0,n.Z)(ue[0])==="object"||(0,n.Z)(ue[1])==="object"))&&ie(Ee)});return function(){return te.ZP.unsubscribe(N)}},[]);var de=function(){var Ee=[0,0],ue=Array.isArray(le)?le:[le,0];return ue.forEach(function(Me,$e){if((0,n.Z)(Me)==="object")for(var Se=0;Se<te.c4.length;Se++){var Ae=te.c4[Se];if(V[Ae]&&Me[Ae]!==void 0){Ee[$e]=Me[Ae];break}}else Ee[$e]=Me||0}),Ee},W=O("row",L),U=de(),I=M()(W,(J={},(0,d.Z)(J,"".concat(W,"-no-wrap"),ne===!1),(0,d.Z)(J,"".concat(W,"-").concat(k),k),(0,d.Z)(J,"".concat(W,"-").concat(h),h),(0,d.Z)(J,"".concat(W,"-rtl"),P==="rtl"),J),u),Y={},Oe=U[0]>0?U[0]/-2:void 0,Le=U[1]>0?U[1]/-2:void 0;if(Oe&&(Y.marginLeft=Oe,Y.marginRight=Oe),j){var De=(0,p.Z)(U,2);Y.rowGap=De[1]}else Le&&(Y.marginTop=Le,Y.marginBottom=Le);var Pe=D.useMemo(function(){return{gutter:U,wrap:ne,supportFlexGap:j}},[U,ne,j]);return D.createElement(ce.Z.Provider,{value:Pe},D.createElement("div",(0,l.Z)({},pe,{className:I,style:(0,l.Z)((0,l.Z)({},Y),S),ref:be}),c))});m.displayName="Row",x.Z=m},6999:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(37753),p=e.n(n)},71230:function(X,x,e){"use strict";var l=e(92820);x.Z=l.Z},13062:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(6999)},59289:function(X,x,e){"use strict";e.d(x,{Z:function(){return st}});var l=e(22122),d=e(96156),n=e(67294),p=e(94184),D=e.n(p),w=e(42550),M=e(65632),A=e(21687),ce=function(r,o){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i},ye=function(o,i){var t=o.prefixCls,a=o.component,s=a===void 0?"article":a,v=o.className,E=o["aria-label"],y=o.setContentRef,_=o.children,R=ce(o,["prefixCls","component","className","aria-label","setContentRef","children"]),T=i;return y&&((0,A.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),T=(0,w.sQ)(i,y)),n.createElement(M.C,null,function(H){var ae=H.getPrefixCls,Ze=H.direction,ge=s,re=ae("typography",t),Ie=D()(re,(0,d.Z)({},"".concat(re,"-rtl"),Ze==="rtl"),v);return n.createElement(ge,(0,l.Z)({className:Ie,"aria-label":E,ref:T},R),_)})},te=n.forwardRef(ye);te.displayName="Typography";var oe=te,f=oe,G=e(90484),K=e(98423),m=e(85061),b=e(6610),be=e(5991),J=e(10379),L=e(44144),k=e(50344),h=e(20640),u=e.n(h),S=e(8212),c=e(79508),g=e(99165),le=e(31739),ne=e(69224),pe=e(42051),B=e(34952),O=e(32637),P=e(31808),Z=e(69713),C=e(28481),V=e(15105),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},j=ie,me=e(27029),de=function(o,i){return n.createElement(me.Z,Object.assign({},o,{ref:i,icon:j}))};de.displayName="EnterOutlined";var W=n.forwardRef(de),U=e(68100),I=function(o){var i=o.prefixCls,t=o["aria-label"],a=o.className,s=o.style,v=o.direction,E=o.maxLength,y=o.autoSize,_=y===void 0?!0:y,R=o.value,T=o.onSave,H=o.onCancel,ae=o.onEnd,Ze=n.useRef(),ge=n.useRef(!1),re=n.useRef(),Ie=n.useState(R),je=(0,C.Z)(Ie,2),Ce=je[0],Ge=je[1];n.useEffect(function(){Ge(R)},[R]),n.useEffect(function(){if(Ze.current&&Ze.current.resizableTextArea){var ee=Ze.current.resizableTextArea.textArea;ee.focus();var se=ee.value.length;ee.setSelectionRange(se,se)}},[]);var z=function(se){var ve=se.target;Ge(ve.value.replace(/[\n\r]/g,""))},F=function(){ge.current=!0},xe=function(){ge.current=!1},fe=function(se){var ve=se.keyCode;ge.current||(re.current=ve)},_e=function(){T(Ce.trim())},We=function(se){var ve=se.keyCode,et=se.ctrlKey,tt=se.altKey,nt=se.metaKey,at=se.shiftKey;re.current===ve&&!ge.current&&!et&&!tt&&!nt&&!at&&(ve===V.Z.ENTER?(_e(),ae==null||ae()):ve===V.Z.ESC&&H())},Re=function(){_e()},we=D()(i,"".concat(i,"-edit-content"),(0,d.Z)({},"".concat(i,"-rtl"),v==="rtl"),a);return n.createElement("div",{className:we,style:s},n.createElement(U.Z,{ref:Ze,maxLength:E,value:Ce,onChange:z,onKeyDown:fe,onKeyUp:We,onCompositionStart:F,onCompositionEnd:xe,onBlur:Re,"aria-label":t,autoSize:_}),n.createElement(W,{className:"".concat(i,"-edit-content-confirm")}))},Y=I,Oe=e(73935),Le=1,De=3,Pe=8,N,Ee={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function ue(r){if(!r)return 0;var o=r.match(/^\d*(\.\d*)?/);return o?Number(o[0]):0}function Me(r){var o=Array.prototype.slice.apply(r);return o.map(function(i){return"".concat(i,": ").concat(r.getPropertyValue(i),";")}).join("")}function $e(r){var o=[];return r.forEach(function(i){var t=o[o.length-1];typeof i=="string"&&typeof t=="string"?o[o.length-1]+=i:o.push(i)}),o}function Se(r,o){r.setAttribute("aria-hidden","true");var i=window.getComputedStyle(o),t=Me(i);r.setAttribute("style",t),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function Ae(r){var o=document.createElement("div");Se(o,r),o.appendChild(document.createTextNode("text")),document.body.appendChild(o);var i=o.offsetHeight,t=ue(window.getComputedStyle(r).lineHeight);return document.body.removeChild(o),i>t?i:t}var Je=function(r,o,i,t,a){N||(N=document.createElement("div"),N.setAttribute("aria-hidden","true")),N.parentNode||document.body.appendChild(N);var s=o.rows,v=o.suffix,E=v===void 0?"":v,y=window.getComputedStyle(r),_=Ae(r),R=Math.floor(_)*(s+1)+ue(y.paddingTop)+ue(y.paddingBottom);Se(N,r);var T=$e((0,k.Z)(i));(0,Oe.render)(n.createElement("div",{style:Ee},n.createElement("span",{style:Ee},T,E),n.createElement("span",{style:Ee},t)),N);function H(){return Math.ceil(N.getBoundingClientRect().height)<R}if(H())return(0,Oe.unmountComponentAtNode)(N),{content:i,text:N.innerHTML,ellipsis:!1};var ae=Array.prototype.slice.apply(N.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(z){var F=z.nodeType;return F!==Pe}),Ze=Array.prototype.slice.apply(N.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,Oe.unmountComponentAtNode)(N);var ge=[];N.innerHTML="";var re=document.createElement("span");N.appendChild(re);var Ie=document.createTextNode(a+E);re.appendChild(Ie),Ze.forEach(function(z){N.appendChild(z)});function je(z){re.insertBefore(z,Ie)}function Ce(z,F){var xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,fe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:F.length,_e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,We=Math.floor((xe+fe)/2),Re=F.slice(0,We);if(z.textContent=Re,xe>=fe-1)for(var we=fe;we>=xe;we-=1){var ee=F.slice(0,we);if(z.textContent=ee,H()||!ee)return we===F.length?{finished:!1,reactNode:F}:{finished:!0,reactNode:ee}}return H()?Ce(z,F,We,fe,We):Ce(z,F,xe,We,_e)}function Ge(z,F){var xe=z.nodeType;if(xe===Le)return je(z),H()?{finished:!1,reactNode:T[F]}:(re.removeChild(z),{finished:!0,reactNode:null});if(xe===De){var fe=z.textContent||"",_e=document.createTextNode(fe);return je(_e),Ce(_e,fe)}return{finished:!1,reactNode:null}}return ae.some(function(z,F){var xe=Ge(z,F),fe=xe.finished,_e=xe.reactNode;return _e&&ge.push(_e),fe}),{content:ge,text:N.innerHTML,ellipsis:!0}},$=function(r,o){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i},Q=(0,P.GL)("webkitLineClamp"),he=(0,P.GL)("textOverflow");function Qe(r,o){var i=r.mark,t=r.code,a=r.underline,s=r.delete,v=r.strong,E=r.keyboard,y=r.italic,_=o;function R(T,H){!T||(_=n.createElement(H,{},_))}return R(v,"strong"),R(a,"u"),R(s,"del"),R(t,"code"),R(i,"mark"),R(E,"kbd"),R(y,"i"),_}function Ke(r,o,i){return r===!0||r===void 0?o:r||i&&o}var He="...",ze=function(r){(0,J.Z)(i,r);var o=(0,L.Z)(i);function i(){var t;return(0,b.Z)(this,i),t=o.apply(this,arguments),t.contentRef=n.createRef(),t.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},t.getPrefixCls=function(){var a=t.props.prefixCls,s=t.context.getPrefixCls;return s("typography",a)},t.onExpandClick=function(a){var s,v=t.getEllipsis(),E=v.onExpand;t.setState({expanded:!0}),(s=E)===null||s===void 0||s(a)},t.onEditClick=function(a){a.preventDefault(),t.triggerEdit(!0)},t.onEditChange=function(a){var s=t.getEditable(),v=s.onChange;v==null||v(a),t.triggerEdit(!1)},t.onEditCancel=function(){var a,s;(s=(a=t.getEditable()).onCancel)===null||s===void 0||s.call(a),t.triggerEdit(!1)},t.onCopyClick=function(a){a.preventDefault();var s=t.props,v=s.children,E=s.copyable,y=(0,l.Z)({},(0,G.Z)(E)==="object"?E:null);y.text===void 0&&(y.text=String(v)),u()(y.text||""),t.setState({copied:!0},function(){y.onCopy&&y.onCopy(),t.copyId=window.setTimeout(function(){t.setState({copied:!1})},3e3)})},t.setEditRef=function(a){t.editIcon=a},t.triggerEdit=function(a){var s=t.getEditable(),v=s.onStart;a&&v&&v(),t.setState({edit:a},function(){!a&&t.editIcon&&t.editIcon.focus()})},t.resizeOnNextFrame=function(){O.Z.cancel(t.rafId),t.rafId=(0,O.Z)(function(){t.syncEllipsis()})},t}return(0,be.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(a){var s=this.props.children,v=this.getEllipsis(),E=this.getEllipsis(a);(s!==a.children||v.rows!==E.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),O.Z.cancel(this.rafId)}},{key:"getEditable",value:function(a){var s=this.state.edit,v=a||this.props,E=v.editable;return E?(0,l.Z)({editing:s},(0,G.Z)(E)==="object"?E:null):{editing:s}}},{key:"getEllipsis",value:function(a){var s=a||this.props,v=s.ellipsis;return v?(0,l.Z)({rows:1,expandable:!1},(0,G.Z)(v)==="object"?v:null):{}}},{key:"canUseCSSEllipsis",value:function(){var a=this.state.clientRendered,s=this.props,v=s.editable,E=s.copyable,y=this.getEllipsis(),_=y.rows,R=y.expandable,T=y.suffix,H=y.onEllipsis,ae=y.tooltip;return T||ae||v||E||R||!a||H?!1:_===1?he:Q}},{key:"syncEllipsis",value:function(){var a=this.state,s=a.ellipsisText,v=a.isEllipsis,E=a.expanded,y=this.getEllipsis(),_=y.rows,R=y.suffix,T=y.onEllipsis,H=this.props.children;if(!(!_||_<0||!this.contentRef.current||E)&&!this.canUseCSSEllipsis()){(0,A.Z)((0,k.Z)(H).every(function(Ie){return typeof Ie=="string"}),"Typography","`ellipsis` should use string as children only.");var ae=Je(this.contentRef.current,{rows:_,suffix:R},H,this.renderOperations(!0),He),Ze=ae.content,ge=ae.text,re=ae.ellipsis;(s!==ge||v!==re)&&(this.setState({ellipsisText:ge,ellipsisContent:Ze,isEllipsis:re}),v!==re&&T&&T(re))}}},{key:"renderExpand",value:function(a){var s=this.getEllipsis(),v=s.expandable,E=s.symbol,y=this.state,_=y.expanded,R=y.isEllipsis;if(!v||!a&&(_||!R))return null;var T;return E?T=E:T=this.expandStr,n.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},T)}},{key:"renderEdit",value:function(){var a=this.props.editable;if(!!a){var s=a.icon,v=a.tooltip,E=(0,k.Z)(v)[0]||this.editStr,y=typeof E=="string"?E:"";return n.createElement(Z.Z,{key:"edit",title:v===!1?"":E},n.createElement(B.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":y},s||n.createElement(S.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var a=this.state.copied,s=this.props.copyable;if(!!s){var v=this.getPrefixCls(),E=s.tooltips,y=s.icon,_=Array.isArray(E)?E:[E],R=Array.isArray(y)?y:[y],T=a?Ke(_[1],this.copiedStr):Ke(_[0],this.copyStr),H=a?this.copiedStr:this.copyStr,ae=typeof T=="string"?T:H;return n.createElement(Z.Z,{key:"copy",title:T},n.createElement(B.Z,{className:D()("".concat(v,"-copy"),a&&"".concat(v,"-copy-success")),onClick:this.onCopyClick,"aria-label":ae},a?Ke(R[1],n.createElement(c.Z,null),!0):Ke(R[0],n.createElement(g.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var a=this.props,s=a.children,v=a.className,E=a.style,y=this.context.direction,_=this.getEditable(),R=_.maxLength,T=_.autoSize,H=_.onEnd;return n.createElement(Y,{value:typeof s=="string"?s:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:H,prefixCls:this.getPrefixCls(),className:v,style:E,direction:y,maxLength:R,autoSize:T})}},{key:"renderOperations",value:function(a){return[this.renderExpand(a),this.renderEdit(),this.renderCopy()].filter(function(s){return s})}},{key:"renderContent",value:function(){var a=this,s=this.state,v=s.ellipsisContent,E=s.isEllipsis,y=s.expanded,_=this.props,R=_.component,T=_.children,H=_.className,ae=_.type,Ze=_.disabled,ge=_.style,re=$(_,["component","children","className","type","disabled","style"]),Ie=this.context.direction,je=this.getEllipsis(),Ce=je.rows,Ge=je.suffix,z=je.tooltip,F=this.getPrefixCls(),xe=(0,K.Z)(re,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,m.Z)(ne.nf))),fe=this.canUseCSSEllipsis(),_e=Ce===1&&fe,We=Ce&&Ce>1&&fe,Re=T;if(Ce&&E&&!y&&!fe){var we=re.title,ee=we||"";!we&&(typeof T=="string"||typeof T=="number")&&(ee=String(T)),ee=ee.slice(String(v||"").length),Re=n.createElement(n.Fragment,null,v,n.createElement("span",{title:ee,"aria-hidden":"true"},He),Ge),z&&(Re=n.createElement(Z.Z,{title:z===!0?T:z},n.createElement("span",null,Re)))}else Re=n.createElement(n.Fragment,null,T,Ge);return Re=Qe(this.props,Re),n.createElement(pe.Z,{componentName:"Text"},function(se){var ve,et=se.edit,tt=se.copy,nt=se.copied,at=se.expand;return a.editStr=et,a.copyStr=tt,a.copiedStr=nt,a.expandStr=at,n.createElement(le.Z,{onResize:a.resizeOnNextFrame,disabled:fe},n.createElement(f,(0,l.Z)({className:D()((ve={},(0,d.Z)(ve,"".concat(F,"-").concat(ae),ae),(0,d.Z)(ve,"".concat(F,"-disabled"),Ze),(0,d.Z)(ve,"".concat(F,"-ellipsis"),Ce),(0,d.Z)(ve,"".concat(F,"-single-line"),Ce===1),(0,d.Z)(ve,"".concat(F,"-ellipsis-single-line"),_e),(0,d.Z)(ve,"".concat(F,"-ellipsis-multiple-line"),We),ve),H),style:(0,l.Z)((0,l.Z)({},ge),{WebkitLineClamp:We?Ce:void 0}),component:R,ref:a.contentRef,direction:Ie},xe),Re,a.renderOperations()))})}},{key:"render",value:function(){var a=this.getEditable(),s=a.editing;return s?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(a){var s=a.children,v=a.editable;return(0,A.Z)(!v||typeof s=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(n.Component);ze.contextType=M.E_,ze.defaultProps={children:""};var Be=ze,Ve=function(r,o){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i},ke=function(o){var i=o.ellipsis,t=Ve(o,["ellipsis"]),a=n.useMemo(function(){return i&&(0,G.Z)(i)==="object"?(0,K.Z)(i,["expandable","rows"]):i},[i]);return(0,A.Z)((0,G.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),n.createElement(Be,(0,l.Z)({},t,{ellipsis:a,component:"span"}))},Ye=ke,Te=function(r,o){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i},q=function(o,i){var t=o.ellipsis,a=o.rel,s=Te(o,["ellipsis","rel"]);(0,A.Z)((0,G.Z)(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var v=n.useRef(null);n.useImperativeHandle(i,function(){var y;return(y=v.current)===null||y===void 0?void 0:y.contentRef.current});var E=(0,l.Z)((0,l.Z)({},s),{rel:a===void 0&&s.target==="_blank"?"noopener noreferrer":a});return delete E.navigate,n.createElement(Be,(0,l.Z)({},E,{ref:v,ellipsis:!!t,component:"a"}))},Ne=n.forwardRef(q),Fe=e(93355),Xe=function(r,o){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i},Ue=(0,Fe.a)(1,2,3,4,5),rt=function(o){var i=o.level,t=i===void 0?1:i,a=Xe(o,["level"]),s;return Ue.indexOf(t)!==-1?s="h".concat(t):((0,A.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),s="h1"),n.createElement(Be,(0,l.Z)({},a,{component:s}))},ot=rt,lt=function(o){return n.createElement(Be,(0,l.Z)({},o,{component:"div"}))},it=lt,qe=f;qe.Text=Ye,qe.Link=Ne,qe.Title=ot,qe.Paragraph=it;var st=qe},402:function(X,x,e){"use strict";var l=e(43673),d=e.n(l),n=e(34719),p=e.n(n),D=e(22385),w=e(47673)},20640:function(X,x,e){"use strict";var l=e(11742),d={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function p(w){var M=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return w.replace(/#{\s*key\s*}/g,M)}function D(w,M){var A,ce,ye,te,oe,f,G=!1;M||(M={}),A=M.debug||!1;try{ye=l(),te=document.createRange(),oe=document.getSelection(),f=document.createElement("span"),f.textContent=w,f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(m){if(m.stopPropagation(),M.format)if(m.preventDefault(),typeof m.clipboardData=="undefined"){A&&console.warn("unable to use e.clipboardData"),A&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=d[M.format]||d.default;window.clipboardData.setData(b,w)}else m.clipboardData.clearData(),m.clipboardData.setData(M.format,w);M.onCopy&&(m.preventDefault(),M.onCopy(m.clipboardData))}),document.body.appendChild(f),te.selectNodeContents(f),oe.addRange(te);var K=document.execCommand("copy");if(!K)throw new Error("copy command was unsuccessful");G=!0}catch(m){A&&console.error("unable to copy using execCommand: ",m),A&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(M.format||"text",w),M.onCopy&&M.onCopy(window.clipboardData),G=!0}catch(b){A&&console.error("unable to copy using clipboardData: ",b),A&&console.error("falling back to prompt"),ce=p("message"in M?M.message:n),window.prompt(ce,w)}}finally{oe&&(typeof oe.removeRange=="function"?oe.removeRange(te):oe.removeAllRanges()),f&&document.body.removeChild(f),ye()}return G}X.exports=D},11742:function(X){X.exports=function(){var x=document.getSelection();if(!x.rangeCount)return function(){};for(var e=document.activeElement,l=[],d=0;d<x.rangeCount;d++)l.push(x.getRangeAt(d));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return x.removeAllRanges(),function(){x.type==="Caret"&&x.removeAllRanges(),x.rangeCount||l.forEach(function(n){x.addRange(n)}),e&&e.focus()}}}}]);
