(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[633],{12044:function(oe,T,l){"use strict";var E=l(34155),C=typeof E!="undefined"&&E.versions!=null&&E.versions.node!=null,_=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&!C};T.Z=_},1917:function(){},25084:function(oe,T,l){"use strict";l.d(T,{Z:function(){return $e}});var E=l(96156),C=l(22122),_=l(28481),c=l(67294),Z=l(81253),S=l(6610),$=l(5991),x=l(10379),w=l(54070),m=l(96633),Y=l(28991),R=l(63349),se=l(94184),ie=l.n(se),le=l(74204),K=l(15105),h=l(98423);function H(o){return Array.isArray(o)?o:[o]}var b={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},P=Object.keys(b).filter(function(o){if(typeof document=="undefined")return!1;var v=document.getElementsByTagName("html")[0];return o in(v?v.style:{})})[0],F=b[P];function W(o,v,i,d){o.addEventListener?o.addEventListener(v,i,d):o.attachEvent&&o.attachEvent("on".concat(v),i)}function J(o,v,i,d){o.removeEventListener?o.removeEventListener(v,i,d):o.attachEvent&&o.detachEvent("on".concat(v),i)}function re(o,v){var i=typeof o=="function"?o(v):o;return Array.isArray(i)?i.length===2?i:[i[0],i[1]]:[i]}var G=function(v){return!isNaN(parseFloat(v))&&isFinite(v)},Q=!(typeof window!="undefined"&&window.document&&window.document.createElement),ce=function o(v,i,d,e){if(!i||i===document||i instanceof Document)return!1;if(i===v.parentNode)return!0;var n=Math.max(Math.abs(d),Math.abs(e))===Math.abs(e),t=Math.max(Math.abs(d),Math.abs(e))===Math.abs(d),a=i.scrollHeight-i.clientHeight,r=i.scrollWidth-i.clientWidth,s=document.defaultView.getComputedStyle(i),f=s.overflowY==="auto"||s.overflowY==="scroll",u=s.overflowX==="auto"||s.overflowX==="scroll",p=a&&f,g=r&&u;return n&&(!p||p&&(i.scrollTop>=a&&e<0||i.scrollTop<=0&&e>0))||t&&(!g||g&&(i.scrollLeft>=r&&d<0||i.scrollLeft<=0&&d>0))?o(v,i.parentNode,d,e):!1},z={},We=function(o){(0,x.Z)(i,o);var v=(0,w.Z)(i);function i(d){var e;return(0,S.Z)(this,i),e=v.call(this,d),e.domFocus=function(){e.dom&&e.dom.focus()},e.removeStartHandler=function(n){n.touches.length>1||(e.startPos={x:n.touches[0].clientX,y:n.touches[0].clientY})},e.removeMoveHandler=function(n){if(!(n.changedTouches.length>1)){var t=n.currentTarget,a=n.changedTouches[0].clientX-e.startPos.x,r=n.changedTouches[0].clientY-e.startPos.y;(t===e.maskDom||t===e.handlerDom||t===e.contentDom&&ce(t,n.target,a,r))&&n.cancelable&&n.preventDefault()}},e.transitionEnd=function(n){var t=n.target;J(t,F,e.transitionEnd),t.style.transition=""},e.onKeyDown=function(n){if(n.keyCode===K.Z.ESC){var t=e.props.onClose;n.stopPropagation(),t&&t(n)}},e.onWrapperTransitionEnd=function(n){var t=e.props,a=t.open,r=t.afterVisibleChange;n.target===e.contentWrapper&&n.propertyName.match(/transform$/)&&(e.dom.style.transition="",!a&&e.getCurrentDrawerSome()&&(document.body.style.overflowX="",e.maskDom&&(e.maskDom.style.left="",e.maskDom.style.width="")),r&&r(!!a))},e.openLevelTransition=function(){var n=e.props,t=n.open,a=n.width,r=n.height,s=e.getHorizontalBoolAndPlacementName(),f=s.isHorizontal,u=s.placementName,p=e.contentDom?e.contentDom.getBoundingClientRect()[f?"width":"height"]:0,g=(f?a:r)||p;e.setLevelAndScrolling(t,u,g)},e.setLevelTransform=function(n,t,a,r){var s=e.props,f=s.placement,u=s.levelMove,p=s.duration,g=s.ease,y=s.showMask;e.levelDom.forEach(function(D){D.style.transition="transform ".concat(p," ").concat(g),W(D,F,e.transitionEnd);var M=n?a:0;if(u){var V=re(u,{target:D,open:n});M=n?V[0]:V[1]||0}var q=typeof M=="number"?"".concat(M,"px"):M,N=f==="left"||f==="top"?q:"-".concat(q);N=y&&f==="right"&&r?"calc(".concat(N," + ").concat(r,"px)"):N,D.style.transform=M?"".concat(t,"(").concat(N,")"):""})},e.setLevelAndScrolling=function(n,t,a){var r=e.props.onChange;if(!Q){var s=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?(0,le.Z)(!0):0;e.setLevelTransform(n,t,a,s),e.toggleScrollingToDrawerAndBody(s)}r&&r(n)},e.toggleScrollingToDrawerAndBody=function(n){var t=e.props,a=t.getContainer,r=t.showMask,s=t.open,f=a&&a();if(f&&f.parentNode===document.body&&r){var u=["touchstart"],p=[document.body,e.maskDom,e.handlerDom,e.contentDom];s&&document.body.style.overflow!=="hidden"?(n&&e.addScrollingEffect(n),document.body.style.touchAction="none",p.forEach(function(g,y){!g||W(g,u[y]||"touchmove",y?e.removeMoveHandler:e.removeStartHandler,e.passive)})):e.getCurrentDrawerSome()&&(document.body.style.touchAction="",n&&e.remScrollingEffect(n),p.forEach(function(g,y){!g||J(g,u[y]||"touchmove",y?e.removeMoveHandler:e.removeStartHandler,e.passive)}))}},e.addScrollingEffect=function(n){var t=e.props,a=t.placement,r=t.duration,s=t.ease,f="width ".concat(r," ").concat(s),u="transform ".concat(r," ").concat(s);switch(e.dom.style.transition="none",a){case"right":e.dom.style.transform="translateX(-".concat(n,"px)");break;case"top":case"bottom":e.dom.style.width="calc(100% - ".concat(n,"px)"),e.dom.style.transform="translateZ(0)";break;default:break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(u,",").concat(f),e.dom.style.width="",e.dom.style.transform="")})},e.remScrollingEffect=function(n){var t=e.props,a=t.placement,r=t.duration,s=t.ease;P&&(document.body.style.overflowX="hidden"),e.dom.style.transition="none";var f,u="width ".concat(r," ").concat(s),p="transform ".concat(r," ").concat(s);switch(a){case"left":{e.dom.style.width="100%",u="width 0s ".concat(s," ").concat(r);break}case"right":{e.dom.style.transform="translateX(".concat(n,"px)"),e.dom.style.width="100%",u="width 0s ".concat(s," ").concat(r),e.maskDom&&(e.maskDom.style.left="-".concat(n,"px"),e.maskDom.style.width="calc(100% + ".concat(n,"px)"));break}case"top":case"bottom":{e.dom.style.width="calc(100% + ".concat(n,"px)"),e.dom.style.height="100%",e.dom.style.transform="translateZ(0)",f="height 0s ".concat(s," ").concat(r);break}default:break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(p,",").concat(f?"".concat(f,","):"").concat(u),e.dom.style.transform="",e.dom.style.width="",e.dom.style.height="")})},e.getCurrentDrawerSome=function(){return!Object.keys(z).some(function(n){return z[n]})},e.getLevelDom=function(n){var t=n.level,a=n.getContainer;if(!Q){var r=a&&a(),s=r?r.parentNode:null;if(e.levelDom=[],t==="all"){var f=s?Array.prototype.slice.call(s.children):[];f.forEach(function(u){u.nodeName!=="SCRIPT"&&u.nodeName!=="STYLE"&&u.nodeName!=="LINK"&&u!==r&&e.levelDom.push(u)})}else t&&H(t).forEach(function(u){document.querySelectorAll(u).forEach(function(p){e.levelDom.push(p)})})}},e.getHorizontalBoolAndPlacementName=function(){var n=e.props.placement,t=n==="left"||n==="right",a="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:a}},e.state={_self:(0,R.Z)(e)},e}return(0,$.Z)(i,[{key:"componentDidMount",value:function(){var e=this;if(!Q){var n=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return n=!0,null}}))}catch(p){}this.passive=n?{passive:!1}:!1}var t=this.props,a=t.open,r=t.getContainer,s=t.showMask,f=r&&r();if(this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),this.getLevelDom(this.props),a&&(f&&f.parentNode===document.body&&(z[this.drawerId]=a),this.openLevelTransition(),this.forceUpdate(function(){e.domFocus()}),s)){var u;(u=this.props.scrollLocker)===null||u===void 0||u.lock()}}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.open,a=n.getContainer,r=n.scrollLocker,s=n.showMask,f=a&&a();t!==e.open&&(f&&f.parentNode===document.body&&(z[this.drawerId]=!!t),this.openLevelTransition(),t?(this.domFocus(),s&&(r==null||r.lock())):r==null||r.unLock())}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.open,t=e.scrollLocker;delete z[this.drawerId],n&&(this.setLevelTransform(!1),document.body.style.touchAction=""),t==null||t.unLock()}},{key:"render",value:function(){var e,n=this,t=this.props,a=t.className,r=t.children,s=t.style,f=t.width,u=t.height,p=t.defaultOpen,g=t.open,y=t.prefixCls,D=t.placement,M=t.level,V=t.levelMove,q=t.ease,N=t.duration,ve=t.getContainer,ee=t.handler,Ne=t.onChange,_e=t.afterVisibleChange,k=t.showMask,me=t.maskClosable,he=t.maskStyle,L=t.onClose,ae=t.onHandleClick,pe=t.keyboard,xe=t.getOpenCount,Te=t.scrollLocker,te=t.contentWrapperStyle,ye=(0,Z.Z)(t,["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"]),B=this.dom?g:!1,de=ie()(y,(e={},(0,E.Z)(e,"".concat(y,"-").concat(D),!0),(0,E.Z)(e,"".concat(y,"-open"),B),(0,E.Z)(e,a||"",!!a),(0,E.Z)(e,"no-mask",!k),e)),Ce=this.getHorizontalBoolAndPlacementName(),ge=Ce.placementName,Ee=D==="left"||D==="top"?"-100%":"100%",fe=B?"":"".concat(ge,"(").concat(Ee,")"),ue=ee&&c.cloneElement(ee,{onClick:function(O){ee.props.onClick&&ee.props.onClick(),ae&&ae(O)},ref:function(O){n.handlerDom=O}});return c.createElement("div",(0,C.Z)({},(0,h.Z)(ye,["switchScrollingEffect"]),{tabIndex:-1,className:de,style:s,ref:function(O){n.dom=O},onKeyDown:B&&pe?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),k&&c.createElement("div",{className:"".concat(y,"-mask"),onClick:me?L:void 0,style:he,ref:function(O){n.maskDom=O}}),c.createElement("div",{className:"".concat(y,"-content-wrapper"),style:(0,Y.Z)({transform:fe,msTransform:fe,width:G(f)?"".concat(f,"px"):f,height:G(u)?"".concat(u,"px"):u},te),ref:function(O){n.contentWrapper=O}},c.createElement("div",{className:"".concat(y,"-content"),ref:function(O){n.contentDom=O},onTouchStart:B&&k?this.removeStartHandler:void 0,onTouchMove:B&&k?this.removeMoveHandler:void 0},r),ue))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.prevProps,a=n._self,r={prevProps:e};if(t!==void 0){var s=e.placement,f=e.level;s!==t.placement&&(a.contentDom=null),f!==t.level&&a.getLevelDom(e)}return r}}]),i}(c.Component),De=We,ke=function(o){(0,x.Z)(i,o);var v=(0,w.Z)(i);function i(d){var e;(0,S.Z)(this,i),e=v.call(this,d),e.onHandleClick=function(t){var a=e.props,r=a.onHandleClick,s=a.open;if(r&&r(t),typeof s=="undefined"){var f=e.state.open;e.setState({open:!f})}},e.onClose=function(t){var a=e.props,r=a.onClose,s=a.open;r&&r(t),typeof s=="undefined"&&e.setState({open:!1})};var n=typeof d.open!="undefined"?d.open:!!d.defaultOpen;return e.state={open:n},"onMaskClick"in d&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),e}return(0,$.Z)(i,[{key:"render",value:function(){var e=this,n=this.props,t=n.defaultOpen,a=n.getContainer,r=n.wrapperClassName,s=n.forceRender,f=n.handler,u=(0,Z.Z)(n,["defaultOpen","getContainer","wrapperClassName","forceRender","handler"]),p=this.state.open;if(!a)return c.createElement("div",{className:r,ref:function(D){e.dom=D}},c.createElement(De,(0,C.Z)({},u,{open:p,handler:f,getContainer:function(){return e.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})));var g=!!f||s;return c.createElement(m.Z,{visible:p,forceRender:g,getContainer:a,wrapperClassName:r},function(y){var D=y.visible,M=y.afterClose,V=(0,Z.Z)(y,["visible","afterClose"]);return c.createElement(De,(0,C.Z)({},u,V,{open:D!==void 0?D:p,afterVisibleChange:M!==void 0?M:u.afterVisibleChange,handler:f,onClose:e.onClose,onHandleClick:e.onHandleClick}))})}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=n.prevProps,a={prevProps:e};return typeof t!="undefined"&&e.open!==t.open&&(a.open=e.open),a}}]),i}(c.Component);ke.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:c.createElement("div",{className:"drawer-handle"},c.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1};var Le=ke,He=Le,Ie=l(54549),Ae=l(65632),ze=l(93355),Be=l(57838),Ue=function(o,v){var i={};for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&v.indexOf(d)<0&&(i[d]=o[d]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,d=Object.getOwnPropertySymbols(o);e<d.length;e++)v.indexOf(d[e])<0&&Object.prototype.propertyIsEnumerable.call(o,d[e])&&(i[d[e]]=o[d[e]]);return i},Oe=c.createContext(null),qe=(0,ze.b)("top","right","bottom","left"),Pe={distance:180},Se=c.forwardRef(function(o,v){var i=o.width,d=i===void 0?256:i,e=o.height,n=e===void 0?256:e,t=o.closable,a=t===void 0?!0:t,r=o.placement,s=r===void 0?"right":r,f=o.maskClosable,u=f===void 0?!0:f,p=o.mask,g=p===void 0?!0:p,y=o.level,D=y===void 0?null:y,M=o.keyboard,V=M===void 0?!0:M,q=o.push,N=q===void 0?Pe:q,ve=o.closeIcon,ee=ve===void 0?c.createElement(Ie.Z,null):ve,Ne=o.bodyStyle,_e=o.drawerStyle,k=o.prefixCls,me=o.className,he=o.direction,L=o.visible,ae=o.children,pe=o.zIndex,xe=o.destroyOnClose,Te=o.style,te=o.title,ye=o.headerStyle,B=o.onClose,de=o.footer,Ce=o.footerStyle,ge=Ue(o,["width","height","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle"]),Ee=(0,Be.Z)(),fe=c.useState(!1),ue=(0,_.Z)(fe,2),j=ue[0],O=ue[1],X=c.useContext(Oe),be=c.useRef(!1);c.useEffect(function(){return L&&X&&X.push(),function(){X&&X.pull()}},[]),c.useEffect(function(){X&&(L?X.push():X.pull())},[L]);var we=c.useMemo(function(){return{push:function(){N&&O(!0)},pull:function(){N&&O(!1)}}},[N]);c.useImperativeHandle(v,function(){return we},[we]);var Ze=xe&&!L,Ke=function(){!Ze||L||(be.current=!0,Ee())},Re=function(){if(!L&&!g)return{};var A={};return s==="left"||s==="right"?A.width=d:A.height=n,A},Fe=function(){var A=function(ne){var U;if(typeof N=="boolean"?U=N?Pe.distance:0:U=N.distance,U=parseFloat(String(U||0)),ne==="left"||ne==="right")return"translateX(".concat(ne==="left"?U:-U,"px)");if(ne==="top"||ne==="bottom")return"translateY(".concat(ne==="top"?U:-U,"px)")},Qe=g?{}:Re();return(0,C.Z)((0,C.Z)({zIndex:pe,transform:j?A(s):void 0},Qe),Te)};function Ve(){return a&&c.createElement("button",{type:"button",onClick:B,"aria-label":"Close",className:"".concat(k,"-close"),style:{"--scroll-bar":"".concat((0,le.Z)(),"px")}},ee)}function je(){if(!te&&!a)return null;var I=te?"".concat(k,"-header"):"".concat(k,"-header-no-title");return c.createElement("div",{className:I,style:ye},te&&c.createElement("div",{className:"".concat(k,"-title")},te),a&&Ve())}function Xe(){if(!de)return null;var I="".concat(k,"-footer");return c.createElement("div",{className:I,style:Ce},de)}var Ye=function(){if(be.current&&!L)return null;be.current=!1;var A={};return Ze&&(A.opacity=0,A.transition="opacity .3s"),c.createElement("div",{className:"".concat(k,"-wrapper-body"),style:(0,C.Z)((0,C.Z)({},A),_e),onTransitionEnd:Ke},je(),c.createElement("div",{className:"".concat(k,"-body"),style:Ne},ae),Xe())},Je=ie()((0,E.Z)({"no-mask":!g},"".concat(k,"-rtl"),he==="rtl"),me),Ge=g?Re():{};return c.createElement(Oe.Provider,{value:we},c.createElement(He,(0,C.Z)({handler:!1},(0,C.Z)({placement:s,prefixCls:k,maskClosable:u,level:D,keyboard:V,children:ae,onClose:B},ge),Ge,{open:L,showMask:g,style:Fe(),className:Je}),Ye()))});Se.displayName="Drawer";var Me=c.forwardRef(function(o,v){var i=o.prefixCls,d=o.getContainer,e=c.useContext(Ae.E_),n=e.getPopupContainer,t=e.getPrefixCls,a=e.direction,r=t("drawer",i),s=d===void 0&&n?function(){return n(document.body)}:d;return c.createElement(Se,(0,C.Z)({},o,{ref:v,prefixCls:r,getContainer:s,direction:a}))});Me.displayName="DrawerWrapper";var $e=Me},57338:function(oe,T,l){"use strict";var E=l(43673),C=l.n(E),_=l(1917),c=l.n(_)},4084:function(oe,T,l){"use strict";var E=l(28991),C=l(6610),_=l(5991),c=l(10379),Z=l(54070),S=l(67294),$=l(34203),x=l(50344),w=l(80334),m=l(42550),Y=l(91033),R="rc-observer-key",se=function(ie){(0,c.Z)(K,ie);var le=(0,Z.Z)(K);function K(){var h;return(0,C.Z)(this,K),h=le.apply(this,arguments),h.resizeObserver=null,h.childNode=null,h.currentElement=null,h.state={width:0,height:0,offsetHeight:0,offsetWidth:0},h.onResize=function(H){var b=h.props.onResize,P=H[0].target,F=P.getBoundingClientRect(),W=F.width,J=F.height,re=P.offsetWidth,G=P.offsetHeight,Q=Math.floor(W),ce=Math.floor(J);if(h.state.width!==Q||h.state.height!==ce||h.state.offsetWidth!==re||h.state.offsetHeight!==G){var z={width:Q,height:ce,offsetWidth:re,offsetHeight:G};h.setState(z),b&&Promise.resolve().then(function(){b((0,E.Z)((0,E.Z)({},z),{},{offsetWidth:re,offsetHeight:G}))})}},h.setChildNode=function(H){h.childNode=H},h}return(0,_.Z)(K,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){var H=this.props.disabled;if(H){this.destroyObserver();return}var b=(0,$.Z)(this.childNode||this),P=b!==this.currentElement;P&&(this.destroyObserver(),this.currentElement=b),!this.resizeObserver&&b&&(this.resizeObserver=new Y.Z(this.onResize),this.resizeObserver.observe(b))}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var H=this.props.children,b=(0,x.Z)(H);if(b.length>1)(0,w.ZP)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(b.length===0)return(0,w.ZP)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var P=b[0];if(S.isValidElement(P)&&(0,m.Yr)(P)){var F=P.ref;b[0]=S.cloneElement(P,{ref:(0,m.sQ)(F,this.setChildNode)})}return b.length===1?b[0]:b.map(function(W,J){return!S.isValidElement(W)||"key"in W&&W.key!==null?W:S.cloneElement(W,{key:"".concat(R,"-").concat(J)})})}}]),K}(S.Component);se.displayName="ResizeObserver",T.Z=se},57186:function(oe,T,l){"use strict";l.d(T,{f:function(){return C}});var E=l(67294);function C(c){var Z=E.createContext(null);function S(x){var w=c(x.initialState);return E.createElement(Z.Provider,{value:w},x.children)}function $(){var x=E.useContext(Z);if(x===null)throw new Error("Component must be wrapped with <Container.Provider>");return x}return{Provider:S,useContainer:$}}function _(c){return c.useContainer()}},30939:function(oe,T,l){"use strict";l.d(T,{P:function(){return c}});var E=l(67294);function C(w){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(m){return typeof m}:C=function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},C(w)}var _=function(){var m=new WeakSet;return function(Y,R){if(C(R)==="object"&&R!==null){if(m.has(R))return;m.add(R)}return R}},c=function(m){return JSON.stringify(m,_())},Z=function(m,Y){try{return c(m)===c(Y)}catch(R){}return!1};function S(w){var m=useRef("");return Z(w,m.current)||(m.current=JSON.stringify(w,_())),m.current}function $(w,m){useEffect(w,[S(m)])}var x=null}}]);
