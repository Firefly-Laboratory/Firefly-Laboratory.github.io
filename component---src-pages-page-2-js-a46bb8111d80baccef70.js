(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{p5nM:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("Bl7J"),o=n("vrFN"),i=n("wx14"),l=n("rePB"),s=n("ODXe"),u=n("U8pU"),d=n("TSYQ"),f=n.n(d),m=n("bT9E"),p=n("H84U"),b=n("1OyB"),v=function e(t){return Object(b.a)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e){return a.createElement(p.a,null,(function(t){var n,r=t.getPrefixCls,c=t.direction,o=e.prefixCls,s=e.size,u=e.className,d=h(e,["prefixCls","size","className"]),m=r("btn-group",o),p="";switch(s){case"large":p="lg";break;case"small":p="sm";break;case"middle":case void 0:break;default:console.warn(new v(s))}var b=f()(m,(n={},Object(l.a)(n,"".concat(m,"-").concat(p),p),Object(l.a)(n,"".concat(m,"-rtl"),"rtl"===c),n),u);return a.createElement("div",Object(i.a)({},d,{className:b}))}))},O=n("vuIU"),y=n("JX7q"),E=n("Ji7U"),j=n("LK+K"),x=n("BU3w"),C=n("c+Xe"),w=n("wgJM"),N=0,k={};function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=N++,a=t;function r(){(a-=1)<=0?(e(),delete k[n]):k[n]=Object(w.a)(r)}return k[n]=Object(w.a)(r),n}S.cancel=function(e){void 0!==e&&(w.a.cancel(k[e]),delete k[e])},S.ids=k;var T,P=n("0n0R");function A(e){return!e||null===e.offsetParent||e.hidden}function R(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var I=function(e){Object(E.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.apply(this,arguments)).containerRef=a.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var a,r;if(!(!t||A(t)||t.className.indexOf("-leave")>=0)){var c=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=Object(y.a)(e).extraNode,i=e.context.getPrefixCls;o.className="".concat(i(""),"-click-animating-node");var l=e.getAttributeName();if(t.setAttribute(l,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&R(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){o.style.borderColor=n;var s=(null===(a=t.getRootNode)||void 0===a?void 0:a.call(t))||t.ownerDocument,u=s instanceof Document?s.body:null!==(r=s.firstChild)&&void 0!==r?r:s;T=Object(x.a)("\n      [".concat(i(""),"-click-animating-without-extra-node='true']::after, .").concat(i(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:u})}c&&t.appendChild(o),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!A(n.target)){e.resetEffect(t);var a=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,a)}),0),S.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=S((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!a.isValidElement(r))return r;var c=e.containerRef;return Object(C.c)(r)&&(c=Object(C.a)(r.ref,e.containerRef)),Object(P.a)(r,{ref:c})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),T&&(T.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return a.createElement(p.a,null,this.renderWave)}}]),n}(a.Component);I.contextType=p.b;var L=n("CWQg"),B=n("uaoM"),U=a.createContext(void 0),W=U,M=n("8XRh"),z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},J=n("6VBw"),D=function(e,t){return a.createElement(J.a,Object.assign({},e,{ref:t,icon:z}))};D.displayName="LoadingOutlined";var V=a.forwardRef(D),X=function(){return{width:0,opacity:0,transform:"scale(0)"}},H=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},K=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?r.a.createElement("span",{className:"".concat(t,"-loading-icon")},r.a.createElement(V,null)):r.a.createElement(M.a,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:X,onAppearActive:H,onEnterStart:X,onEnterActive:H,onLeaveStart:H,onLeaveActive:X},(function(e,n){var a=e.className,c=e.style;return r.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:c,ref:n},r.a.createElement(V,{className:a}))}))},_=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},q=/^[\u4e00-\u9fa5]{2}$/,Q=q.test.bind(q);function F(e){return"text"===e||"link"===e}function G(e,t){var n=!1,r=[];return a.Children.forEach(e,(function(e){var t=Object(u.a)(e),a="string"===t||"number"===t;if(n&&a){var c=r.length-1,o=r[c];r[c]="".concat(o).concat(e)}else r.push(e);n=a})),a.Children.map(r,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&Q(e.props.children)?Object(P.a)(e,{children:e.props.children.split("").join(n)}):"string"==typeof e?(Q(e)&&(e=e.split("").join(n)),a.createElement("span",null,e)):e}}(e,t)}))}Object(L.a)("default","primary","ghost","dashed","link","text"),Object(L.a)("circle","round"),Object(L.a)("submit","button","reset");var Y=function(e,t){var n,r,c=e.loading,o=void 0!==c&&c,d=e.prefixCls,b=e.type,v=e.danger,h=e.shape,g=e.size,O=e.className,y=e.children,E=e.icon,j=e.ghost,x=void 0!==j&&j,C=e.block,w=void 0!==C&&C,N=e.htmlType,k=void 0===N?"button":N,S=_(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),T=a.useContext(W),P=a.useState(!!o),A=Object(s.a)(P,2),R=A[0],L=A[1],U=a.useState(!1),M=Object(s.a)(U,2),z=M[0],J=M[1],D=a.useContext(p.b),V=D.getPrefixCls,X=D.autoInsertSpaceInButton,H=D.direction,q=t||a.createRef(),Y=a.useRef(),$=function(){return 1===a.Children.count(y)&&!E&&!F(b)};r="object"===Object(u.a)(o)&&o.delay?o.delay||!0:!!o,a.useEffect((function(){clearTimeout(Y.current),"number"==typeof r?Y.current=window.setTimeout((function(){L(r)}),r):L(r)}),[r]),a.useEffect((function(){if(q&&q.current&&!1!==X){var e=q.current.textContent;$()&&Q(e)?z||J(!0):z&&J(!1)}}),[q]);var Z=function(t){var n,a=e.onClick,r=e.disabled;R||r?t.preventDefault():null===(n=a)||void 0===n||n(t)};Object(B.a)(!("string"==typeof E&&E.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(E,"` at https://ant.design/components/icon")),Object(B.a)(!(x&&F(b)),"Button","`link` or `text` button can't be a `ghost` button.");var ee=V("btn",d),te=!1!==X,ne="";switch(g||T){case"large":ne="lg";break;case"small":ne="sm"}var ae=R?"loading":E,re=f()(ee,(n={},Object(l.a)(n,"".concat(ee,"-").concat(b),b),Object(l.a)(n,"".concat(ee,"-").concat(h),h),Object(l.a)(n,"".concat(ee,"-").concat(ne),ne),Object(l.a)(n,"".concat(ee,"-icon-only"),!y&&0!==y&&!!ae),Object(l.a)(n,"".concat(ee,"-background-ghost"),x&&!F(b)),Object(l.a)(n,"".concat(ee,"-loading"),R),Object(l.a)(n,"".concat(ee,"-two-chinese-chars"),z&&te),Object(l.a)(n,"".concat(ee,"-block"),w),Object(l.a)(n,"".concat(ee,"-dangerous"),!!v),Object(l.a)(n,"".concat(ee,"-rtl"),"rtl"===H),n),O),ce=E&&!R?E:a.createElement(K,{existIcon:!!E,prefixCls:ee,loading:!!R}),oe=y||0===y?G(y,$()&&te):null,ie=Object(m.a)(S,["navigate"]);if(void 0!==ie.href)return a.createElement("a",Object(i.a)({},ie,{className:re,onClick:Z,ref:q}),ce,oe);var le=a.createElement("button",Object(i.a)({},S,{type:k,className:re,onClick:Z,ref:q}),ce,oe);return F(b)?le:a.createElement(I,null,le)},$=a.forwardRef(Y);$.displayName="Button",$.Group=g,$.__ANT_BUTTON=!0;var Z=$,ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},te=function(e,t){return a.createElement(J.a,Object.assign({},e,{ref:t,icon:ee}))};te.displayName="SearchOutlined";var ne=a.forwardRef(te);t.default=function(){return r.a.createElement(c.a,{defKey:"page2"},r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page!"),r.a.createElement("p",null,"Welcome to page 2! ",r.a.createElement("br",null),"Check out that blue highlight on the header! ",r.a.createElement("br",null)),r.a.createElement(Z,{type:"primary",icon:r.a.createElement(ne,null)},"Example button from readme.md"),r.a.createElement("p",null,r.a.createElement("br",null),"Check out that useful button!"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a46bb8111d80baccef70.js.map