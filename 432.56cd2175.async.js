(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[432],{8212:function(q,N,t){"use strict";t.d(N,{Z:function(){return H}});var u=t(67294),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=p,O=t(27029),W=function(K,fe){return u.createElement(O.Z,Object.assign({},K,{ref:fe,icon:a}))};W.displayName="EditOutlined";var H=u.forwardRef(W)},97432:function(){},34719:function(){},76772:function(q,N,t){"use strict";t.d(N,{Z:function(){return le}});var u=t(22122),p=t(96156),a=t(28481),O=t(67294),W=t(54549),H=t(15873),Z=t(57119),K=t(68628),fe=t(73218),Ee=t(38819),ie=t(68855),te=t(40847),D=t(43061),V=t(60444),ne=t(94184),S=t.n(ne),ge=t(65632),Ge=t(5467),Ve=t(6610),Ie=t(5991),Ae=t(10379),m=t(54070),c=function(j){(0,Ae.Z)(C,j);var E=(0,m.Z)(C);function C(){var x;return(0,Ve.Z)(this,C),x=E.apply(this,arguments),x.state={error:void 0,info:{componentStack:""}},x}return(0,Ie.Z)(C,[{key:"componentDidCatch",value:function(R,X){this.setState({error:R,info:X})}},{key:"render",value:function(){var R=this.props,X=R.message,ee=R.description,se=R.children,pe=this.state,ce=pe.error,me=pe.info,De=me&&me.componentStack?me.componentStack:null,Ke=typeof X=="undefined"?(ce||"").toString():X,je=typeof ee=="undefined"?De:ee;return ce?O.createElement(le,{type:"error",message:Ke,description:O.createElement("pre",null,je)}):se}}]),C}(O.Component),P=t(96159),s=function(j,E){var C={};for(var x in j)Object.prototype.hasOwnProperty.call(j,x)&&E.indexOf(x)<0&&(C[x]=j[x]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,x=Object.getOwnPropertySymbols(j);R<x.length;R++)E.indexOf(x[R])<0&&Object.prototype.propertyIsEnumerable.call(j,x[R])&&(C[x[R]]=j[x[R]]);return C},y={success:Ee.Z,info:te.Z,error:D.Z,warning:ie.Z},Ce={success:H.Z,info:K.Z,error:fe.Z,warning:Z.Z},oe=function(E){var C,x=E.description,R=E.prefixCls,X=E.message,ee=E.banner,se=E.className,pe=se===void 0?"":se,ce=E.style,me=E.onMouseEnter,De=E.onMouseLeave,Ke=E.onClick,je=E.afterClose,xe=E.showIcon,$e=E.closable,be=E.closeText,ye=E.action,T=s(E,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),Le=O.useState(!1),Me=(0,a.Z)(Le,2),We=Me[0],Xe=Me[1],Be=O.useRef(),He=O.useContext(ge.E_),Qe=He.getPrefixCls,L=He.direction,B=Qe("alert",R),Q=function(w){var ue;Xe(!0),(ue=T.onClose)===null||ue===void 0||ue.call(T,w)},Je=function(){var w=T.type;return w!==void 0?w:ee?"warning":"info"},Oe=be?!0:$e,we=Je(),Re=function(){var w=T.icon,ue=(x?Ce:y)[we]||null;return w?(0,P.wm)(w,O.createElement("span",{className:"".concat(B,"-icon")},w),function(){return{className:S()("".concat(B,"-icon"),(0,p.Z)({},w.props.className,w.props.className))}}):O.createElement(ue,{className:"".concat(B,"-icon")})},Ze=function(){return Oe?O.createElement("button",{type:"button",onClick:Q,className:"".concat(B,"-close-icon"),tabIndex:0},be?O.createElement("span",{className:"".concat(B,"-close-text")},be):O.createElement(W.Z,null)):null},ke=ee&&xe===void 0?!0:xe,Ye=S()(B,"".concat(B,"-").concat(we),(C={},(0,p.Z)(C,"".concat(B,"-with-description"),!!x),(0,p.Z)(C,"".concat(B,"-no-icon"),!ke),(0,p.Z)(C,"".concat(B,"-banner"),!!ee),(0,p.Z)(C,"".concat(B,"-rtl"),L==="rtl"),C),pe),_e=(0,Ge.Z)(T);return O.createElement(V.Z,{visible:!We,motionName:"".concat(B,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(w){return{maxHeight:w.offsetHeight}},onLeaveEnd:je},function(de){var w=de.className,ue=de.style;return O.createElement("div",(0,u.Z)({ref:Be,"data-show":!We,className:S()(Ye,w),style:(0,u.Z)((0,u.Z)({},ce),ue),onMouseEnter:me,onMouseLeave:De,onClick:Ke,role:"alert"},_e),ke?Re():null,O.createElement("div",{className:"".concat(B,"-content")},O.createElement("div",{className:"".concat(B,"-message")},X),O.createElement("div",{className:"".concat(B,"-description")},x)),ye?O.createElement("div",{className:"".concat(B,"-action")},ye):null,Ze())})};oe.ErrorBoundary=c;var le=oe},39144:function(q,N,t){"use strict";t.d(N,{Z:function(){return Ae}});var u=t(96156),p=t(22122),a=t(67294),O=t(94184),W=t.n(O),H=t(98423),Z=t(65632),K=function(m,c){var P={};for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&c.indexOf(s)<0&&(P[s]=m[s]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,s=Object.getOwnPropertySymbols(m);y<s.length;y++)c.indexOf(s[y])<0&&Object.prototype.propertyIsEnumerable.call(m,s[y])&&(P[s[y]]=m[s[y]]);return P},fe=function(c){var P=c.prefixCls,s=c.className,y=c.hoverable,Ce=y===void 0?!0:y,oe=K(c,["prefixCls","className","hoverable"]);return a.createElement(Z.C,null,function(le){var j=le.getPrefixCls,E=j("card",P),C=W()("".concat(E,"-grid"),s,(0,u.Z)({},"".concat(E,"-grid-hoverable"),Ce));return a.createElement("div",(0,p.Z)({},oe,{className:C}))})},Ee=fe,ie=function(m,c){var P={};for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&c.indexOf(s)<0&&(P[s]=m[s]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,s=Object.getOwnPropertySymbols(m);y<s.length;y++)c.indexOf(s[y])<0&&Object.prototype.propertyIsEnumerable.call(m,s[y])&&(P[s[y]]=m[s[y]]);return P},te=function(c){return a.createElement(Z.C,null,function(P){var s=P.getPrefixCls,y=c.prefixCls,Ce=c.className,oe=c.avatar,le=c.title,j=c.description,E=ie(c,["prefixCls","className","avatar","title","description"]),C=s("card",y),x=W()("".concat(C,"-meta"),Ce),R=oe?a.createElement("div",{className:"".concat(C,"-meta-avatar")},oe):null,X=le?a.createElement("div",{className:"".concat(C,"-meta-title")},le):null,ee=j?a.createElement("div",{className:"".concat(C,"-meta-description")},j):null,se=X||ee?a.createElement("div",{className:"".concat(C,"-meta-detail")},X,ee):null;return a.createElement("div",(0,p.Z)({},E,{className:x}),R,se)})},D=te,V=t(41046),ne=t(71230),S=t(15746),ge=t(97647),Ge=function(m,c){var P={};for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&c.indexOf(s)<0&&(P[s]=m[s]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,s=Object.getOwnPropertySymbols(m);y<s.length;y++)c.indexOf(s[y])<0&&Object.prototype.propertyIsEnumerable.call(m,s[y])&&(P[s[y]]=m[s[y]]);return P};function Ve(m){var c=m.map(function(P,s){return a.createElement("li",{style:{width:"".concat(100/m.length,"%")},key:"action-".concat(s)},a.createElement("span",null,P))});return c}var Ie=function(c){var P,s,y=a.useContext(Z.E_),Ce=y.getPrefixCls,oe=y.direction,le=a.useContext(ge.Z),j=function(Fe){var Se;(Se=c.onTabChange)===null||Se===void 0||Se.call(c,Fe)},E=function(){var Fe;return a.Children.forEach(c.children,function(Se){Se&&Se.type&&Se.type===Ee&&(Fe=!0)}),Fe},C=c.prefixCls,x=c.className,R=c.extra,X=c.headStyle,ee=X===void 0?{}:X,se=c.bodyStyle,pe=se===void 0?{}:se,ce=c.title,me=c.loading,De=c.bordered,Ke=De===void 0?!0:De,je=c.size,xe=c.type,$e=c.cover,be=c.actions,ye=c.tabList,T=c.children,Le=c.activeTabKey,Me=c.defaultActiveTabKey,We=c.tabBarExtraContent,Xe=c.hoverable,Be=c.tabProps,He=Be===void 0?{}:Be,Qe=Ge(c,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=Ce("card",C),B=pe.padding===0||pe.padding==="0px"?{padding:24}:void 0,Q=a.createElement("div",{className:"".concat(L,"-loading-block")}),Je=a.createElement("div",{className:"".concat(L,"-loading-content"),style:B},a.createElement(ne.Z,{gutter:8},a.createElement(S.Z,{span:22},Q)),a.createElement(ne.Z,{gutter:8},a.createElement(S.Z,{span:8},Q),a.createElement(S.Z,{span:15},Q)),a.createElement(ne.Z,{gutter:8},a.createElement(S.Z,{span:6},Q),a.createElement(S.Z,{span:18},Q)),a.createElement(ne.Z,{gutter:8},a.createElement(S.Z,{span:13},Q),a.createElement(S.Z,{span:9},Q)),a.createElement(ne.Z,{gutter:8},a.createElement(S.Z,{span:4},Q),a.createElement(S.Z,{span:3},Q),a.createElement(S.Z,{span:16},Q))),Oe=Le!==void 0,we=(0,p.Z)((0,p.Z)({},He),(P={},(0,u.Z)(P,Oe?"activeKey":"defaultActiveKey",Oe?Le:Me),(0,u.Z)(P,"tabBarExtraContent",We),P)),Re,Ze=ye&&ye.length?a.createElement(V.Z,(0,p.Z)({size:"large"},we,{className:"".concat(L,"-head-tabs"),onChange:j}),ye.map(function(Ue){return a.createElement(V.Z.TabPane,{tab:Ue.tab,disabled:Ue.disabled,key:Ue.key})})):null;(ce||R||Ze)&&(Re=a.createElement("div",{className:"".concat(L,"-head"),style:ee},a.createElement("div",{className:"".concat(L,"-head-wrapper")},ce&&a.createElement("div",{className:"".concat(L,"-head-title")},ce),R&&a.createElement("div",{className:"".concat(L,"-extra")},R)),Ze));var ke=$e?a.createElement("div",{className:"".concat(L,"-cover")},$e):null,Ye=a.createElement("div",{className:"".concat(L,"-body"),style:pe},me?Je:T),_e=be&&be.length?a.createElement("ul",{className:"".concat(L,"-actions")},Ve(be)):null,de=(0,H.Z)(Qe,["onTabChange"]),w=je||le,ue=W()(L,(s={},(0,u.Z)(s,"".concat(L,"-loading"),me),(0,u.Z)(s,"".concat(L,"-bordered"),Ke),(0,u.Z)(s,"".concat(L,"-hoverable"),Xe),(0,u.Z)(s,"".concat(L,"-contain-grid"),E()),(0,u.Z)(s,"".concat(L,"-contain-tabs"),ye&&ye.length),(0,u.Z)(s,"".concat(L,"-").concat(w),w),(0,u.Z)(s,"".concat(L,"-type-").concat(xe),!!xe),(0,u.Z)(s,"".concat(L,"-rtl"),oe==="rtl"),s),x);return a.createElement("div",(0,p.Z)({},de,{className:ue}),Re,ke,Ye,_e)};Ie.Grid=Ee,Ie.Meta=D;var Ae=Ie},58024:function(q,N,t){"use strict";var u=t(43673),p=t.n(u),a=t(97432),O=t.n(a),W=t(18106),H=t(13062),Z=t(89032)},15746:function(q,N,t){"use strict";var u=t(21584);N.Z=u.Z},89032:function(q,N,t){"use strict";var u=t(43673),p=t.n(u),a=t(6999)},71230:function(q,N,t){"use strict";var u=t(92820);N.Z=u.Z},13062:function(q,N,t){"use strict";var u=t(43673),p=t.n(u),a=t(6999)},59289:function(q,N,t){"use strict";t.d(N,{Z:function(){return st}});var u=t(22122),p=t(96156),a=t(67294),O=t(94184),W=t.n(O),H=t(42550),Z=t(65632),K=t(21687),fe=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(o[e[n]]=r[e[n]]);return o},Ee=function(i,o){var e=i.prefixCls,n=i.component,l=n===void 0?"article":n,d=i.className,f=i["aria-label"],v=i.setContentRef,h=i.children,b=fe(i,["prefixCls","component","className","aria-label","setContentRef","children"]),g=o;return v&&((0,K.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),g=(0,H.sQ)(o,v)),a.createElement(Z.C,null,function(I){var z=I.getPrefixCls,ae=I.direction,J=l,$=z("typography",e),he=W()($,(0,p.Z)({},"".concat($,"-rtl"),ae==="rtl"),d);return a.createElement(J,(0,u.Z)({className:he,"aria-label":f,ref:g},b),h)})},ie=a.forwardRef(Ee);ie.displayName="Typography";var te=ie,D=te,V=t(90484),ne=t(98423),S=t(85061),ge=t(6610),Ge=t(5991),Ve=t(10379),Ie=t(54070),Ae=t(50344),m=t(20640),c=t.n(m),P=t(8212),s=t(79508),y=t(99165),Ce=t(31739),oe=t(69224),le=t(42051),j=t(34952),E=t(32637),C=t(31808),x=t(69713),R=t(28481),X=t(15105),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},se=ee,pe=t(27029),ce=function(i,o){return a.createElement(pe.Z,Object.assign({},i,{ref:o,icon:se}))};ce.displayName="EnterOutlined";var me=a.forwardRef(ce),De=t(68100),Ke=function(i){var o=i.prefixCls,e=i["aria-label"],n=i.className,l=i.style,d=i.direction,f=i.maxLength,v=i.autoSize,h=v===void 0?!0:v,b=i.value,g=i.onSave,I=i.onCancel,z=i.onEnd,ae=a.useRef(),J=a.useRef(!1),$=a.useRef(),he=a.useState(b),Pe=(0,R.Z)(he,2),Y=Pe[0],ze=Pe[1];a.useEffect(function(){ze(b)},[b]),a.useEffect(function(){if(ae.current&&ae.current.resizableTextArea){var U=ae.current.resizableTextArea.textArea;U.focus();var k=U.value.length;U.setSelectionRange(k,k)}},[]);var M=function(k){var G=k.target;ze(G.value.replace(/[\n\r]/g,""))},A=function(){J.current=!0},_=function(){J.current=!1},F=function(k){var G=k.keyCode;J.current||($.current=G)},re=function(){g(Y.trim())},Ne=function(k){var G=k.keyCode,et=k.ctrlKey,tt=k.altKey,nt=k.metaKey,at=k.shiftKey;$.current===G&&!J.current&&!et&&!tt&&!nt&&!at&&(G===X.Z.ENTER?(re(),z==null||z()):G===X.Z.ESC&&I())},ve=function(){re()},Te=W()(o,"".concat(o,"-edit-content"),(0,p.Z)({},"".concat(o,"-rtl"),d==="rtl"),n);return a.createElement("div",{className:Te,style:l},a.createElement(De.Z,{ref:ae,maxLength:f,value:Y,onChange:M,onKeyDown:F,onKeyUp:Ne,onCompositionStart:A,onCompositionEnd:_,onBlur:ve,"aria-label":e,autoSize:h}),a.createElement(me,{className:"".concat(o,"-edit-content-confirm")}))},je=Ke,xe=t(73935),$e=1,be=3,ye=8,T,Le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Me(r){if(!r)return 0;var i=r.match(/^\d*(\.\d*)?/);return i?Number(i[0]):0}function We(r){var i=Array.prototype.slice.apply(r);return i.map(function(o){return"".concat(o,": ").concat(r.getPropertyValue(o),";")}).join("")}function Xe(r){var i=[];return r.forEach(function(o){var e=i[i.length-1];typeof o=="string"&&typeof e=="string"?i[i.length-1]+=o:i.push(o)}),i}function Be(r,i){r.setAttribute("aria-hidden","true");var o=window.getComputedStyle(i),e=We(o);r.setAttribute("style",e),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function He(r){var i=document.createElement("div");Be(i,r),i.appendChild(document.createTextNode("text")),document.body.appendChild(i);var o=i.offsetHeight,e=Me(window.getComputedStyle(r).lineHeight);return document.body.removeChild(i),o>e?o:e}var Qe=function(r,i,o,e,n){T||(T=document.createElement("div"),T.setAttribute("aria-hidden","true")),T.parentNode||document.body.appendChild(T);var l=i.rows,d=i.suffix,f=d===void 0?"":d,v=window.getComputedStyle(r),h=He(r),b=Math.floor(h)*(l+1)+Me(v.paddingTop)+Me(v.paddingBottom);Be(T,r);var g=Xe((0,Ae.Z)(o));(0,xe.render)(a.createElement("div",{style:Le},a.createElement("span",{style:Le},g,f),a.createElement("span",{style:Le},e)),T);function I(){return Math.ceil(T.getBoundingClientRect().height)<b}if(I())return(0,xe.unmountComponentAtNode)(T),{content:o,text:T.innerHTML,ellipsis:!1};var z=Array.prototype.slice.apply(T.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(M){var A=M.nodeType;return A!==ye}),ae=Array.prototype.slice.apply(T.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,xe.unmountComponentAtNode)(T);var J=[];T.innerHTML="";var $=document.createElement("span");T.appendChild($);var he=document.createTextNode(n+f);$.appendChild(he),ae.forEach(function(M){T.appendChild(M)});function Pe(M){$.insertBefore(M,he)}function Y(M,A){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:A.length,re=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Ne=Math.floor((_+F)/2),ve=A.slice(0,Ne);if(M.textContent=ve,_>=F-1)for(var Te=F;Te>=_;Te-=1){var U=A.slice(0,Te);if(M.textContent=U,I()||!U)return Te===A.length?{finished:!1,reactNode:A}:{finished:!0,reactNode:U}}return I()?Y(M,A,Ne,F,Ne):Y(M,A,_,Ne,re)}function ze(M,A){var _=M.nodeType;if(_===$e)return Pe(M),I()?{finished:!1,reactNode:g[A]}:($.removeChild(M),{finished:!0,reactNode:null});if(_===be){var F=M.textContent||"",re=document.createTextNode(F);return Pe(re),Y(re,F)}return{finished:!1,reactNode:null}}return z.some(function(M,A){var _=ze(M,A),F=_.finished,re=_.reactNode;return re&&J.push(re),F}),{content:J,text:T.innerHTML,ellipsis:!0}},L=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(o[e[n]]=r[e[n]]);return o},B=(0,C.GL)("webkitLineClamp"),Q=(0,C.GL)("textOverflow");function Je(r,i){var o=r.mark,e=r.code,n=r.underline,l=r.delete,d=r.strong,f=r.keyboard,v=r.italic,h=i;function b(g,I){!g||(h=a.createElement(I,{},h))}return b(d,"strong"),b(n,"u"),b(l,"del"),b(e,"code"),b(o,"mark"),b(f,"kbd"),b(v,"i"),h}function Oe(r,i,o){return r===!0||r===void 0?i:r||o&&i}var we="...",Re=function(r){(0,Ve.Z)(o,r);var i=(0,Ie.Z)(o);function o(){var e;return(0,ge.Z)(this,o),e=i.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var n=e.props.prefixCls,l=e.context.getPrefixCls;return l("typography",n)},e.onExpandClick=function(n){var l,d=e.getEllipsis(),f=d.onExpand;e.setState({expanded:!0}),(l=f)===null||l===void 0||l(n)},e.onEditClick=function(n){n.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(n){var l=e.getEditable(),d=l.onChange;d==null||d(n),e.triggerEdit(!1)},e.onEditCancel=function(){var n,l;(l=(n=e.getEditable()).onCancel)===null||l===void 0||l.call(n),e.triggerEdit(!1)},e.onCopyClick=function(n){n.preventDefault();var l=e.props,d=l.children,f=l.copyable,v=(0,u.Z)({},(0,V.Z)(f)==="object"?f:null);v.text===void 0&&(v.text=String(d)),c()(v.text||""),e.setState({copied:!0},function(){v.onCopy&&v.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(n){e.editIcon=n},e.triggerEdit=function(n){var l=e.getEditable(),d=l.onStart;n&&d&&d(),e.setState({edit:n},function(){!n&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){E.Z.cancel(e.rafId),e.rafId=(0,E.Z)(function(){e.syncEllipsis()})},e}return(0,Ge.Z)(o,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(n){var l=this.props.children,d=this.getEllipsis(),f=this.getEllipsis(n);(l!==n.children||d.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),E.Z.cancel(this.rafId)}},{key:"getEditable",value:function(n){var l=this.state.edit,d=n||this.props,f=d.editable;return f?(0,u.Z)({editing:l},(0,V.Z)(f)==="object"?f:null):{editing:l}}},{key:"getEllipsis",value:function(n){var l=n||this.props,d=l.ellipsis;return d?(0,u.Z)({rows:1,expandable:!1},(0,V.Z)(d)==="object"?d:null):{}}},{key:"canUseCSSEllipsis",value:function(){var n=this.state.clientRendered,l=this.props,d=l.editable,f=l.copyable,v=this.getEllipsis(),h=v.rows,b=v.expandable,g=v.suffix,I=v.onEllipsis,z=v.tooltip;return g||z||d||f||b||!n||I?!1:h===1?Q:B}},{key:"syncEllipsis",value:function(){var n=this.state,l=n.ellipsisText,d=n.isEllipsis,f=n.expanded,v=this.getEllipsis(),h=v.rows,b=v.suffix,g=v.onEllipsis,I=this.props.children;if(!(!h||h<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){(0,K.Z)((0,Ae.Z)(I).every(function(he){return typeof he=="string"}),"Typography","`ellipsis` should use string as children only.");var z=Qe(this.contentRef.current,{rows:h,suffix:b},I,this.renderOperations(!0),we),ae=z.content,J=z.text,$=z.ellipsis;(l!==J||d!==$)&&(this.setState({ellipsisText:J,ellipsisContent:ae,isEllipsis:$}),d!==$&&g&&g($))}}},{key:"renderExpand",value:function(n){var l=this.getEllipsis(),d=l.expandable,f=l.symbol,v=this.state,h=v.expanded,b=v.isEllipsis;if(!d||!n&&(h||!b))return null;var g;return f?g=f:g=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},g)}},{key:"renderEdit",value:function(){var n=this.props.editable;if(!!n){var l=n.icon,d=n.tooltip,f=(0,Ae.Z)(d)[0]||this.editStr,v=typeof f=="string"?f:"";return a.createElement(x.Z,{key:"edit",title:d===!1?"":f},a.createElement(j.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":v},l||a.createElement(P.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var n=this.state.copied,l=this.props.copyable;if(!!l){var d=this.getPrefixCls(),f=l.tooltips,v=l.icon,h=Array.isArray(f)?f:[f],b=Array.isArray(v)?v:[v],g=n?Oe(h[1],this.copiedStr):Oe(h[0],this.copyStr),I=n?this.copiedStr:this.copyStr,z=typeof g=="string"?g:I;return a.createElement(x.Z,{key:"copy",title:g},a.createElement(j.Z,{className:W()("".concat(d,"-copy"),n&&"".concat(d,"-copy-success")),onClick:this.onCopyClick,"aria-label":z},n?Oe(b[1],a.createElement(s.Z,null),!0):Oe(b[0],a.createElement(y.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var n=this.props,l=n.children,d=n.className,f=n.style,v=this.context.direction,h=this.getEditable(),b=h.maxLength,g=h.autoSize,I=h.onEnd;return a.createElement(je,{value:typeof l=="string"?l:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:I,prefixCls:this.getPrefixCls(),className:d,style:f,direction:v,maxLength:b,autoSize:g})}},{key:"renderOperations",value:function(n){return[this.renderExpand(n),this.renderEdit(),this.renderCopy()].filter(function(l){return l})}},{key:"renderContent",value:function(){var n=this,l=this.state,d=l.ellipsisContent,f=l.isEllipsis,v=l.expanded,h=this.props,b=h.component,g=h.children,I=h.className,z=h.type,ae=h.disabled,J=h.style,$=L(h,["component","children","className","type","disabled","style"]),he=this.context.direction,Pe=this.getEllipsis(),Y=Pe.rows,ze=Pe.suffix,M=Pe.tooltip,A=this.getPrefixCls(),_=(0,ne.Z)($,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,S.Z)(oe.nf))),F=this.canUseCSSEllipsis(),re=Y===1&&F,Ne=Y&&Y>1&&F,ve=g;if(Y&&f&&!v&&!F){var Te=$.title,U=Te||"";!Te&&(typeof g=="string"||typeof g=="number")&&(U=String(g)),U=U.slice(String(d||"").length),ve=a.createElement(a.Fragment,null,d,a.createElement("span",{title:U,"aria-hidden":"true"},we),ze),M&&(ve=a.createElement(x.Z,{title:M===!0?g:M},a.createElement("span",null,ve)))}else ve=a.createElement(a.Fragment,null,g,ze);return ve=Je(this.props,ve),a.createElement(le.Z,{componentName:"Text"},function(k){var G,et=k.edit,tt=k.copy,nt=k.copied,at=k.expand;return n.editStr=et,n.copyStr=tt,n.copiedStr=nt,n.expandStr=at,a.createElement(Ce.Z,{onResize:n.resizeOnNextFrame,disabled:F},a.createElement(D,(0,u.Z)({className:W()((G={},(0,p.Z)(G,"".concat(A,"-").concat(z),z),(0,p.Z)(G,"".concat(A,"-disabled"),ae),(0,p.Z)(G,"".concat(A,"-ellipsis"),Y),(0,p.Z)(G,"".concat(A,"-single-line"),Y===1),(0,p.Z)(G,"".concat(A,"-ellipsis-single-line"),re),(0,p.Z)(G,"".concat(A,"-ellipsis-multiple-line"),Ne),G),I),style:(0,u.Z)((0,u.Z)({},J),{WebkitLineClamp:Ne?Y:void 0}),component:b,ref:n.contentRef,direction:he},_),ve,n.renderOperations()))})}},{key:"render",value:function(){var n=this.getEditable(),l=n.editing;return l?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(n){var l=n.children,d=n.editable;return(0,K.Z)(!d||typeof l=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),o}(a.Component);Re.contextType=Z.E_,Re.defaultProps={children:""};var Ze=Re,ke=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(o[e[n]]=r[e[n]]);return o},Ye=function(i){var o=i.ellipsis,e=ke(i,["ellipsis"]),n=a.useMemo(function(){return o&&(0,V.Z)(o)==="object"?(0,ne.Z)(o,["expandable","rows"]):o},[o]);return(0,K.Z)((0,V.Z)(o)!=="object"||!o||!("expandable"in o)&&!("rows"in o),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(Ze,(0,u.Z)({},e,{ellipsis:n,component:"span"}))},_e=Ye,de=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(o[e[n]]=r[e[n]]);return o},w=function(i,o){var e=i.ellipsis,n=i.rel,l=de(i,["ellipsis","rel"]);(0,K.Z)((0,V.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var d=a.useRef(null);a.useImperativeHandle(o,function(){var v;return(v=d.current)===null||v===void 0?void 0:v.contentRef.current});var f=(0,u.Z)((0,u.Z)({},l),{rel:n===void 0&&l.target==="_blank"?"noopener noreferrer":n});return delete f.navigate,a.createElement(Ze,(0,u.Z)({},f,{ref:d,ellipsis:!!e,component:"a"}))},ue=a.forwardRef(w),Ue=t(93355),Fe=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(o[e[n]]=r[e[n]]);return o},Se=(0,Ue.a)(1,2,3,4,5),rt=function(i){var o=i.level,e=o===void 0?1:o,n=Fe(i,["level"]),l;return Se.indexOf(e)!==-1?l="h".concat(e):((0,K.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),l="h1"),a.createElement(Ze,(0,u.Z)({},n,{component:l}))},it=rt,ot=function(i){return a.createElement(Ze,(0,u.Z)({},i,{component:"div"}))},lt=ot,qe=D;qe.Text=_e,qe.Link=ue,qe.Title=it,qe.Paragraph=lt;var st=qe},402:function(q,N,t){"use strict";var u=t(43673),p=t.n(u),a=t(34719),O=t.n(a),W=t(22385),H=t(47673)},20640:function(q,N,t){"use strict";var u=t(11742),p={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function O(H){var Z=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return H.replace(/#{\s*key\s*}/g,Z)}function W(H,Z){var K,fe,Ee,ie,te,D,V=!1;Z||(Z={}),K=Z.debug||!1;try{Ee=u(),ie=document.createRange(),te=document.getSelection(),D=document.createElement("span"),D.textContent=H,D.style.all="unset",D.style.position="fixed",D.style.top=0,D.style.clip="rect(0, 0, 0, 0)",D.style.whiteSpace="pre",D.style.webkitUserSelect="text",D.style.MozUserSelect="text",D.style.msUserSelect="text",D.style.userSelect="text",D.addEventListener("copy",function(S){if(S.stopPropagation(),Z.format)if(S.preventDefault(),typeof S.clipboardData=="undefined"){K&&console.warn("unable to use e.clipboardData"),K&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ge=p[Z.format]||p.default;window.clipboardData.setData(ge,H)}else S.clipboardData.clearData(),S.clipboardData.setData(Z.format,H);Z.onCopy&&(S.preventDefault(),Z.onCopy(S.clipboardData))}),document.body.appendChild(D),ie.selectNodeContents(D),te.addRange(ie);var ne=document.execCommand("copy");if(!ne)throw new Error("copy command was unsuccessful");V=!0}catch(S){K&&console.error("unable to copy using execCommand: ",S),K&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(Z.format||"text",H),Z.onCopy&&Z.onCopy(window.clipboardData),V=!0}catch(ge){K&&console.error("unable to copy using clipboardData: ",ge),K&&console.error("falling back to prompt"),fe=O("message"in Z?Z.message:a),window.prompt(fe,H)}}finally{te&&(typeof te.removeRange=="function"?te.removeRange(ie):te.removeAllRanges()),D&&document.body.removeChild(D),Ee()}return V}q.exports=W},11742:function(q){q.exports=function(){var N=document.getSelection();if(!N.rangeCount)return function(){};for(var t=document.activeElement,u=[],p=0;p<N.rangeCount;p++)u.push(N.getRangeAt(p));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return N.removeAllRanges(),function(){N.type==="Caret"&&N.removeAllRanges(),N.rangeCount||u.forEach(function(a){N.addRange(a)}),t&&t.focus()}}}}]);
