(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[599],{31199:function(p,o,e){"use strict";var n=e(67294),E=e(94286),a=e(64893);function u(){return u=Object.assign||function(r){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},u.apply(this,arguments)}function m(r,_){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);_&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),t.push.apply(t,s)}return t}function A(r){for(var _=1;_<arguments.length;_++){var t=arguments[_]!=null?arguments[_]:{};_%2?m(Object(t),!0).forEach(function(s){h(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function h(r,_,t){return _ in r?Object.defineProperty(r,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[_]=t,r}var U=function(_,t){var s=_.fieldProps,d=_.min,P=_.proFieldProps,f=_.max;return n.createElement(E.ZP,u({mode:"edit",valueType:"digit",fieldProps:A({min:d,max:f},s),ref:t},P))};o.Z=(0,a.Z)(n.forwardRef(U),{defaultProps:{width:"100%"}})},18584:function(){},55523:function(){},95763:function(p,o,e){"use strict";e.r(o);var n=e(58024),E=e(39144),a=e(3182),u=e(2824),m=e(57106),A=e(57663),h=e(95300),U=e(98858),r=e(94043),_=e.n(r),t=e(67294),s=e(75362),d=e(3843),P=e(5966),f=e(31199),l=e(85893),F=function(i){var D=i.stepData,M=i.bordered,v=D.receiverName,B=D.amount;return _jsxs(_Descriptions,{column:1,bordered:M,children:[_jsxs(_Descriptions.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D1",children:[" ",v]}),_jsx(_Descriptions.Item,{label:"\u8F6C\u8D26\u91D1\u989D1",children:_jsx(_Statistic,{value:B,suffix:_jsx("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},I=function(i){return _jsx(_Result,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:_jsxs(_Fragment,{children:[_jsx(_Button,{type:"primary",onClick:i.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),_jsx(_Button,{children:"\u67E5\u770B\u8D26\u5355"})]}),children:i.children})},y=function(){var i=(0,t.useState)({receiverName:"Alex",amount:"500"}),D=(0,u.Z)(i,2),M=D[0],v=D[1],B=(0,t.useState)(0),R=(0,u.Z)(B,2),T=R[0],b=R[1],j=(0,t.useRef)();return(0,l.jsx)(s.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,l.jsx)(E.Z,{bordered:!1,children:(0,l.jsx)(d.Z,{current:T,onCurrentChange:b,submitter:{render:function(O,C){return O.step===2?null:C}},children:(0,l.jsxs)(d.Z.StepForm,{formRef:j,initialValues:M,onFinish:function(){var x=(0,a.Z)(_().mark(function O(C){return _().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return v(C),c.abrupt("return",!0);case 2:case"end":return c.stop()}},O)}));return function(O){return x.apply(this,arguments)}}(),children:[(0,l.jsx)(P.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"sm",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,l.jsx)(P.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"sm",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,l.jsx)(f.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"sm",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]})})})})};o.default=y},57106:function(p,o,e){"use strict";var n=e(43673),E=e.n(n),a=e(18584),u=e.n(a)},95300:function(p,o,e){"use strict";var n=e(43673),E=e.n(n),a=e(55523),u=e.n(a),m=e(71748)}}]);
